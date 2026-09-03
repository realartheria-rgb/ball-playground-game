import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { World } from '../world/World.js';
import { Player } from '../player/Player.js';
import { Collectibles } from '../collectibles/Collectibles.js';
import { UI } from '../ui/UI.js';
import { Audio } from '../audio/Audio.js';
import { Effects } from '../effects/Effects.js';

export class Game {
  constructor(container) {
    this.container = container;
    this.clock = new THREE.Clock();
    this.isRunning = false;
    this.isPaused = false;
    this.gameState = 'menu'; // menu, countdown, playing, gameover
    this.score = 0;
    this.bestScore = parseInt(localStorage.getItem('ballPlaygroundBest') || '0');
    this.timeLeft = 120;
    this.lastTime = 0;
    
    this.initRenderer();
    this.initScene();
    this.initCamera();
    this.initPhysics();
    this.initLights();
    
    this.world = new World(this.scene, this.physicsWorld);
    this.player = new Player(this.scene, this.physicsWorld, this.camera);
    this.collectibles = new Collectibles(this.scene, this.physicsWorld);
    this.effects = new Effects(this.scene);
    this.audio = new Audio();
    this.ui = new UI(this);
    
    this.setupEventListeners();
    this.animate();
  }
  
  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;
    this.container.appendChild(this.renderer.domElement);
  }
  
  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87ceeb);
    this.scene.fog = new THREE.Fog(0x87ceeb, 80, 200);
  }
  
  initCamera() {
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 8, 12);
    this.camera.lookAt(0, 0, 0);
  }
  
  initPhysics() {
    this.physicsWorld = new CANNON.World({
      gravity: new CANNON.Vec3(0, -9.82, 0)
    });
    this.physicsWorld.broadphase = new CANNON.SAPBroadphase(this.physicsWorld);
    this.physicsWorld.allowSleep = true;
    this.physicsWorld.defaultContactMaterial.friction = 0.3;
    this.physicsWorld.defaultContactMaterial.restitution = 0.4;
  }
  
  initLights() {
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambient);
    
    const directional = new THREE.DirectionalLight(0xffffff, 1.0);
    directional.position.set(30, 50, 30);
    directional.castShadow = true;
    directional.shadow.mapSize.width = 2048;
    directional.shadow.mapSize.height = 2048;
    directional.shadow.camera.near = 0.5;
    directional.shadow.camera.far = 150;
    directional.shadow.camera.left = -50;
    directional.shadow.camera.right = 50;
    directional.shadow.camera.top = 50;
    directional.shadow.camera.bottom = -50;
    this.scene.add(directional);
    
    const hemisphere = new THREE.HemisphereLight(0x87ceeb, 0x44aa44, 0.4);
    this.scene.add(hemisphere);
  }
  
  setupEventListeners() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
    
    window.addEventListener('keydown', (e) => this.player.handleKeyDown(e));
    window.addEventListener('keyup', (e) => this.player.handleKeyUp(e));
    window.addEventListener('mousemove', (e) => this.player.handleMouseMove(e));
    window.addEventListener('touchstart', (e) => this.player.handleTouchStart(e));
    window.addEventListener('touchmove', (e) => this.player.handleTouchMove(e));
    window.addEventListener('touchend', (e) => this.player.handleTouchEnd(e));
  }
  
  start() {
    this.isRunning = true;
    this.clock.start();
  }
  
  startGame() {
    this.gameState = 'countdown';
    this.score = 0;
    this.timeLeft = 120;
    this.player.reset();
    this.collectibles.reset();
    this.ui.showCountdown();
  }
  
  update() {
    if (!this.isRunning || this.isPaused) return;
    
    const delta = Math.min(this.clock.getDelta(), 0.1);
    
    if (this.gameState === 'playing') {
      this.timeLeft -= delta;
      if (this.timeLeft <= 0) {
        this.timeLeft = 0;
        this.endGame();
      }
    }
    
    this.physicsWorld.step(1/60, delta, 3);
    this.player.update(delta);
    this.collectibles.update(delta, this.player.getPosition());
    this.effects.update(delta);
    this.ui.update();
  }
  
  endGame() {
    this.gameState = 'gameover';
    if (this.score > this.bestScore) {
      this.bestScore = this.score;
      localStorage.setItem('ballPlaygroundBest', this.bestScore.toString());
      this.ui.showNewRecord();
    }
    this.audio.playGameOver();
    this.ui.showGameOver();
  }
  
  animate() {
    requestAnimationFrame(() => this.animate());
    this.update();
    this.renderer.render(this.scene, this.camera);
  }
  
  addScore(points) {
    this.score += points;
    this.audio.playCollect();
  }
  
  getScore() { return this.score; }
  getTimeLeft() { return this.timeLeft; }
  getBestScore() { return this.bestScore; }
  getState() { return this.gameState; }
}

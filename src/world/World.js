import * as THREE from 'three';
import * as CANNON from 'cannon-es';

export class World {
  constructor(scene, physicsWorld) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    
    this.meshes = [];
    this.bodies = [];
    
    this.createGround();
    this.createPlayground();
    this.createSlides();
    this.createSwings();
    this.createSeesaw();
    this.createSandbox();
    this.createFountain();
    this.createTrees();
    this.createBushes();
    this.createDecorations();
    this.createRamps();
    this.createWalls();
  }
  
  createGround() {
    // Основная площадка (зелёная трава)
    const groundGeo = new THREE.PlaneGeometry(100, 100, 32, 32);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x4caf50,
      roughness: 0.8,
      metalness: 0.1
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);
    
    // Физика для земли
    const groundBody = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Plane(),
      position: new CANNON.Vec3(0, 0, 0)
    });
    groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    this.physicsWorld.addBody(groundBody);
    
    // Дорожка (бежевая)
    const pathGeo = new THREE.PlaneGeometry(8, 60);
    const pathMat = new THREE.MeshStandardMaterial({ color: 0xd7ccc8 });
    const path = new THREE.Mesh(pathGeo, pathMat);
    path.rotation.x = -Math.PI / 2;
    path.position.y = 0.01;
    path.receiveShadow = true;
    this.scene.add(path);
  }
  
  createPlayground() {
    // Платформа для горки
    const platformGeo = new THREE.BoxGeometry(6, 1, 6);
    const platformMat = new THREE.MeshStandardMaterial({ color: 0xff9800 });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.set(15, 0.5, 0);
    platform.castShadow = true;
    platform.receiveShadow = true;
    this.scene.add(platform);
    
    const platformBody = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Box(new CANNON.Vec3(3, 0.5, 3)),
      position: new CANNON.Vec3(15, 0.5, 0)
    });
    this.physicsWorld.addBody(platformBody);
    
    // Горка (рампа)
    const slideGeo = new THREE.BoxGeometry(3, 0.2, 10);
    const slideMat = new THREE.MeshStandardMaterial({ color: 0x2196f3 });
    const slide = new THREE.Mesh(slideGeo, slideMat);
    slide.position.set(15, 3, 8);
    slide.rotation.x = -Math.PI / 6;
    slide.castShadow = true;
    this.scene.add(slide);
    
    const slideBody = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Box(new CANNON.Vec3(1.5, 0.1, 5)),
      position: new CANNON.Vec3(15, 3, 8)
    });
    slideBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 6);
    this.physicsWorld.addBody(slideBody);
    
    // Лестница к горке
    for (let i = 0; i < 5; i++) {
      const stepGeo = new THREE.BoxGeometry(2, 0.3, 0.5);
      const step = new THREE.Mesh(stepGeo, platformMat);
      step.position.set(15, 0.3 + i * 0.5, -2 + i * 0.8);
      step.castShadow = true;
      this.scene.add(step);
      
      const stepBody = new CANNON.Body({
        mass: 0,
        shape: new CANNON.Box(new CANNON.Vec3(1, 0.15, 0.25)),
        position: new CANNON.Vec3(15, 0.3 + i * 0.5, -2 + i * 0.8)
      });
      this.physicsWorld.addBody(stepBody);
    }
  }
  
  createSlides() {
    // Вторая горка (спиральная)
    const slide2Group = new THREE.Group();
    const slide2Mat = new THREE.MeshStandardMaterial({ color: 0xe91e63 });
    
    for (let i = 0; i < 8; i++) {
      const segment = new THREE.Mesh(
        new THREE.BoxGeometry(2.5, 0.15, 2),
        slide2Mat
      );
      segment.position.y = -i * 0.6;
      segment.rotation.y = (Math.PI / 4) * i;
      segment.position.x = Math.sin((Math.PI / 4) * i) * 2;
      segment.position.z = Math.cos((Math.PI / 4) * i) * 2;
      segment.castShadow = true;
      slide2Group.add(segment);
    }
    
    slide2Group.position.set(-15, 5, 0);
    this.scene.add(slide2Group);
    
    // Центральный столб
    const pillarGeo = new THREE.CylinderGeometry(0.3, 0.3, 10, 16);
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x795548 });
    const pillar = new THREE.Mesh(pillarGeo, pillarMat);
    pillar.position.set(-15, 0, 0);
    pillar.castShadow = true;
    this.scene.add(pillar);
    
    const pillarBody = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Cylinder(0.3, 0.3, 10, 16),
      position: new CANNON.Vec3(-15, 0, 0)
    });
    this.physicsWorld.addBody(pillarBody);
  }
  
  createSwings() {
    // Качели
    const frameMat = new THREE.MeshStandardMaterial({ color: 0xff5722 });
    
    // Опоры
    const leftPole = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 5), frameMat);
    leftPole.position.set(-8, 2.5, 15);
    leftPole.rotation.z = Math.PI / 8;
    leftPole.castShadow = true;
    this.scene.add(leftPole);
    
    const rightPole = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 5), frameMat);
    rightPole.position.set(-4, 2.5, 15);
    rightPole.rotation.z = -Math.PI / 8;
    rightPole.castShadow = true;
    this.scene.add(rightPole);
    
    // Перекладина
    const topBar = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 5), frameMat);
    topBar.position.set(-6, 5, 15);
    topBar.rotation.z = Math.PI / 2;
    topBar.castShadow = true;
    this.scene.add(topBar);
    
    // Сиденье
    const seatGeo = new THREE.BoxGeometry(1.5, 0.2, 0.8);
    const seatMat = new THREE.MeshStandardMaterial({ color: 0x4caf50 });
    const seat = new THREE.Mesh(seatGeo, seatMat);
    seat.position.set(-6, 2.5, 15);
    seat.castShadow = true;
    this.scene.add(seat);
    
    // Цепи
    const chainMat = new THREE.MeshStandardMaterial({ color: 0x9e9e9e });
    const leftChain = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 2.5), chainMat);
    leftChain.position.set(-6.5, 3.75, 15);
    this.scene.add(leftChain);
    
    const rightChain = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 2.5), chainMat);
    rightChain.position.set(-5.5, 3.75, 15);
    this.scene.add(rightChain);
    
    // Физика качелей
    const seatBody = new CANNON.Body({
      mass: 1,
      shape: new CANNON.Box(new CANNON.Vec3(0.75, 0.1, 0.4)),
      position: new CANNON.Vec3(-6, 2.5, 15)
    });
    this.physicsWorld.addBody(seatBody);
    
    const hinge = new CANNON.HingeConstraint(seatBody, new CANNON.Body({ mass: 0 }), {
      pivotA: new CANNON.Vec3(0, 1.5, 0),
      axisA: new CANNON.Vec3(1, 0, 0),
      pivotB: new CANNON.Vec3(-6, 5, 15),
      axisB: new CANNON.Vec3(1, 0, 0)
    });
    this.physicsWorld.addConstraint(hinge);
  }
  
  createSeesaw() {
    // Каталка (качели-балансир)
    const plankGeo = new THREE.BoxGeometry(5, 0.3, 1.5);
    const plankMat = new THREE.MeshStandardMaterial({ color: 0xffeb3b });
    const plank = new THREE.Mesh(plankGeo, plankMat);
    plank.position.set(0, 1.5, 20);
    plank.castShadow = true;
    this.scene.add(plank);
    
    const plankBody = new CANNON.Body({
      mass: 2,
      shape: new CANNON.Box(new CANNON.Vec3(2.5, 0.15, 0.75)),
      position: new CANNON.Vec3(0, 1.5, 20)
    });
    this.physicsWorld.addBody(plankBody);
    
    // Опора (треугольник)
    const supportGeo = new THREE.ConeGeometry(1, 1.5, 4);
    const supportMat = new THREE.MeshStandardMaterial({ color: 0x9c27b0 });
    const support = new THREE.Mesh(supportGeo, supportMat);
    support.position.set(0, 0.75, 20);
    support.rotation.y = Math.PI / 4;
    support.castShadow = true;
    this.scene.add(support);
    
    const supportBody = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Cylinder(0.5, 1, 1.5, 4),
      position: new CANNON.Vec3(0, 0.75, 20)
    });
    this.physicsWorld.addBody(supportBody);
    
    // Шарнир для каталки
    const hinge = new CANNON.HingeConstraint(plankBody, supportBody, {
      pivotA: new CANNON.Vec3(0, 0, 0),
      axisA: new CANNON.Vec3(1, 0, 0),
      pivotB: new CANNON.Vec3(0, 0.75, 0),
      axisB: new CANNON.Vec3(1, 0, 0)
    });
    this.physicsWorld.addConstraint(hinge);
  }
  
  createSandbox() {
    // Песочница
    const sandGeo = new THREE.BoxGeometry(10, 0.5, 10);
    const sandMat = new THREE.MeshStandardMaterial({ color: 0xf5deb3 });
    const sand = new THREE.Mesh(sandGeo, sandMat);
    sand.position.set(25, 0.25, 0);
    sand.receiveShadow = true;
    this.scene.add(sand);
    
    const sandBody = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Box(new CANNON.Vec3(5, 0.25, 5)),
      position: new CANNON.Vec3(25, 0.25, 0)
    });
    this.physicsWorld.addBody(sandBody);
    
    // Столбики песочницы
    const postMat = new THREE.MeshStandardMaterial({ color: 0x8d6e63 });
    const positions = [[20, 1, -5], [30, 1, -5], [20, 1, 5], [30, 1, 5]];
    positions.forEach(([x, y, z]) => {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1), postMat);
      post.position.set(x, y, z);
      post.castShadow = true;
      this.scene.add(post);
      
      const postBody = new CANNON.Body({
        mass: 0,
        shape: new CANNON.Cylinder(0.2, 0.2, 1, 8),
        position: new CANNON.Vec3(x, y, z)
      });
      this.physicsWorld.addBody(postBody);
    });
  }
  
  createFountain() {
    // Фонтан в центре
    const baseGeo = new THREE.CylinderGeometry(4, 4.5, 1, 32);
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x607d8b });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.set(0, 0.5, 0);
    base.castShadow = true;
    this.scene.add(base);
    
    const baseBody = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Cylinder(4, 4.5, 1, 32),
      position: new CANNON.Vec3(0, 0.5, 0)
    });
    this.physicsWorld.addBody(baseBody);
    
    // Вода
    const waterGeo = new THREE.CylinderGeometry(3.5, 3.5, 0.3, 32);
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x03a9f4,
      transparent: true,
      opacity: 0.7
    });
    const water = new THREE.Mesh(waterGeo, waterMat);
    water.position.set(0, 1.15, 0);
    this.scene.add(water);
    
    // Центральный столб
    const centerPole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.3, 0.3, 3),
      new THREE.MeshStandardMaterial({ color: 0x9e9e9e })
    );
    centerPole.position.set(0, 2.5, 0);
    centerPole.castShadow = true;
    this.scene.add(centerPole);
  }
  
  createTrees() {
    const treePositions = [
      [-25, 0, -25], [25, 0, -25], [-25, 0, 25], [25, 0, 25],
      [-35, 0, 0], [35, 0, 0], [0, 0, -35], [0, 0, 35]
    ];
    
    treePositions.forEach(([x, y, z]) => {
      this.createTree(x, y, z);
    });
  }
  
  createTree(x, y, z) {
    // Ствол
    const trunkGeo = new THREE.CylinderGeometry(0.3, 0.5, 3, 8);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x795548 });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.set(x, y + 1.5, z);
    trunk.castShadow = true;
    this.scene.add(trunk);
    
    const trunkBody = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Cylinder(0.3, 0.5, 3, 8),
      position: new CANNON.Vec3(x, y + 1.5, z)
    });
    this.physicsWorld.addBody(trunkBody);
    
    // Крона (3 слоя)
    const leafColors = [0x2e7d32, 0x388e3c, 0x43a047];
    for (let i = 0; i < 3; i++) {
      const crownGeo = new THREE.ConeGeometry(2 - i * 0.5, 2, 8);
      const crownMat = new THREE.MeshStandardMaterial({ color: leafColors[i] });
      const crown = new THREE.Mesh(crownGeo, crownMat);
      crown.position.set(x, y + 4 + i * 1.2, z);
      crown.castShadow = true;
      this.scene.add(crown);
    }
  }
  
  createBushes() {
    const bushPositions = [
      [-20, 0, -10], [20, 0, -10], [-20, 0, 10], [20, 0, 10],
      [-30, 0, -20], [30, 0, -20], [-30, 0, 20], [30, 0, 20]
    ];
    
    bushPositions.forEach(([x, y, z]) => {
      const bushGeo = new THREE.SphereGeometry(1, 8, 8);
      const bushMat = new THREE.MeshStandardMaterial({ color: 0x66bb6a });
      const bush = new THREE.Mesh(bushGeo, bushMat);
      bush.position.set(x, y + 0.8, z);
      bush.scale.y = 0.7;
      bush.castShadow = true;
      this.scene.add(bush);
    });
  }
  
  createDecorations() {
    // Цветные кубы
    const cubeColors = [0xff5722, 0x2196f3, 0xffeb3b, 0x9c27b0, 0x4caf50];
    const cubePositions = [
      [-10, 0.5, -15], [10, 0.5, -15], [-10, 0.5, 15], [10, 0.5, 15],
      [-15, 0.5, -5], [15, 0.5, -5], [-15, 0.5, 5], [15, 0.5, 5]
    ];
    
    cubePositions.forEach(([x, y, z], i) => {
      const cubeGeo = new THREE.BoxGeometry(1.5, 1.5, 1.5);
      const cubeMat = new THREE.MeshStandardMaterial({ color: cubeColors[i % cubeColors.length] });
      const cube = new THREE.Mesh(cubeGeo, cubeMat);
      cube.position.set(x, y, z);
      cube.castShadow = true;
      this.scene.add(cube);
      
      const cubeBody = new CANNON.Body({
        mass: 0,
        shape: new CANNON.Box(new CANNON.Vec3(0.75, 0.75, 0.75)),
        position: new CANNON.Vec3(x, y, z)
      });
      this.physicsWorld.addBody(cubeBody);
    });
    
    // Столбики
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const x = Math.cos(angle) * 40;
      const z = Math.sin(angle) * 40;
      
      const postGeo = new THREE.CylinderGeometry(0.3, 0.3, 2, 8);
      const postMat = new THREE.MeshStandardMaterial({ color: 0xff9800 });
      const post = new THREE.Mesh(postGeo, postMat);
      post.position.set(x, 1, z);
      post.castShadow = true;
      this.scene.add(post);
      
      const postBody = new CANNON.Body({
        mass: 0,
        shape: new CANNON.Cylinder(0.3, 0.3, 2, 8),
        position: new CANNON.Vec3(x, 1, z)
      });
      this.physicsWorld.addBody(postBody);
    }
  }
  
  createRamps() {
    // Прыжковые платформы
    const rampPositions = [
      { pos: [-20, 0, -20], rot: 0.2 },
      { pos: [20, 0, -20], rot: -0.2 },
      { pos: [-20, 0, 20], rot: 0.3 },
      { pos: [20, 0, 20], rot: -0.3 }
    ];
    
    rampPositions.forEach(({ pos, rot }) => {
      const rampGeo = new THREE.BoxGeometry(4, 0.3, 8);
      const rampMat = new THREE.MeshStandardMaterial({ color: 0xffc107 });
      const ramp = new THREE.Mesh(rampGeo, rampMat);
      ramp.position.set(pos[0], pos[1] + 2, pos[2]);
      ramp.rotation.x = rot;
      ramp.castShadow = true;
      this.scene.add(ramp);
      
      const rampBody = new CANNON.Body({
        mass: 0,
        shape: new CANNON.Box(new CANNON.Vec3(2, 0.15, 4)),
        position: new CANNON.Vec3(pos[0], pos[1] + 2, pos[2])
      });
      rampBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), rot);
      this.physicsWorld.addBody(rampBody);
    });
  }
  
  createWalls() {
    // Стенки по периметру (чтобы мяч не выкатился)
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x9e9e9e, transparent: true, opacity: 0.3 });
    const wallHeight = 1.5;
    const worldSize = 50;
    
    const walls = [
      { pos: [0, wallHeight / 2, -worldSize], size: [worldSize * 2, wallHeight, 0.5] },
      { pos: [0, wallHeight / 2, worldSize], size: [worldSize * 2, wallHeight, 0.5] },
      { pos: [-worldSize, wallHeight / 2, 0], size: [0.5, wallHeight, worldSize * 2] },
      { pos: [worldSize, wallHeight / 2, 0], size: [0.5, wallHeight, worldSize * 2] }
    ];
    
    walls.forEach(({ pos, size }) => {
      const wallGeo = new THREE.BoxGeometry(...size);
      const wall = new THREE.Mesh(wallGeo, wallMat);
      wall.position.set(...pos);
      wall.receiveShadow = true;
      this.scene.add(wall);
      
      const wallBody = new CANNON.Body({
        mass: 0,
        shape: new CANNON.Box(new CANNON.Vec3(size[0] / 2, size[1] / 2, size[2] / 2)),
        position: new CANNON.Vec3(...pos)
      });
      this.physicsWorld.addBody(wallBody);
    });
  }
}

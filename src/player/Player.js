import * as THREE from 'three';
import * as CANNON from 'cannon-es';

export class Player {
  constructor(scene, physicsWorld, camera) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    this.camera = camera;
    
    this.position = new THREE.Vector3(0, 2, 0);
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.rotation = 0;
    this.speed = 0;
    this.maxSpeed = 15;
    this.acceleration = 40;
    this.friction = 0.92;
    this.isGrounded = false;
    this.canJump = true;
    this.jumpForce = 8;
    this.boostMultiplier = 1;
    this.shieldActive = false;
    this.jumpBoostActive = false;
    
    this.keys = { w: false, a: false, s: false, d: false, space: false, shift: false };
    this.mouseX = 0;
    this.cameraAngle = 0;
    
    this.initMesh();
    this.initBody();
  }
  
  initMesh() {
    const geometry = new THREE.SphereGeometry(0.8, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0xff4444,
      roughness: 0.3,
      metalness: 0.1
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.scene.add(this.mesh);
    
    // Белые полоски на мяче
    const stripeGeo = new THREE.TorusGeometry(0.8, 0.05, 8, 32);
    const stripeMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    for (let i = 0; i < 3; i++) {
      const stripe = new THREE.Mesh(stripeGeo, stripeMat);
      stripe.rotation.x = (Math.PI / 3) * i;
      stripe.castShadow = true;
      this.mesh.add(stripe);
    }
  }
  
  initBody() {
    this.body = new CANNON.Body({
      mass: 5,
      shape: new CANNON.Sphere(0.8),
      position: new CANNON.Vec3(0, 2, 0),
      linearDamping: 0.3,
      angularDamping: 0.5
    });
    this.body.allowSleep = false;
    this.physicsWorld.addBody(this.body);
  }
  
  update(delta) {
    // Применяем управление
    const force = new CANNON.Vec3(0, 0, 0);
    const inputVector = new THREE.Vector3(0, 0, 0);
    
    if (this.keys.w) inputVector.z -= 1;
    if (this.keys.s) inputVector.z += 1;
    if (this.keys.a) inputVector.x -= 1;
    if (this.keys.d) inputVector.x += 1;
    
    if (inputVector.length() > 0) {
      inputVector.normalize();
      
      // Учитываем поворот камеры
      const angle = this.cameraAngle;
      const rotatedX = inputVector.x * Math.cos(angle) - inputVector.z * Math.sin(angle);
      const rotatedZ = inputVector.x * Math.sin(angle) + inputVector.z * Math.cos(angle);
      
      const accel = this.acceleration * this.boostMultiplier;
      force.x = rotatedX * accel;
      force.z = rotatedZ * accel;
      
      this.speed = Math.min(this.speed + accel * delta, this.maxSpeed * this.boostMultiplier);
    } else {
      this.speed *= this.friction;
    }
    
    this.body.applyForce(force, this.body.position);
    
    // Прыжок
    if (this.keys.space && this.isGrounded && this.canJump) {
      this.body.velocity.y = this.jumpForce * (this.jumpBoostActive ? 1.5 : 1);
      this.isGrounded = false;
      this.canJump = false;
      setTimeout(() => this.canJump = true, 200);
    }
    
    // Ограничиваем скорость
    const horizontalVel = new CANNON.Vec3(this.body.velocity.x, 0, this.body.velocity.z);
    if (horizontalVel.length() > this.maxSpeed * this.boostMultiplier) {
      horizontalVel = horizontalVel.scale(this.maxSpeed * this.boostMultiplier / horizontalVel.length());
      this.body.velocity.x = horizontalVel.x;
      this.body.velocity.z = horizontalVel.z;
    }
    
    // Обновляем позицию меша
    this.mesh.position.copy(this.body.position);
    
    // Вращение мяча при движении
    if (horizontalVel.length() > 0.1) {
      const rotAxis = new THREE.Vector3(-horizontalVel.z, 0, horizontalVel.x).normalize();
      const rotSpeed = horizontalVel.length() * delta;
      this.mesh.rotateOnWorldAxis(rotAxis, rotSpeed);
    }
    
    // Обновляем камеру
    this.updateCamera();
    
    // Проверяем, на земле ли мяч
    this.checkGrounded();
    
    // Проверяем падение
    if (this.body.position.y < -10) {
      this.reset();
    }
  }
  
  updateCamera() {
    const cameraOffset = new THREE.Vector3(
      Math.sin(this.cameraAngle) * 12,
      8,
      Math.cos(this.cameraAngle) * 12
    );
    
    const targetPos = this.mesh.position.clone().add(cameraOffset);
    this.camera.position.lerp(targetPos, 0.05);
    
    const lookAt = this.mesh.position.clone();
    lookAt.y += 1;
    this.camera.lookAt(lookAt);
  }
  
  checkGrounded() {
    const rayFrom = this.body.position;
    const rayTo = new CANNON.Vec3(this.body.position.x, this.body.position.y - 1.2, this.body.position.z);
    const raycast = new CANNON.Ray(rayFrom, rayTo);
    raycast.skipBackfaces = true;
    const result = raycast.intersectWorld(this.physicsWorld, { mode: CANNON.Ray.CLOSEST, skipBackfaces: true });
    this.isGrounded = result.hasHit;
  }
  
  handleKeyDown(e) {
    const key = e.key.toLowerCase();
    if (key === 'w' || key === 'arrowup') this.keys.w = true;
    if (key === 's' || key === 'arrowdown') this.keys.s = true;
    if (key === 'a' || key === 'arrowleft') this.keys.a = true;
    if (key === 'd' || key === 'arrowright') this.keys.d = true;
    if (key === ' ') this.keys.space = true;
    if (key === 'shift') this.keys.shift = true;
  }
  
  handleKeyUp(e) {
    const key = e.key.toLowerCase();
    if (key === 'w' || key === 'arrowup') this.keys.w = false;
    if (key === 's' || key === 'arrowdown') this.keys.s = false;
    if (key === 'a' || key === 'arrowleft') this.keys.a = false;
    if (key === 'd' || key === 'arrowright') this.keys.d = false;
    if (key === ' ') this.keys.space = false;
    if (key === 'shift') this.keys.shift = false;
  }
  
  handleMouseMove(e) {
    this.cameraAngle += e.movementX * 0.005;
  }
  
  handleTouchStart(e) {
    // Мобильное управление
  }
  
  handleTouchMove(e) {
    // Мобильное управление
  }
  
  handleTouchEnd(e) {
    // Мобильное управление
  }
  
  getPosition() {
    return this.mesh.position;
  }
  
  getSpeed() {
    return this.speed;
  }
  
  reset() {
    this.body.position.set(0, 2, 0);
    this.body.velocity.set(0, 0, 0);
    this.body.angularVelocity.set(0, 0, 0);
    this.mesh.position.set(0, 2, 0);
    this.speed = 0;
    this.boostMultiplier = 1;
    this.shieldActive = false;
    this.jumpBoostActive = false;
  }
  
  activateBoost() {
    this.boostMultiplier = 1.8;
    setTimeout(() => this.boostMultiplier = 1, 5000);
  }
  
  activateShield() {
    this.shieldActive = true;
    this.mesh.material.emissive = new THREE.Color(0x00ffff);
    this.mesh.material.emissiveIntensity = 0.5;
  }
  
  activateJumpBoost() {
    this.jumpBoostActive = true;
    setTimeout(() => this.jumpBoostActive = false, 5000);
  }
  
  deactivateShield() {
    this.shieldActive = false;
    this.mesh.material.emissive = new THREE.Color(0x000000);
    this.mesh.material.emissiveIntensity = 0;
  }
}

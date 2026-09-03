import * as THREE from 'three';
import * as CANNON from 'cannon-es';

export class Collectibles {
  constructor(scene, world) {
    this.scene = scene;
    this.world = world;
    this.objects = [];
    this.spawnPositions = [];
    
    this.initSpawnPositions();
    this.createObjects();
  }
  
  initSpawnPositions() {
    // Позиции для генерации объектов
    for (let i = 0; i < 50; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 5 + Math.random() * 35;
      this.spawnPositions.push({
        x: Math.cos(angle) * radius,
        z: Math.sin(angle) * radius
      });
    }
  }
  
  createObjects() {
    this.spawnPositions.forEach((pos, i) => {
      const type = this.getRandomType();
      this.createObject(pos.x, 1.5, pos.z, type, i);
    });
  }
  
  getRandomType() {
    const rand = Math.random();
    if (rand < 0.5) return 'coin';
    if (rand < 0.7) return 'star';
    if (rand < 0.85) return 'speed';
    if (rand < 0.95) return 'shield';
    return 'jump';
  }
  
  createObject(x, y, z, type, id) {
    let geometry, material, body;
    
    switch (type) {
      case 'coin':
        geometry = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 16);
        material = new THREE.MeshStandardMaterial({
          color: 0xffd700,
          metalness: 0.8,
          roughness: 0.2,
          emissive: 0xffa000,
          emissiveIntensity: 0.3
        });
        break;
      case 'star':
        geometry = this.createStarGeometry();
        material = new THREE.MeshStandardMaterial({
          color: 0xffeb3b,
          metalness: 0.5,
          roughness: 0.3,
          emissive: 0xffc107,
          emissiveIntensity: 0.5
        });
        break;
      case 'speed':
        geometry = new THREE.ConeGeometry(0.3, 0.6, 4);
        material = new THREE.MeshStandardMaterial({
          color: 0x00ffff,
          metalness: 0.5,
          roughness: 0.3,
          emissive: 0x00bcd4,
          emissiveIntensity: 0.5
        });
        break;
      case 'shield':
        geometry = new THREE.OctahedronGeometry(0.4);
        material = new THREE.MeshStandardMaterial({
          color: 0x2196f3,
          metalness: 0.5,
          roughness: 0.3,
          emissive: 0x1976d2,
          emissiveIntensity: 0.5
        });
        break;
      case 'jump':
        geometry = new THREE.TorusGeometry(0.3, 0.1, 8, 16);
        material = new THREE.MeshStandardMaterial({
          color: 0x9c27b0,
          metalness: 0.5,
          roughness: 0.3,
          emissive: 0x7b1fa2,
          emissiveIntensity: 0.5
        });
        break;
    }
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.userData = { type, id, collected: false };
    this.scene.add(mesh);
    
    // Физика (сенсор для сбора)
    body = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Sphere(0.4),
      position: new CANNON.Vec3(x, y, z),
      isTrigger: true
    });
    body.userData = { type, id };
    this.world.addBody(body);
    
    this.objects.push({ mesh, body, type, id });
  }
  
  createStarGeometry() {
    const shape = new THREE.Shape();
    const outerRadius = 0.4;
    const innerRadius = 0.2;
    const spikes = 5;
    
    for (let i = 0; i < spikes * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();
    
    const extrudeSettings = { depth: 0.1, bevelEnabled: false };
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }
  
  update(delta, playerPos) {
    this.objects.forEach(obj => {
      if (obj.collected) return;
      
      // Вращение объектов
      obj.mesh.rotation.y += delta * 2;
      obj.mesh.position.y = 1.5 + Math.sin(Date.now() * 0.003 + obj.id) * 0.2;
      
      // Проверка столкновения с игроком
      const dist = playerPos.distanceTo(obj.mesh.position);
      if (dist < 1.5) {
        this.collect(obj);
      }
    });
  }
  
  collect(obj) {
    if (obj.collected) return;
    obj.collected = true;
    
    // Удаляем из сцены и мира
    this.scene.remove(obj.mesh);
    this.world.removeBody(obj.body);
    
    // Вызываем callback для начисления очков
    if (this.onCollect) {
      this.onCollect(obj.type);
    }
  }
  
  reset() {
    // Удаляем все объекты
    this.objects.forEach(obj => {
      this.scene.remove(obj.mesh);
      this.world.removeBody(obj.body);
    });
    this.objects = [];
    
    // Создаём заново
    this.createObjects();
  }
  
  getCollectedCount() {
    return this.objects.filter(o => o.collected).length;
  }
  
  getTotalCount() {
    return this.objects.length;
  }
}

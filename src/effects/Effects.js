import * as THREE from 'three';

export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.particles = [];
  }
  
  createParticle(position, color = 0xffa41b, count = 20) {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = [];
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = position.x;
      positions[i * 3 + 1] = position.y;
      positions[i * 3 + 2] = position.z;
      
      velocities.push({
        x: (Math.random() - 0.5) * 5,
        y: Math.random() * 5,
        z: (Math.random() - 0.5) * 5
      });
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const material = new THREE.PointsMaterial({
      color,
      size: 0.3,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending
    });
    
    const particle = new THREE.Points(geometry, material);
    particle.userData.velocities = velocities;
    particle.userData.life = 1;
    
    this.scene.add(particle);
    this.particles.push(particle);
  }
  
  update(delta) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];
      const positions = particle.geometry.attributes.position.array;
      const velocities = particle.userData.velocities;
      
      for (let j = 0; j < velocities.length; j++) {
        positions[j * 3] += velocities[j].x * delta;
        positions[j * 3 + 1] += velocities[j].y * delta;
        positions[j * 3 + 2] += velocities[j].z * delta;
        velocities[j].y -= 9.8 * delta;
      }
      
      particle.geometry.attributes.position.needsUpdate = true;
      particle.userData.life -= delta * 2;
      particle.material.opacity = particle.userData.life;
      
      if (particle.userData.life <= 0) {
        this.scene.remove(particle);
        this.particles.splice(i, 1);
      }
    }
  }
}

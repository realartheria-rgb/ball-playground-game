export class Audio {
  constructor() {
    this.ctx = null;
    this.initialized = false;
  }
  
  init() {
    if (this.initialized) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.initialized = true;
  }
  
  playTone(frequency, duration, type = 'sine', volume = 0.3) {
    if (!this.initialized) this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);
    gain.gain.setValueAtTime(volume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }
  
  playCollect() {
    this.playTone(800, 0.1, 'sine', 0.2);
    setTimeout(() => this.playTone(1000, 0.1, 'sine', 0.2), 50);
  }
  
  playJump() {
    if (!this.initialized) this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  }
  
  playCollision() {
    this.playTone(100, 0.2, 'sawtooth', 0.3);
  }
  
  playCountdown() {
    this.playTone(440, 0.3, 'sine', 0.3);
  }
  
  playGo() {
    this.playTone(880, 0.5, 'sine', 0.4);
  }
  
  playGameOver() {
    this.playTone(400, 0.3, 'sawtooth', 0.3);
    setTimeout(() => this.playTone(300, 0.3, 'sawtooth', 0.3), 200);
    setTimeout(() => this.playTone(200, 0.5, 'sawtooth', 0.3), 400);
  }
  
  playNewRecord() {
    this.playTone(523, 0.1, 'sine', 0.3);
    setTimeout(() => this.playTone(659, 0.1, 'sine', 0.3), 100);
    setTimeout(() => this.playTone(784, 0.2, 'sine', 0.3), 200);
  }
}

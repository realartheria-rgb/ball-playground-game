export class UI {
  constructor(game) {
    this.game = game;
    this.init();
  }
  
  init() {
    // Создаём DOM элементы для HUD
    this.hud = document.createElement('div');
    this.hud.id = 'hud';
    this.hud.innerHTML = `
      <div class="hud-top">
        <div class="hud-item">
          <span class="hud-label">SCORE</span>
          <span class="hud-value" id="score">0</span>
        </div>
        <div class="hud-item">
          <span class="hud-label">TIME</span>
          <span class="hud-value" id="time">120</span>
        </div>
        <div class="hud-item">
          <span class="hud-label">SPEED</span>
          <span class="hud-value" id="speed">0</span>
        </div>
        <div class="hud-item">
          <span class="hud-label">BEST</span>
          <span class="hud-value" id="best">0</span>
        </div>
      </div>
    `;
    document.body.appendChild(this.hud);
    
    // Стартовый экран
    this.menu = document.createElement('div');
    this.menu.id = 'menu';
    this.menu.innerHTML = `
      <div class="menu-content">
        <h1 class="game-title">BALL PLAYGROUND</h1>
        <p class="game-subtitle">3D Arcade Game</p>
        <button class="btn btn-primary" id="playBtn">PLAY</button>
        <div class="best-score-display">BEST SCORE: <span id="menuBest">0</span></div>
        <div class="controls-info">
          <p><strong>Controls:</strong></p>
          <p>WASD / Arrows - Move</p>
          <p>Space - Jump</p>
          <p>Shift - Boost</p>
          <p>Mouse - Camera</p>
        </div>
      </div>
    `;
    document.body.appendChild(this.menu);
    
    // Game Over экран
    this.gameOver = document.createElement('div');
    this.gameOver.id = 'gameover';
    this.gameOver.style.display = 'none';
    this.gameOver.innerHTML = `
      <div class="gameover-content">
        <h1 class="gameover-title">GAME OVER</h1>
        <div class="final-stats">
          <div class="stat-row">
            <span class="stat-label">SCORE:</span>
            <span class="stat-value" id="finalScore">0</span>
          </div>
          <div class="stat-row">
            <span class="stat-label">BEST:</span>
            <span class="stat-value" id="finalBest">0</span>
          </div>
          <div class="stat-row">
            <span class="stat-label">COLLECTED:</span>
            <span class="stat-value" id="finalCollected">0</span>
          </div>
        </div>
        <div class="new-record" id="newRecord">NEW RECORD!</div>
        <button class="btn btn-primary" id="restartBtn">PLAY AGAIN</button>
      </div>
    `;
    document.body.appendChild(this.gameOver);
    
    // Countdown
    this.countdown = document.createElement('div');
    this.countdown.id = 'countdown';
    this.countdown.style.display = 'none';
    document.body.appendChild(this.countdown);
    
    // Мобильное управление
    this.createMobileControls();
    
    // Привязываем события
    document.getElementById('playBtn').addEventListener('click', () => this.game.startGame());
    document.getElementById('restartBtn').addEventListener('click', () => this.game.startGame());
    
    // Обновляем рекорд в меню
    document.getElementById('menuBest').textContent = this.game.getBestScore();
  }
  
  createMobileControls() {
    this.mobileControls = document.createElement('div');
    this.mobileControls.id = 'mobile-controls';
    this.mobileControls.innerHTML = `
      <div class="joystick-zone" id="joystickZone">
        <div class="joystick-base" id="joystickBase">
          <div class="joystick-stick" id="joystickStick"></div>
        </div>
      </div>
      <div class="action-buttons">
        <button class="btn btn-jump" id="jumpBtn">JUMP</button>
        <button class="btn btn-boost" id="boostBtn">BOOST</button>
      </div>
    `;
    document.body.appendChild(this.mobileControls);
    
    // Touch events для джойстика
    const joystickBase = document.getElementById('joystickBase');
    const joystickStick = document.getElementById('joystickStick');
    const joystickZone = document.getElementById('joystickZone');
    
    let joystickActive = false;
    let joystickCenter = { x: 0, y: 0 };
    
    joystickZone.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const rect = joystickBase.getBoundingClientRect();
      joystickCenter = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      joystickActive = true;
      this.updateJoystick(touch.clientX, touch.clientY);
    });
    
    joystickZone.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (!joystickActive) return;
      const touch = e.touches[0];
      this.updateJoystick(touch.clientX, touch.clientY);
    });
    
    joystickZone.addEventListener('touchend', () => {
      joystickActive = false;
      joystickStick.style.transform = 'translate(0, 0)';
      this.game.player.keys.w = false;
      this.game.player.keys.a = false;
      this.game.player.keys.s = false;
      this.game.player.keys.d = false;
    });
    
    document.getElementById('jumpBtn').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.game.player.keys.space = true;
    });
    document.getElementById('jumpBtn').addEventListener('touchend', (e) => {
      e.preventDefault();
      this.game.player.keys.space = false;
    });
    
    document.getElementById('boostBtn').addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.game.player.keys.shift = true;
    });
    document.getElementById('boostBtn').addEventListener('touchend', (e) => {
      e.preventDefault();
      this.game.player.keys.shift = false;
    });
  }
  
  updateJoystick(clientX, clientY) {
    const maxDistance = 40;
    let dx = clientX - joystickCenter.x;
    let dy = clientY - joystickCenter.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance > maxDistance) {
      dx = (dx / distance) * maxDistance;
      dy = (dy / distance) * maxDistance;
    }
    
    const joystickStick = document.getElementById('joystickStick');
    joystickStick.style.transform = `translate(${dx}px, ${dy}px)`;
    
    // Обновляем клавиши
    const threshold = 15;
    this.game.player.keys.w = dy < -threshold;
    this.game.player.keys.s = dy > threshold;
    this.game.player.keys.a = dx < -threshold;
    this.game.player.keys.d = dx > threshold;
  }
  
  update() {
    if (this.game.getState() !== 'playing') return;
    
    document.getElementById('score').textContent = this.game.getScore();
    document.getElementById('time').textContent = Math.ceil(this.game.getTimeLeft());
    document.getElementById('speed').textContent = Math.round(this.game.player.getSpeed());
    document.getElementById('best').textContent = this.game.getBestScore();
  }
  
  showCountdown() {
    this.menu.style.display = 'none';
    this.hud.style.display = 'block';
    this.countdown.style.display = 'flex';
    
    let count = 3;
    const countInterval = setInterval(() => {
      if (count > 1) {
        this.countdown.textContent = count - 1;
        this.countdown.style.animation = 'none';
        void this.countdown.offsetWidth;
        this.countdown.style.animation = 'countdownPop 1s ease-out';
        count--;
      } else {
        clearInterval(countInterval);
        this.countdown.textContent = 'GO!';
        this.countdown.style.color = '#00ff00';
        setTimeout(() => {
          this.countdown.style.display = 'none';
          this.game.gameState = 'playing';
        }, 500);
      }
    }, 1000);
  }
  
  showGameOver() {
    this.gameOver.style.display = 'flex';
    document.getElementById('finalScore').textContent = this.game.getScore();
    document.getElementById('finalBest').textContent = this.game.getBestScore();
    document.getElementById('finalCollected').textContent = 
      `${this.game.collectibles.getCollectedCount()}/${this.game.collectibles.getTotalCount()}`;
  }
  
  showNewRecord() {
    document.getElementById('newRecord').style.display = 'block';
  }
  
  hideAll() {
    this.menu.style.display = 'none';
    this.gameOver.style.display = 'none';
    this.countdown.style.display = 'none';
  }
}

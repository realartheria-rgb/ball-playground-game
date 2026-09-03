import { Game } from './game/Game.js';

const app = document.getElementById('app');
const game = new Game(app);
game.start();

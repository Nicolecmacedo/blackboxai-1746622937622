import BootScene from './scenes/BootScene.js';
import MenuScene from './scenes/MenuScene.js';
import GameScene from './scenes/GameScene.js';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#d0f0f8',
  scene: [BootScene, MenuScene, GameScene],
  physics: {
    default: 'arcade',
    arcade: { gravity: { y: 0 } }
  }
};

const game = new Phaser.Game(config);

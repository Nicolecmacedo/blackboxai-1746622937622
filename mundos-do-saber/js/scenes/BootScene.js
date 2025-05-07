export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    this.load.image('bg', 'assets/images/bg.png');
    this.load.image('button', 'assets/images/button.png');
    this.load.audio('correct', 'assets/audio/correct.mp3');
    this.load.audio('wrong', 'assets/audio/wrong.mp3');
    this.load.audio('click', 'assets/audio/click.wav');
  }

  create() {
    this.scene.start('MenuScene');
  }
}

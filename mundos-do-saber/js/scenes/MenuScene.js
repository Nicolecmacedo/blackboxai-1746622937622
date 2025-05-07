export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  create() {
    this.add.image(400, 300, 'bg');
    this.add.text(180, 80, 'Mundos do Saber', { fontSize: '32px', fill: '#000' });

    this.createButton('Alfabetização', 200, 'alfabetizacao');
    this.createButton('Matemática', 280, 'matematica');
    this.createButton('Cognição', 360, 'cognicao');
  }

  createButton(label, y, type) {
    const button = this.add.image(400, y, 'button').setInteractive();
    const text = this.add.text(0, 0, label, { fontSize: '20px', fill: '#fff' });
    Phaser.Display.Align.In.Center(text, button);

    button.on('pointerdown', () => {
      this.sound.play('click');
      this.scene.start('GameScene', { type });
    });
  }
}

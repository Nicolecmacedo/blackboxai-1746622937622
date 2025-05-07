import questions from '../data/questions.js';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  init(data) {
    this.type = data.type;
    this.index = 0;
    this.currentQuestions = questions[this.type];
  }

  create() {
    this.add.image(400, 300, 'bg');
    this.showQuestion();
  }

  showQuestion() {
    const q = this.currentQuestions[this.index];
    this.add.text(100, 100, q.text, { fontSize: '20px', fill: '#000' });

    q.options.forEach((opt, i) => {
      const btn = this.add.text(120, 160 + i * 40, opt, {
        fontSize: '18px', backgroundColor: '#aaf', padding: 5
      })
        .setInteractive()
        .on('pointerdown', () => this.checkAnswer(opt === q.correct));
    });
  }

  checkAnswer(isCorrect) {
    if (isCorrect) {
      this.sound.play('correct');
      this.add.text(100, 350, getRandomPraise(), { fontSize: '18px', fill: '#008800' });
    } else {
      this.sound.play('wrong');
      this.add.text(100, 350, getEncouragingRetry(), { fontSize: '18px', fill: '#880000' });
    }

    this.index++;
    this.time.delayedCall(3000, () => {
      if (this.index < this.currentQuestions.length) {
        this.scene.restart({ type: this.type });
      } else {
        this.scene.start('MenuScene');
      }
    });
  }
}

function getRandomPraise() {
  const msgs = [
    'Você está aprendendo muito bem! 👏',
    'Uau! Que avanço! 🌟',
    'Continue assim! 😊',
    'Parabéns! Você conseguiu! 💡'
  ];
  return msgs[Math.floor(Math.random() * msgs.length)];
}

function getEncouragingRetry() {
  const msgs = [
    'Tudo bem errar. Tente de novo! 👍',
    'Você está aprendendo. Respire e tente de novo!',
    'Errar faz parte. Você consegue! 💪',
    'Volte depois e tente mais uma vez 😊'
  ];
  return msgs[Math.floor(Math.random() * msgs.length)];
}

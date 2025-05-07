// questionChallenges.js - Module for basic question comprehension challenges

import { getRandomPhrase, positivePhrases, supportivePhrases } from '../main.js';

export default class QuestionChallenges extends Phaser.Scene {
  constructor() {
    super({ key: 'QuestionChallenges' });
  }

  preload() {
    // Load assets for question challenges module (images, sounds, etc.)
  }

  create() {
    this.add.text(20, 20, 'Módulo de Desafio das Perguntas', { fontSize: '24px', fill: '#000' });

    // Example interactive task: comprehension of where, when, who, how, why questions
    // Placeholder for actual game logic

    this.feedbackText = this.add.text(20, 550, '', { fontSize: '20px', fill: '#007700' });

    // Simulate correct and incorrect answers for demonstration
    this.input.keyboard.on('keydown-C', () => {
      this.showPositiveFeedback();
    });

    this.input.keyboard.on('keydown-E', () => {
      this.showSupportiveFeedback();
    });

    this.add.text(20, 580, 'Pressione C para acerto, E para erro (exemplo)', { fontSize: '16px', fill: '#555' });
  }

  showPositiveFeedback() {
    const phrase = getRandomPhrase(positivePhrases);
    this.feedbackText.setText(phrase);
    this.feedbackText.setStyle({ fill: '#007700' });
  }

  showSupportiveFeedback() {
    const phrase = getRandomPhrase(supportivePhrases);
    this.feedbackText.setText(phrase);
    this.feedbackText.setStyle({ fill: '#aa0000' });
  }
}

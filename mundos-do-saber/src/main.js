// main.js - Game initialization and scene management for Mundos do Saber

import ReadingWriting from './modules/readingWriting.js';
import MathModule from './modules/math.js';
import CognitionAttention from './modules/cognitionAttention.js';
import QuestionChallenges from './modules/questionChallenges.js';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  backgroundColor: '#ffffff',
  scene: [ReadingWriting, MathModule, CognitionAttention, QuestionChallenges],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
};

const game = new Phaser.Game(config);

// Positive reinforcement phrases
export const positivePhrases = [
  "Parabéns, você está aprendendo! ✨",
  "Uau! Que incrível seu progresso! 👏",
  "Seu esforço valeu a pena! Continue assim! 🌟",
];

// Supportive phrases for errors
export const supportivePhrases = [
  "Tudo bem errar. Você pode tentar de novo! 👍",
  "Erros também ensinam. Vamos juntos nessa? 😊",
  "Você está no caminho! Não desista! 💙",
];

// Utility function to get random phrase from array
export function getRandomPhrase(phrases) {
  return phrases[Math.floor(Math.random() * phrases.length)];
}

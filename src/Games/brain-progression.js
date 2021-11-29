import { getRandomNumber } from '../cli.js';

const generateProgression = () => {
  const progression = [];
  const startNumber = getRandomNumber(0, 50);
  const progressionStep = getRandomNumber(1, 10);
  progression.push(startNumber);
  while (progression.length < getRandomNumber(0, 5) + 5) {
    progression.push(progression[progression.length - 1] + progressionStep);
  }
  return progression;
};

const generateProgressionQuestion = () => {
  const progression = generateProgression();
  const correctAnswer = progression[getRandomNumber(0, progression.length - 1)];
  progression[progression.indexOf(correctAnswer)] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

const printProgressionQuestion = () => {
  console.log('What number is missing in the progression?');
};

export { generateProgressionQuestion, printProgressionQuestion };

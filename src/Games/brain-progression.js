import { getRandomNumber } from '../cli.js';
import runGame from '../engine.js';

const generateProgression = (startNumber, progressionStep, progressionLength) => {
  const progression = [];
  progression.push(startNumber);
  while (progression.length < progressionLength) {
    progression.push(progression[progression.length - 1] + progressionStep);
  }
  return progression;
};

const generateProgressionQuestion = () => {
  const progression = generateProgression(
    getRandomNumber(0, 50),
    getRandomNumber(1, 15),
    getRandomNumber(5, 11),
  );
  const correctAnswer = progression[getRandomNumber(0, progression.length - 1)];
  progression[progression.indexOf(correctAnswer)] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

const printProgressionQuestion = () => {
  console.log('What number is missing in the progression?');
};

const launchBrainProgression = () => runGame(printProgressionQuestion, generateProgressionQuestion);

export default launchBrainProgression;

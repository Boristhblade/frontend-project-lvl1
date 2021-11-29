import { getRandomNumber } from '../cli.js';

const generateProgression = () => {
  const array = [];
  const arrayStart = getRandomNumber(0, 50);
  const arrayStep = getRandomNumber(1, 10);
  array.push(arrayStart);
  while (array.length < getRandomNumber(5) + 5) {
    array.push(array[array.length - 1] + arrayStep);
  }
  return array;
};

const generateProgressionQuestion = () => {
  const progression = generateProgression();
  const correctAnswer = progression[getRandomNumber(progression.length - 1)];
  progression[progression.indexOf(correctAnswer)] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

const printProgressionQuestion = () => {
  console.log('What number is missing in the progression?');
};

export { generateProgressionQuestion, printProgressionQuestion };

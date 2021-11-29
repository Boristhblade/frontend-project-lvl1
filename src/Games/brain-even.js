import { getRandomNumber } from '../cli.js';

const generateBrainEvenQuestion = () => {
  const question = getRandomNumber(1, 20);
  return [question, question % 2 === 0 ? 'yes' : 'no'];
};

const printEvenQuestion = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export { generateBrainEvenQuestion, printEvenQuestion };

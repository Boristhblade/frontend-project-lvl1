import { getRandomNumber } from '../cli.js';

const isPrime = (number) => {
  if (number === 0 || number === 1) { return true; }
  for (let i = 2; i < Math.ceil(number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generatePrimeQuestion = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const printPrimeQuestion = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

export { generatePrimeQuestion, printPrimeQuestion };

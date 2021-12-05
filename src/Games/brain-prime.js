import getRandomNumber from '../util.js';
import runGame from '../engine.js';

const isPrime = (number) => {
  if (number === 0 || number === 1) { return false; }
  for (let i = 2; i <= Math.ceil(number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generatePrimeQuestion = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const primeQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const launchBrainPrime = () => runGame(primeQuestion, generatePrimeQuestion);

export default launchBrainPrime;

import {
  greetAskName, askQuestion, getRandomNumber, checkAnswer,
} from '../cli.js';

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
  const question = getRandomNumber(100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainPrime = () => {
  const rounds = 3;
  const name = greetAskName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < rounds; i += 1) {
    const [question, correctAnswer] = generatePrimeQuestion();
    const answer = askQuestion(question);
    if (checkAnswer(answer, correctAnswer) === 0) {
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default brainPrime;

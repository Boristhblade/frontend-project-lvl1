import {
  greetAskName, askQuestion, getRandomNumber, checkAnswer,
} from '../cli.js';

const getGreatestCommonDivisor = (num1, num2) => {
  if (num1 === 0) { return num2; }
  if (num2 === 0) { return num1; }
  const maxNum = num1 > num2 ? num1 : num2;
  const minNum = num1 < num2 ? num1 : num2;
  if (maxNum % minNum === 0) {
    return minNum;
  }
  for (let i = Math.ceil(minNum / 2); i >= 1; i -= 1) {
    if (maxNum % i === 0 && minNum % i === 0) {
      return i;
    }
  }

  return 0;
};

const generateGcdQuestion = () => {
  const firstNumber = getRandomNumber(50);
  const secondNumber = getRandomNumber(50);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGreatestCommonDivisor(firstNumber, secondNumber);
  return [question, correctAnswer];
};

const brainGcd = () => {
  const rounds = 3;
  const name = greetAskName();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < rounds; i += 1) {
    const [question, correctAnswer] = generateGcdQuestion();
    const answer = Number(askQuestion(question));
    if (checkAnswer(answer, correctAnswer) === 0) {
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default brainGcd;

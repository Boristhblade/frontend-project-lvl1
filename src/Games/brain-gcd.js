import { getRandomNumber } from '../cli.js';

const getGreatestCommonDivisor = (num1, num2) => {
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
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGreatestCommonDivisor(firstNumber, secondNumber);
  return [question, String(correctAnswer)];
};

const printGcdQuestion = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

export { printGcdQuestion, generateGcdQuestion };

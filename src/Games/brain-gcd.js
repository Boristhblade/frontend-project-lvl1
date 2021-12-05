import getRandomNumber from '../util.js';
import runGame from '../engine.js';

const getGreatestCommonDivisor = (num1, num2) => {
  const maxNum = num1 > num2 ? num1 : num2;
  const minNum = num1 < num2 ? num1 : num2;
  if (maxNum % minNum === 0) {
    return minNum;
  }
  return getGreatestCommonDivisor(minNum, maxNum % minNum);
};

const generateGcdQuestion = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNumber = getRandomNumber(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGreatestCommonDivisor(firstNumber, secondNumber);
  return [question, String(correctAnswer)];
};

const gcdQuestion = 'Find the greatest common divisor of given numbers.';

const launchBrainGcd = () => runGame(gcdQuestion, generateGcdQuestion);

export default launchBrainGcd;

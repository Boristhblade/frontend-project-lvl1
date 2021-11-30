import { getRandomNumber } from '../cli.js';
import runGame from '../engine.js';

const makeExtension = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return [`${firstNumber} + ${secondNumber}`, String(firstNumber + secondNumber)];
    case '-':
      return [`${firstNumber} - ${secondNumber}`, String(firstNumber - secondNumber)];
    case '*':
      return [`${firstNumber} * ${secondNumber}`, String(firstNumber * secondNumber)];
    default:
      return console.error(`Smth wrong with operator variable. Its value is ${operator}`);
  }
};

const generateBrainCalcQuestion = () => {
  const firstNumber = getRandomNumber(0, 20);
  const secondNumber = getRandomNumber(0, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, 3)];
  return makeExtension(firstNumber, secondNumber, operator);
};

const printCalcQuestion = () => {
  console.log('What is the result of the expression?');
};

const launchBrainCalc = () => runGame(printCalcQuestion, generateBrainCalcQuestion);

export default launchBrainCalc;

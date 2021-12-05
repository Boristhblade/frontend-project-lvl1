import getRandomNumber from '../util.js';
import runGame from '../engine.js';

const makeExpression = (firstNumber, secondNumber, operator) => {
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
  return makeExpression(firstNumber, secondNumber, operator);
};

const calcQuestion = 'What is the result of the expression?';

const launchBrainCalc = () => runGame(calcQuestion, generateBrainCalcQuestion);

export default launchBrainCalc;

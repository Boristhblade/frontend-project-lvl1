import { getRandomNumber } from '../cli.js';

const generateBrainCalcQuestion = () => {
  let question;
  let correctAnswer;
  const firstNumber = getRandomNumber(0, 20);
  const secondNumber = getRandomNumber(0, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, 3)];
  switch (operator) {
    case '+':
      question = `${firstNumber} + ${secondNumber}`;
      correctAnswer = firstNumber + secondNumber;
      return [question, String(correctAnswer)];
    case '-':
      question = `${firstNumber} - ${secondNumber}`;
      correctAnswer = firstNumber - secondNumber;
      return [question, String(correctAnswer)];
    case '*':
      question = `${firstNumber} * ${secondNumber}`;
      correctAnswer = firstNumber * secondNumber;
      return [question, String(correctAnswer)];
    default:
      return console.error(`Smth wrong with operator variable. Its value is ${operator}`);
  }
};

const printCalcQuestion = () => {
  console.log('What is the result of the expression?');
};

export { printCalcQuestion, generateBrainCalcQuestion };

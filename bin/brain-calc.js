#!/usr/bin/env node
import {
  greetAskName, askQuestion, getRandomNumber, checkAnswer,
} from '../src/cli.js';

const name = greetAskName();
console.log('What is the result of the expression?');
const operators = ['+', '-', '*'];
let answers = 0;
for (let i = 0; i < 3; i += 1) {
  let question;
  let correctAnswer;
  const firstNumber = getRandomNumber(20);
  const secondNumber = getRandomNumber(20);
  const operator = operators[getRandomNumber(2)];
  switch (operator) {
    case '+':
      question = `${firstNumber} + ${secondNumber}`;
      correctAnswer = firstNumber + secondNumber;
      break;
    case '-':
      question = `${firstNumber} - ${secondNumber}`;
      correctAnswer = firstNumber - secondNumber;
      break;
    case '*':
      question = `${firstNumber} * ${secondNumber}`;
      correctAnswer = firstNumber * secondNumber;
      break;
    default:
      console.error(`Smth wrong with operator variable. Its value is ${operator}`);
      break;
  }
  const answer = Number(askQuestion(question));
  if (checkAnswer(answer, correctAnswer) === 0) {
    console.log(`Let's try again, ${name}!`);
    break;
  }
  answers += 1;
}
if (answers === 3) {
  console.log(`Congratulations, ${name}!`);
}

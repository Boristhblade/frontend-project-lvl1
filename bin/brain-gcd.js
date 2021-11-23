#!/usr/bin/env node
import {
  greetAskName, askQuestion, getRandomNumber, checkAnswer, getGreatestCommonDivisor,
} from '../src/cli.js';

const name = greetAskName();
console.log('Find the greatest common divisor of given numbers.');
let answers = 0;
for (let i = 0; i < 3; i += 1) {
  const firstNumber = getRandomNumber(50);
  const secondNumber = getRandomNumber(50);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = Number(askQuestion(question));
  const correctAnswer = getGreatestCommonDivisor(firstNumber, secondNumber);
  if (checkAnswer(answer, correctAnswer) === 0) {
    console.log(`Let's try again, ${name}`);
    break;
  }
  answers += 1;
}
if (answers === 3) {
  console.log(`Congratulations, ${name}!`);
}

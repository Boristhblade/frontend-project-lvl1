#!/usr/bin/env node
import {
  greetAskName, askQuestion, getRandomNumber, checkAnswer,
} from '../src/cli.js';

const name = greetAskName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let answers = 0;
for (let i = 0; i < 3; i += 1) {
  const question = getRandomNumber(20);
  const answer = askQuestion(question);
  const correctAnswer = question % 2 === 0 && question !== 0 ? 'yes' : 'no';
  if (checkAnswer(answer, correctAnswer) === 0) {
    console.log(`Let's try again, ${name}`);
    break;
  }
  answers += 1;
}
if (answers === 3) {
  console.log(`Congratulations, ${name}`);
}

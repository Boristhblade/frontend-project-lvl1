#!/usr/bin/env node
import {
  greetAskName, askQuestion, getRandomNumber, checkAnswer, isPrime,
} from '../src/cli.js';

const name = greetAskName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let answers = 0;
for (let i = 0; i < 3; i += 1) {
  const question = getRandomNumber(100);
  const answer = askQuestion(question);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  if (checkAnswer(answer, correctAnswer) === 0) {
    console.log(`Let's try again, ${name}`);
    break;
  }
  answers += 1;
}
if (answers === 3) {
  console.log(`Congratulations, ${name}`);
}

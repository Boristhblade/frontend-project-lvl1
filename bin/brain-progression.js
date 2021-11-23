import {
  greetAskName, askQuestion, getRandomNumber, checkAnswer, generateArray,
} from '../src/cli.js';

const name = greetAskName();
console.log('What number is missing in the progression?');
let answers = 0;
for (let i = 0; i < 3; i += 1) {
  const array = generateArray();
  const correctAnswer = array[getRandomNumber(array.length - 1)];
  array[array.indexOf(correctAnswer)] = '..';
  const question = array.join(' ');
  const answer = Number(askQuestion(question));
  if (checkAnswer(answer, correctAnswer) === 0) {
    console.log(`Let's try again, ${name}`);
    break;
  }
  answers += 1;
}
if (answers === 3) {
  console.log(`Congratulations, ${name}`);
}

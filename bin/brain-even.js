import readlineSync from 'readline-sync';
import askname from '../src/cli.js';

const getRandomNumber = (max) => (Math.floor(Math.random() * max));

console.log('Welcome to the Brain Games!');
const name = askname();
console.log((`Hello, ${name}!`));
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let answers = 0;
for (let i = 0; i < 3; i += 1) {
  const question = getRandomNumber(20);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  if ((question % 2 === 0 && answer === 'yes') || (question % 2 !== 0 && answer === 'no')) {
    console.log('Correct!');
    answers += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${question % 2 === 0 ? 'yes' : 'no'}'.`);
    console.log('Let\'s try again, Bill!');
    break;
  }
}
if (answers === 3) {
  console.log(`Congratulations, ${name}`);
}

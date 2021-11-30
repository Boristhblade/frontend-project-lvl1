import readlineSync from 'readline-sync';
import { greetAskName } from './cli.js';

const runGame = (getGameQuestion, questionGenerator) => {
  const roundCount = 3;
  const name = greetAskName();
  getGameQuestion();
  for (let i = 0; i < roundCount; i += 1) {
    const [question, correctAnswer] = questionGenerator();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default runGame;

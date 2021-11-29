import readlineSync from 'readline-sync';
import { greetAskName } from './cli.js';

const askQuestion = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const checkAnswer = (answer, correctAnswer) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return 0;
};

const runGame = (gameQuestion, questionGenerator, round = 3) => {
  const name = greetAskName();
  gameQuestion();
  for (let i = 0; i < round; i += 1) {
    const [question, correctAnswer] = questionGenerator();
    const answer = askQuestion(question);
    if (checkAnswer(answer, correctAnswer) === 0) {
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default runGame;

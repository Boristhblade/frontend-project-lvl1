import {
  greetAskName, askQuestion, checkAnswer,
} from './cli.js';

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

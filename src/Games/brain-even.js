import {
  greetAskName, askQuestion, getRandomNumber, checkAnswer,
} from '../cli.js';

const brainEvenQuestion = () => {
  const question = getRandomNumber(20);
  return [question, question % 2 === 0 ? 'yes' : 'no'];
};

const brainEven = () => {
  const rounds = 3;
  const name = greetAskName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < rounds; i += 1) {
    const [question, correctAnswer] = brainEvenQuestion();
    const answer = askQuestion(question);
    if (checkAnswer(answer, correctAnswer) === 0) {
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default brainEven;

import {
  greetAskName, askQuestion, getRandomNumber, checkAnswer,
} from '../cli.js';

const generateProgression = () => {
  const array = [];
  const arrayStart = getRandomNumber(50);
  const arrayStep = getRandomNumber(10) + 1;
  array.push(arrayStart);
  while (array.length < getRandomNumber(5) + 5) {
    array.push(array[array.length - 1] + arrayStep);
  }
  return array;
};

const generateProgressionQuestion = () => {
  const progression = generateProgression();
  const correctAnswer = progression[getRandomNumber(progression.length - 1)];
  progression[progression.indexOf(correctAnswer)] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

const brainProgression = () => {
  const rounds = 3;
  const name = greetAskName();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < rounds; i += 1) {
    const [question, correctAnswer] = generateProgressionQuestion();
    const answer = askQuestion(question);
    if (checkAnswer(answer, correctAnswer) === 0) {
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default brainProgression;

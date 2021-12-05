import getRandomNumber from '../util.js';
import runGame from '../engine.js';

const generateBrainEvenQuestion = () => {
  const question = getRandomNumber(1, 20);
  return [question, question % 2 === 0 ? 'yes' : 'no'];
};

const evenQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const launchBrainEven = () => runGame(evenQuestion, generateBrainEvenQuestion);

export default launchBrainEven;

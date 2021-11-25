import {
  greetAskName, askQuestion, getRandomNumber, checkAnswer,
} from '../cli.js';

const brainCalcQuestion = () => {
  let question;
  let correctAnswer;
  const firstNumber = getRandomNumber(20);
  const secondNumber = getRandomNumber(20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(3)];
  switch (operator) {
    case '+':
      question = `${firstNumber} + ${secondNumber}`;
      correctAnswer = firstNumber + secondNumber;
      return [question, correctAnswer];
    case '-':
      question = `${firstNumber} - ${secondNumber}`;
      correctAnswer = firstNumber - secondNumber;
      return [question, correctAnswer];
    case '*':
      question = `${firstNumber} * ${secondNumber}`;
      correctAnswer = firstNumber * secondNumber;
      return [question, correctAnswer];
    default:
      return console.error(`Smth wrong with operator variable. Its value is ${operator}`);
  }
};

const brainCalc = () => {
  const rounds = 3;
  const name = greetAskName();
  console.log('What is the result of the expression?');
  for (let i = 0; i < rounds; i += 1) {
    const [question, correctAnswer] = brainCalcQuestion();
    const answer = Number(askQuestion(question));
    if (checkAnswer(answer, correctAnswer) === 0) {
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default brainCalc;

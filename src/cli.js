import readlineSync from 'readline-sync';

const greetAskName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log((`Hello, ${name}!`));
  return name;
};

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

const getRandomNumber = (max) => (Math.floor(Math.random() * max));

export {
  greetAskName, askQuestion, getRandomNumber,
  checkAnswer,
};

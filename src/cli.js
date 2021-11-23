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

const getRandomNumber = (max) => (Math.floor(Math.random() * (max + 0.999)));

const getGreatestCommonDivisor = (num1, num2) => {
  if (num1 === 0) { return num2; }
  if (num2 === 0) { return num1; }
  const maxNum = num1 > num2 ? num1 : num2;
  const minNum = num1 < num2 ? num1 : num2;
  if (maxNum % minNum === 0) {
    return minNum;
  }
  for (let i = Math.ceil(minNum / 2); i >= 1; i -= 1) {
    if (maxNum % i === 0 && minNum % i === 0) {
      return i;
    }
  }

  return 0;
};

const generateArray = () => {
  const array = [];
  const arrayStart = getRandomNumber(50);
  const arrayStep = getRandomNumber(10) + 1;
  array.push(arrayStart);
  while (array.length < getRandomNumber(5) + 5) {
    array.push(array[array.length - 1] + arrayStep);
  }
  return array;
};

const isPrime = (number) => {
  if (number === 0 || number === 1) { return true; }
  for (let i = 2; i < Math.ceil(number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export {
  greetAskName, askQuestion, getRandomNumber,
  checkAnswer, getGreatestCommonDivisor,
  generateArray, isPrime,
};

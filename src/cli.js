import readlineSync from 'readline-sync';

const greetAskName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log((`Hello, ${name}!`));
  return name;
};

const getRandomNumber = (start, end) => (Math.floor(Math.random() * (end - start)) + start);

export {
  greetAskName, getRandomNumber,
};

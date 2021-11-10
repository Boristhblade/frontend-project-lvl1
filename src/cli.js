import readlineSync from 'readline-sync';

const askname = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export default askname;

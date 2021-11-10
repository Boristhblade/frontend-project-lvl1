#!/usr/bin/env node
import askname from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askname();
console.log((`Hello, ${name}!`));

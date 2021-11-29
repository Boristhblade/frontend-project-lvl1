#!/usr/bin/env node
import { generatePrimeQuestion, printPrimeQuestion } from '../src/Games/brain-prime.js';
import runGame from '../src/engine.js';

runGame(printPrimeQuestion, generatePrimeQuestion, 3);

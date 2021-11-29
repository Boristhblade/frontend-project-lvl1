#!/usr/bin/env node
import { generateGcdQuestion, printGcdQuestion } from '../src/Games/brain-gcd.js';
import runGame from '../src/engine.js';

runGame(printGcdQuestion, generateGcdQuestion, 3);

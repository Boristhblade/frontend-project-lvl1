#!/usr/bin/env node
import { generateBrainEvenQuestion, printEvenQuestion } from '../src/Games/brain-even.js';
import runGame from '../src/engine.js';

runGame(printEvenQuestion, generateBrainEvenQuestion, 3);

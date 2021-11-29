#!/usr/bin/env node
import { generateBrainCalcQuestion, printCalcQuestion } from '../src/Games/brain-calc.js';
import runGame from '../src/engine.js';

runGame(printCalcQuestion, generateBrainCalcQuestion, 3);

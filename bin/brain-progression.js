#!/usr/bin/env node
import { generateProgressionQuestion, printProgressionQuestion } from '../src/Games/brain-progression.js';
import runGame from '../src/engine.js';

runGame(printProgressionQuestion, generateProgressionQuestion, 3);

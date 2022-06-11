import * as readline from 'readline';
import { getUserName } from '../services/getUserName.js';
import { getHomeDir } from '../services/getHomeDir.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Enter your command:\n'
});

export const runApp = async () => {
  let userName = await getUserName();
  console.log(`Welcome to the File Manager, ${userName}!`);

  let currentDir = await getHomeDir();
  console.log(`You are currently in ${currentDir}`);

  rl.prompt();

  rl.on('line', (input) => {
    const inputToString = input.trim().toLowerCase();
    switch (inputToString) {
      case '.exit':
      case 'exit':
        process.exit();
      
    }
  }).on('close', () => {
    console.log(`Thank you for using File Manager, ${userName}!`);
    });
}

runApp();

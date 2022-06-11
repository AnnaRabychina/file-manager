import * as readline from 'readline';
import { getUserName } from '../services/getUserName.js';
import { getHomeDir } from '../services/getHomeDir.js';

const rl = readline.createInterface({
  input: process.stdin
});

export const runApp = async () => {
  let userName = await getUserName();
  console.log(`Welcome to the File Manager, ${userName}!`);

  let currentDir = await getHomeDir();
  console.log(`You are currently in ${currentDir}`);

}

runApp();

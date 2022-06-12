import * as readline from "readline";
import { getUserName } from "./utils/getUserName.js";
import { getHomeDir } from "./os/getHomeDir.js";
import { getCommand } from "./utils/getCommand.js";
import { getSystemInfo } from "./os/getSystemInfo.js";
import { up } from "./navigate/up.js";
import { cd } from "./navigate/cd.js";
import { ls } from "./navigate/ls.js";
import { rm } from "./fs/rm.js";
import { cat } from "./fs/cat.js";
import { add } from "./fs/add.js";
import { rn } from "./fs/rn.js";
import { cp } from "./fs/cp.js";
import { mv } from "./fs/mv.js";
import { hash } from "./hash/hash.js";
import { compress } from "./zip/compress.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Enter your command:\n",
});

export const runApp = async () => {
  let userName = await getUserName();
  console.log(`Welcome to the File Manager, ${userName}!`);

  let currentDir = await getHomeDir();
  console.log(`You are currently in ${currentDir}`);

  rl.prompt();

  rl.on("line", async (input) => {
    const inputToString = input.trim();
    const currentCommand = await getCommand(inputToString);
    switch (currentCommand) {
      case ".exit":
      case "exit":
        process.exit();
      case "os":
        getSystemInfo(inputToString.toLowerCase());
        break;
      case "up":
        currentDir = await up(currentDir);
        break;
      case "cd":
        currentDir = await cd(inputToString, currentDir);
        break;
      case "ls":
        await ls(currentDir);
        break;
      case "rm":
        await rm(inputToString, currentDir);
        break;
      case "cat":
        await cat(inputToString, currentDir);
        break;
      case "add":
        await add(inputToString, currentDir);
        break;
      case "rn":
        await rn(inputToString, currentDir);
        break;
      case "cp":
        await cp(inputToString, currentDir);
        break;
      case "mv":
        await mv(inputToString, currentDir);
        break;
      case "hash":
        await hash(inputToString, currentDir);
        break;
      case "compress":
        await compress(inputToString, currentDir);
        break;
      default:
        console.error("Invalid input");
    }
    console.log(`You are currently in ${currentDir}`);
  }).on("close", () => {
    console.log(`Thank you for using File Manager, ${userName}!`);
  });
};

runApp();

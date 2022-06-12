import * as readline from "readline";
import { getUserName } from "./utils/getUserName.js";
import { getHomeDir } from "./operations/getHomeDir.js";
import { getCommand } from "./utils/getCommand.js";
import { showSystemInfo } from "./operations/showSystemInfo.js";

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
    const inputToString = input.trim().toLowerCase();
    const currentCommand = await getCommand(inputToString);
    switch (currentCommand) {
      case ".exit":
      case "exit":
        process.exit();
      case "os":
        getSystemInfo(inputToString);
        break;
    }
  }).on("close", () => {
    console.log(`Thank you for using File Manager, ${userName}!`);
  });
};

runApp();

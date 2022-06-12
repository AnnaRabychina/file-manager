import * as fs from "fs";
import { getPathToFile } from "../utils/getPathToFile.js"

export const cat = async (input, currentDir) => {
  try {
    const pathToFile = await getPathToFile(input, currentDir);
    const readStream = fs.createReadStream(pathToFile, "utf8");
    readStream.on("data", (partData) => process.stdout.write(partData));
    readStream.on("close", () => console.log(""));
    readStream.on("error", () => console.error("Operation failed") )
  } catch (error) {
    console.error("Operation failed");
  }
};

import * as fs from "fs";
import path from "path";

export const add = async (input, currentDir) => {
  const newFileName = path.basename(input.trim().split(" ")[1]);
  const pathToFile = path.join(currentDir, newFileName);

  try {
    const writeStream = fs.createWriteStream(pathToFile);
    writeStream.on("close", () => console.log(`File ${newFileName} created`));
    writeStream.on("error", () => console.error("Operation failed"));
    writeStream.close();
   } catch (error) {
    console.error("Operation failed");
  }
};

import { readdir } from "fs/promises";

export const ls = async (currentDir) => {
  try {
    const filesArray = [];
    const files = await readdir(currentDir);
    for (const file of files) {
      filesArray.push(file);
    }
    console.log(filesArray);
  } catch (err) {
    console.error("Operation failed");
  }
};

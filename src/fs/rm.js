import { unlink } from "fs/promises";
import path from "path";

export const rm = async (input, currentDir) => {
  const pathParams = input.trim().split(" ")[1];

  const pathToFile = path.isAbsolute(pathParams)
    ? pathParams
    : path.join(currentDir, pathParams);

  try {
    await unlink(pathToFile);
    console.log(`Successfully deleted ${pathToFile}`);
  } catch (error) {
    console.error("Operation failed");
  }
};

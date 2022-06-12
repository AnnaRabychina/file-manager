import path from "path";
import { access, stat } from "fs/promises";
import { up } from "./up.js";

export const cd = async (input, currentDir) => {
  const pathParams = input.trim().split(" ")[1];

  if (pathParams === "..") {
    return up(currentDir);
  }

  const newPath = path.isAbsolute(pathParams)
    ? pathParams
    : path.join(currentDir, pathParams);

  return await access(newPath)
    .then(async () => {
      if (newPath) {
        const statFile = await stat(newPath);
        return statFile.isFile() ? currentDir : newPath;
      }
    })
    .catch(() => {
      console.error("Invalid input");
      return currentDir;
    });
};

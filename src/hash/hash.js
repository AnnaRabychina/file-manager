import crypto from "crypto";
import fs from "fs";
import { getPathToFile } from "../utils/getPathToFile.js";

export const hash = async (input, currentDir) => {
  try {
    const pathToFile = await getPathToFile(input, currentDir);
    const hash = crypto.createHash("sha256");
    let data = [];
    const readStream = fs.createReadStream(pathToFile);

    readStream.on("data", (chunk) => {
      data.push(chunk.toString());
    });

    readStream.on("end", () => {
      hash.update(data.join(""));
      const fileHash = hash.digest("hex");
      console.log(fileHash);
    });

    readStream.on("error", () => console.log("Operation failed"));
  } catch (e) {
    console.log("Operation failed");
  }
};

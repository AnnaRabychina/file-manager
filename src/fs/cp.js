import fs from "fs";
import path from "path";

export const cp = async (input, currentDir) => {
  try {
    const params = input.trim().split(" ");
    const fileToCopy = params[1];
    const dirToCopy = params[2];
    const fileToCopyPath = path.isAbsolute(fileToCopy)
      ? fileToCopy
      : path.join(currentDir, fileToCopy);
    const dirToCopyPath = path.isAbsolute(dirToCopy)
      ? dirToCopy
      : path.join(currentDir, dirToCopy);
    const newFilePath = !path.isAbsolute(fileToCopy)
      ? path.join(dirToCopyPath, fileToCopy)
      : path.join(dirToCopyPath, path.basename(fileToCopy));

      const isFile = (await fs.promises.stat(fileToCopyPath)).isFile();
      const isDirectory = (await fs.promises.stat(dirToCopyPath)).isDirectory();

    if (isFile && isDirectory) {
      const readStream = fs.createReadStream(fileToCopyPath);
      const writeStream = fs.createWriteStream(newFilePath);

      readStream.pipe(writeStream).on("close", () => {
        console.log("File copied");
      });
    }
  } catch (e) {
    console.log("Operation failed");
  }
};

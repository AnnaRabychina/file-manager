import path from "path";
import fs from "fs";
import zlib from "zlib";

export const compress = async (input, currentDir) => {
  try {
    const params = input.trim().split(" ");
    const fileToCompress = params[1];
    const dirToCompress = params[2];
    const fileToCompressPath = path.isAbsolute(fileToCompress)
      ? fileToCompress
      : path.join(currentDir, fileToCompress);
    const dirToCompressPath = path.isAbsolute(dirToCompress)
      ? dirToCompress
      : path.join(currentDir, dirToCompress);
    const fileName = path.isAbsolute(fileToCompress)
      ? path.basename(fileToCompress)
      : fileToCompress;
    const compressedFilePath = path.join(dirToCompressPath, fileName + ".br");

    const isFile = (await fs.promises.stat(fileToCompressPath)).isFile();
    const isDirectory = (
      await fs.promises.stat(dirToCompressPath)
    ).isDirectory();

    if (isFile && isDirectory) {
      const readStream = fs.createReadStream(fileToCompressPath);
      const writeStream = fs.createWriteStream(compressedFilePath);
      const brotli = zlib.createBrotliCompress();
      const stream = readStream.pipe(brotli).pipe(writeStream);

      stream.on("finish", () => {
        console.log(
          `File ${fileToCompress} compressed into ${compressedFilePath}`
        );
      });

      stream.on("error", () => console.log("Operation failed"));
    }
  } catch (e) {
    console.log("Operation failed");
  }
};

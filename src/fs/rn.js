import { rename } from 'fs/promises';
import path from 'path';

export const rn = async (input, currentDir) => {
  try {
    const params = input.trim().split(" ");
    const currentFileName = params[1];
    const newFileName = params[2];
    const currentFilePath = path.isAbsolute(currentFileName) ? currentFileName : path.join(currentDir, currentFileName);
    const newFilePath = path.join(path.dirname(currentFilePath), newFileName);

    rename(currentFilePath, newFilePath).then(() => {
      console.log(`File ${path.basename(currentFileName)} renamed to ${newFileName}`);
    }).catch(() => {
      console.log('Operation failed');
    });
  } catch (e) {
    console.log('Operation failed');
  }
}
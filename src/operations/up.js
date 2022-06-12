import path from 'path';

export const up = async (currentDir) => {
    const pathArr = currentDir.trim().split(path.sep);
    const newPath= pathArr.slice(0, pathArr.length - 1).join(path.sep);
    if (pathArr.length <= 2) {
        return pathArr[0] + path.sep;
    }
    return newPath;
  }
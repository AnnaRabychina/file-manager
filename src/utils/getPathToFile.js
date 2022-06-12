import path from "path";

export const getPathToFile = async (input, currentDir) => {
  const pathParams = input.trim().split(" ")[1];
  
  const pathToFile = path.isAbsolute(pathParams)
    ? pathParams
    : path.join(currentDir, pathParams);

  return pathToFile;
};

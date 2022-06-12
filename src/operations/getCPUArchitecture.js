import * as os from 'os';

export const getCPUArchitecture = async () => {
  console.log(`CPU architecture: ${os.arch()}`);
}
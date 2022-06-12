import * as os from 'os';

export const getSystemUserName = async () => {
  console.log(`Current system user name: ${os.userInfo().username}`);
}
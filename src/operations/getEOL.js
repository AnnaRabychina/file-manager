import * as os from 'os';

export const getEOL = async () => {
  console.log(`End-Of-Line: ${JSON.stringify(os.EOL)}`)
}
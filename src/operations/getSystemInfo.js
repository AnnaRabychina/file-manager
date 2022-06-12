import { getEOL } from "./getEOL.js";
import { getCPU } from "./getCPU.js";
import { getHomeDir } from "./getHomeDir.js";
import { getSystemUserName } from "./getSystemUserName.js";
import { getCPUArchitecture } from "./getCPUArchitecture.js";

export const getSystemInfo = async (input) => {
  const commandArr = input.split(" ");
  if (commandArr.length >= 1) {
    const params = input.split(" ")[1];
    switch (params) {
      case "--eol":
        await getEOL();
        break;
      case "--cpu":
        await getCPU();
        break;
      case "--homedir":
        const homeDir = await getHomeDir();
        console.log(`Home directory: ${homeDir}`);
        break;
      case "--username":
        await getSystemUserName();
        break;
      case "--architecture":
        await getCPUArchitecture();
        break;
      default:
        console.error("Invalid input");
    }
  } else {
    console.error("Invalid input");
  }
};

import * as os from 'os';

export const getCPU = async () => {
  const cpusCount = os.cpus().length;
  console.log(`Overall amount of CPUS: ${cpusCount}`);
  console.log(os.cpus().map(cpu =>({
    model: cpu.model,
    speed: Math.floor(cpu.speed/1000),
  })));


}
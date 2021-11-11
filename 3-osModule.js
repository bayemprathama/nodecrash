//importing globals module

const os = require('os');
const userInfo = os.userInfo();
const upTime = os.uptime();
const device = {
  name: os.type(),
  freeMem: os.freemem(),
  totalMem: os.totalmem(),
};

console.log(userInfo);
console.log(upTime);
console.table(device);

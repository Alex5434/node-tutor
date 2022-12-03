const os = require('os');

// info about current user
const user = os.userInfo()


// mwethod return the system up time

console.log(`The System uptime is ${os.uptime()}`);

const currentOS = {
  name: os.type(),
  release:os.release(),
  totalmem: os.totalmem(),
  freeme : os.freemem(),
}
console.log(currentOS);
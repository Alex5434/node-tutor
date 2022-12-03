const {readFileSync, WriteFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log("Start");

writeFileSync(
  './content/result.txt', 
  `the result first ${first} and second is : ${second}`,
  {flag: 'a'}
  );

  console.log("Done the task");

  console.log("next task started");
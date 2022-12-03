const {readFile, writeFile} = require('fs');

console.log("Start");

readFile('./content/first.txt', 'utf8', (err, result)=> {
  if(err){
    console.log(err);
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result)=>{
    if(err){
      console.log(err);
      return
    }
    const second = result;
    writeFile(
      './content/result.txt', 
      `--without Synchronous : ${first} , ${second} `,
      (err, result)=> {
        if(err){
          console.log(err);
          return
        }
        console.log("Done the task");
      }
      )
  })
})

console.log("starting the next file");
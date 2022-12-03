const path = require('path');

const g = path.join('/content/', 'subfolder', 'alex.txt');
const ba = path.basename(g);

// const re = path.resolve(__dirname, 'content', 'subfolder', 'alex.txt')

console.log(ba);


const  s = require('lodash')

const item = [1,[2,[3,[4]]]]

const newt = s.flattenDeep(item)
console.log(newt);
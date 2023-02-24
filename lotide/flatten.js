const assertArraysEqual = require("./assertArraysEqual")
const eqArrays = require("./eqArrays")

// const flatten = (flat1) => { 
//  result = []
//   for(let i; i < flat1.length; i++ ){
//   if(Array.isArray(flat1[i])){
//   return result.push(flat1.flat([i]))
//   }

 
// }
// }

function flatten(ary) {
  var result = [];
  for(var i = 0; i < ary.length; i++) {
      if(Array.isArray(ary[i])) {
          result = result.concat(flatten(ary[i]));
      } else {
          result.push(ary[i]);
      }
  }
  return result;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]))













//  const flatten = [1, 2, [3, 4], 5, [6]]

// console.log(flatten.flat())
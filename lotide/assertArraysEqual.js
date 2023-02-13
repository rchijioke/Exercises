const eqArrays = require('./eqArrays');

const assertArraysEqual = function (first, second){
  if(eqArrays(first, second)){
    console.log("Assertion Pass")
  }
  else{console.log("Assertion Failed")
}
  
}
assertArraysEqual([1,2,3], [1,2,3])

module.exports = {assertArraysEqual} 



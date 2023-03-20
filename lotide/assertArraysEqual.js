const eqArrays = require('./eqArrays');
/**
 * create a function with two parameters
 * @param {*} first 
 * @param {*} second 
 * that compare if their values are the same
 */
const assertArraysEqual = function (first, second){
  if(eqArrays(first, second)){
    console.log("Assertion Pass")
  }
  else{console.log("Assertion Failed")
}
  
}
assertArraysEqual([1,2,3], [1,2,3])

module.exports = {assertArraysEqual} 



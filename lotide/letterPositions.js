const assertArraysEqual = require("./assertArraysEqual")
const eqArrays = require("./eqArrays")

const letterPositions = function(sentence) {
  const results = {};
  for(let i=0; i< sentence.length; i++){
    if(results[sentence[i]]){
      results[sentence[i]] = results[sentence[i]] + 1;
     }
  }
  return results;
};


assertArraysEqual(letterPositions("hello").e, [1]);
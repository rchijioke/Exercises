const assertArraysEqual = function (firstOne, secondOne){
  if(eqArrays(first, second)){
    console.log("Assertion Pass")
  }
  else{console.log("Assertion Failed")}
}

const eqArrays = function(first, second){
  if(first.length !== second.length){
    return false
  }
  for(let i=0; i<first.length; i++){
    if (first[i] !== second[i]){
      return false
    }
  }
  return true
}


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
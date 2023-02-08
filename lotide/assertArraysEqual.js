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
const assertArraysEqual = function (firstOne, secondOne){
  if(eqArrays(first, second)){
    console.log("Assertion Pass")
  }
  else{console.log("Assertion Failed")}
  
    
}


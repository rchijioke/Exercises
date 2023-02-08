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
const middle = function (optionA){
  if( optionA.length < 2){
    return []
  }
  let theMiddle = []
 if (optionA.length % 2 !== 0){
  let middleIndex = (optionA.length - 1) / 2
  let middleElement = optionA[middleIndex]
  theMiddle.push(middleElement)
 }
 else {
  let middleIndex1 = (optionA.length - 2) / 2
  let middleIndex2 = ( middleIndex1 + 1)
  let middleElement1 = optionA[middleIndex1]
  let middleElement2 = optionA[middleIndex2]
  theMiddle.push(middleElement1)
  theMiddle.push(middleElement2)
}
  return theMiddle
}
  
 //[1,2,3,4,5,6] (6-2/2)+1


console.log(middle([1])) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
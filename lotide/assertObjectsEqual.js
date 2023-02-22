const eqObjects = require("./eqObjects")


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);

  if(eqObjects(actual, expected)){
    console.log("Assertion Pass")
  }
  else{console.log("Assertion Failed")
}

}
assertObjectsEqual()
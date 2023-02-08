// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
if(actual === expected){
  return console.log("Assertion passed")
}
else return console.log("Assertion Failed")
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

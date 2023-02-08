const assertEqual = function(actual, expected) {

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
const eqArrays = function([x],[y]){

}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true) // => true
assertQqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)
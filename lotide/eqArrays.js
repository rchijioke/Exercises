const assertEqual = require("./assertEqual");
// create a function that compares if two arrays have equal values
const eqArrays = function(first, second) {
  if (first !== second) {
    return false;
  }
  for (let i = 0; i < first; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

const assertEqual = require("./assertEqual")
const eqArrays = require("./assertEqual")
/**
 * Implement the definition for function eqObjects which will take in two objects 
 * @param {*} object1 
 * @param {*} object2 
 * and returns true or false, based on a perfect match.
 * @returns 
 * 
 */
const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length){
  
  return false
}
return true

};



module.exports = eqObjects
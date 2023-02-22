const assertEqual = require("./assertEqual")
const eqArrays = require("./assertEqual")

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length){
  
  return false
}
return true

};



module.exports = eqObjects
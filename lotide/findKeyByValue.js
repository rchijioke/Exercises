const assertEqual = require("./assertEqual")



const findKeyByValue = (objects, value) => {

  for (let key in objects) {
    if (objects[key] === value) {
      return key;
    }
  }
  return undefined
}







const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire")), "drama");
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
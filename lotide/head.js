const assertEqual = function(actual, expected) {

  if(actual === expected){
   console.log("✅ ✅ ✅","Assertion Passed: " + actual +" === " + expected)
  }
  else return console.log("🛑 🛑 🛑", "Assertion Failed: " + actual+ " !== " + expected)
  };
  
  // TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
  assertEqual("Water", "Water")
  assertEqual(2, 1)

  const head = (array) => {
    return array[0]
   
   }
  
  
  assertEqual(head([5,6,7]), 5);
  assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
 
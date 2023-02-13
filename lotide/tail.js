const assertEqual = function(actual, expected) {

  if(actual === expected){
   console.log("✅ ✅ ✅","Assertion Passed: " + actual +" === " + expected)
  }
  else return console.log("🛑 🛑 🛑", "Assertion Failed: " + actual+ " !== " + expected)
  };
  

   const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);
   
   
  

  const result = tail(["Hello", "Lighthouse", "Labs"]);
  assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
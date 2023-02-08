const assertEqual = function(actual, expected) {
  if(actual === expected){
   console.log("✅ ✅ ✅","Assertion Passed: " + actual +" === " + expected)
  }
  else { 
    return console.log("🛑 🛑 🛑", "Assertion Failed: " + actual+ " !== " + expected)
  }
}
const countLetters = function(sentence){
      const result = {}
      for(let i=0; i< sentence.length; i++){
        if(result[sentence[i]]){
          result[sentence[i]] = result[sentence[i]] + 1;
        } else {
          result[sentence[i]] = 1;
        }
      }
      return result;
  c}
  console.log(countLetters("lighthouse labs"))
// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach((names, index) => {
  if (names === "Waldo") {
      found(index);   // execute callback
    }
  })
}

const actionWhenFound = function(index) {
  console.log("Found him! " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"],function(index) { 
  console.log("Waldo is located at:", index);
});;
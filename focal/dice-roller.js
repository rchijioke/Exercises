//program that takes a single parameter from the command line, a number, and rolls that many six-sided dice.
//To generate a random number, you'll have to use the built-in Math.random.

let numberRolls = process.argv[2];
let result = "";
function rolledDice(diceRolled) {
  for(let i = 1; i <= diceRolled; i++) {
    if(i == diceRolled) {
      result += Math.floor(Math.random() * 6 + 1);
    } else {
        result += Math.floor(Math.random() * 6 + 1) + ", ";
    }
  }
  return result;
}
console.log("Rolled 3 dice:", rolledDice(numberRolls));

let myGlobalVar = "global";

const printMyVars = function() {
  let myLocalVar = "local";
  console.log("-- Inside printMyVars --");
  console.log("myLocalVar is:", myLocalVar);
  console.log("myGlobalVar is:", myGlobalVar);
}

printMyVars();

console.log('-- Outside of printMyVars now --');
console.log(myLocalVar);
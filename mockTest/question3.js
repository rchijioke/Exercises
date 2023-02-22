/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  /* IMPLEMENT ME */
  if (!arr.length)
    return null;
  
  arr = arr.sort((a,b) => {a-b});
  
  let bestStreak = 1;
  let bestElement = arr[0];
  let currentStreak = 1;
  let currentElement = arr[0];

  for (let index =1; index<arr.length; index++) {
    if (arr[index-1] !== arr[index]) {
      if(currentStreak > bestStreak) {
        bestStreak = currentStreak;
        bestElement = currentElement;
      }
      currentStreak = 0;
      currentElem = arr[index];
    }
    currentStreak++;
  }
  return currentStreak > bestStreak ? currentElement : bestElement;
};

// Don't change below:

console.log(mode([-2,1,4,-2,1,4,5,-2]));
module.exports = { mode };
011122222
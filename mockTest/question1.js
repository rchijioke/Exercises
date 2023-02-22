/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  let minNum = arr[0];
  if (!arr.length)
    return null;

  for (let num of arr) {
    if (num <= minNum) {
      minNum = num;
    }
  }
  return minNum;
};



/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  let maxNum = arr[0];
  if (!arr.length)
    return null;

  for (let num of arr) {
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
}
;

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  if (!arr.length)
    return null;
  return max(arr) - min(arr);
};

let test1 = [8,3,1,8,3];
let test2 = [-5,0,5];
let test3 = [];
let test4 = [5];

// console.log(max(test1));
// console.log(max(test2));
// console.log(max(test3));
// console.log(max(test4));

// console.log(min(test1));
// console.log(min(test2));
// console.log(min(test3));
// console.log(min(test4));

console.log(range(test1));
console.log(range(test2));
console.log(range(test3));
console.log(range(test4));
// Don't change below:

module.exports = { min, max, range };

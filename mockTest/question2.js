/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by medium. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */
const median = function(arr) {
  /* IMPLEMENT ME */
  let alength = arr.length;
  if (!alength)
    return null;

  arr.sort((a,b) => {return a - b});

  if (alength % 2 == 0) {
    let lowerMid = arr[alength/2 - 1];
    let upperMid = arr[alength/2];

    return (lowerMid + upperMid) / 2;
  }
  else{
    return arr[Math.round(alength/2) - 1];
  }
};


console.log(median([5,2,1,4,3]));
// Don't change below:

module.exports = { median };

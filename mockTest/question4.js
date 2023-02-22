/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - The formula is:
 *
 *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
 *
 *        - you are allowed to look at Wikipedia's example calculation to help you understand the formula
 *        - Keep in mind, we are using 'Population Standard Deviation' as opposed to 'Sample Standard Deviation' for this test
 *            https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight_students
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */

// This function is to be used by stdev. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

const mean = function(arr) {
  let average = 0;

  if (!arr.length)
    return null;

  for (let numbers of arr) {
    average += parseInt(numbers);
  }
  return average = round(average / arr.length);
};

const stdev = function(arr) {
  /* IMPLEMENT ME */
  if (!arr.length)
    return null;

  let numberOfValues = arr.length;
  let populationMean = mean(arr);
  let sum = 0;

  for (let number of arr) {
   sum += (number - populationMean)**2;
  }

  return round(Math.sqrt(sum/numberOfValues));
};

console.log(stdev([1,2,3,4,5]));
// Don't change below:
module.exports = { stdev };

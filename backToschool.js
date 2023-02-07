/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `education`, and `salary`
 * - Your code should include a switch statement
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// change the value of `education` to test your code
var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = "$25,636/year.";

switch (education){
    case 'no high school diploma':
        salary = "$25,636/year."
    console.log("In 2015, a person with "+ education + " earned an average of " + salary);
    break;
    case 'a high school diploma':
        salary = "$35,256/year."
    console.log("In 2015, a person with "+ education + " earned an average of " + salary);
    break;
    case 'an Associate\'s degree':
        salary = "$41,496/year."
    console.log("In 2015, a person with "+ education + " earned an average of " + salary);
    break;
    case 'a Bachelor\'s degree':
        salary = "$59,124/year."
    console.log("In 2015, a person with "+ education + " earned an average of " + salary);
    break;
    case 'a Master\'s degree':
        salary = "$69,732/year."
    console.log("In 2015, a person with "+ education + " earned an average of " + salary);
    break;
    case 'a Professional degree':
        salary = "$89,960/year."
    console.log("In 2015, a person with "+ education + " earned an average of " + salary);
    break;
    case 'a Doctoral degree':
        salary = "$84,396/year."
    console.log("In 2015, a person with "+ education + " earned an average of " + salary);
}
// your code goes here

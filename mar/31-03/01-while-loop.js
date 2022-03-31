/**
 * While
 *
 * while (condition) {
 *    // code to execute
 * }
 * 
 * You use the for loop when you know in advance how many times you should execute
 * the loop. We know the starting point and we know after how many iteration to stop
 * 
 * The while loop could be more useful when we don't know how many times we have
 * to run the code inside
 */

// const isPasswordCorrect = false;

// while (! isPasswordCorrect) {
//     console.log("Please enter the right password");
// }

// const isPasswordWrong = true;

// while (isPasswordWrong) {
//     console.log("Please enter the right password");
// }

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

let i = 0; // initialization
while (i < 5) { // condition
  console.log(i);
  i++; // update
}

console.log(i);



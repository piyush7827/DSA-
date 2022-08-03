function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

let Result = factorial(10);
console.log(Result);

// Given an integer n, write a function that returns the count of trailing zeroes in n!.
/*
Example-1
Input: 5
Output: 1
 */

function findTrailingZeros(n) {
  if (n < 0) return -1;

  let count = 0;
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) count += Math.floor(n / i);
  return count;
}
let n = 10;
console.log("Count of trailing 0s in " + 100 + " is " + findTrailingZeros(n));

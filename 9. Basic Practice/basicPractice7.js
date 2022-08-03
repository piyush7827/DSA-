/*
Given x,n and d, write a function to compute the followimg pow(x^n%d)
*/

// let power = (x, n, d) => {
//   let res = 1;

//   while (n > 0) {
//     // check if n is even or odd
//     if (n & 1) {
//       // odd condition check
//       res *= x;
//     }
//     n = n >> 1; // n= n/2
//     x = x * x;
//   }
//   return res % d;
// };

// console.log("Power is " + power(2, 3, 5));
// console.log("Power is " + power(2, 5, 13));

/**
 Given an 2D array of size M*N , find the median of the matrix
 */

//  firstly 1D array ex

// let median;
// let arr = [3, 5, 4, 1, 8, 6, 9, 11];
// arr.sort((a, b) => a - b);

// if (arr.length % 2 == 0) {
//   let a = arr[parseInt(arr.length / 2) - 1];
//   let b = arr[parseInt(arr.length / 2) + 1];
//   median = (a + b) / 2;
// } else {
//   median = arr[parseInt(arr.length / 2)];
// }

// console.log(median);

// now 2D array

let median;
let temp = [];
let arr = [
  [2, 3, 1],
  [6, 9, 4],
  [11, 10, 7],
];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    temp.push(arr[i][j]);
  }
}
temp.sort((a, b) => a - b);
console.log(temp);

if (temp.length % 2 == 0) {
  let a = temp[parseInt(temp.length / 2) - 1];
  let b = temp[parseInt(temp.length / 2) + 1];
  median = (a + b) / 2;
} else {
  median = temp[parseInt(temp.length / 2)];
}

console.log(median);

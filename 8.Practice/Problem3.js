// Write a function that takes two numbers x and y and calculates x^y

// function square(x, y) {
//   let ans = 1;
//   for (let i = 0; i < y; i++) {
//     ans = ans * x;
//   }
//   return ans;
// }
// let x = 4;
// let y = 3;
// console.log(square(x, y));

// 2. Write a function that takes two parameters num and k and returns the value of Binomial Coefficient

// Sample input: num = 6, k = 3
// Sample output: 20
//   C(n, k) = C(n-1, k-1) + C(n-1, k)
function binomialCoefficient(num, k) {
  if (k > num) return 0;
  if (k == 0 || k == num) return 1;
  return binomialCoefficient(num - 1, k - 1) + binomialCoefficient(num - 1, k);
}
var num = 6,
  k = 3;
console.log(
  "Value of C(" + num + ", " + k + ") is " + binomialCoefficient(num, k)
);

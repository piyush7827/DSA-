// find largest among the three number
// let greaterValue = (x, y, z) => {
//   let maxValue;
//   if (x > y && x > z) {
//     maxValue = x;
//   } else if (y > x && y > z) {
//     maxValue = y;
//   } else {
//     maxValue = z;
//   }
//   return maxValue;
// };
// const x = 21,
//   y = 52,
//   z = 75;
// let maxVal = greaterValue(x, y, z);
// console.log(`${maxVal} is the maximum of ${x},${y} and ${z}`);

// check given number is even or odd

// let IsEven = (n) => {
//   if (n % 2 == 0) return "even";
//   else return "odd";
// };
// let n = 6;
// let Result = IsEven(n);
// console.log(Result);

// check given number is even or odd without using comparison operator
/*
& operator
1 => 0 0 0 1
2=>  0 0 1 0
 */

// let IsEven = (n) => {
//   if (n & 1) return "odd";
//   else if (!(n & 1)) return "even";
// };
// let n = 6;
// let Result = IsEven(n);
// console.log(Result);

// write a program to find max and min if array

// let array = [4, 8, 9, 5];
// console.log(Math.min(...array));
// console.log(Math.max(...array));
// console.log(Math.max(...array) + Math.min(...array));

// write a program to find sum of max and min of array

// let sumMinMax = (arr, n) => {
//   let minvalue = Number.MAX_VALUE;
//   let maxValue = Number.MIN_VALUE;

//   for (let i = 0; i < n; i++) {
//     if (minvalue > arr[i]) {
//       minvalue = arr[i];
//     }
//     if (maxValue < arr[i]) {
//       maxValue = arr[i];
//     }
//   }
//   return minvalue + maxValue;
// };

// const arr = [4, 8, 3, 5, 7];
// console.log(`sum of given array ${sumMinMax(arr, arr.length)}`);

// in a given array A of N element, find the maximum and minimum sum of (N-1) elements

// [4, 8, 3, 5, 7]
// max sum = 8+7+5+4 = 24 (excluding min value)
// min sum = 3+4+5+7 = 19 (excluding max value)
// find sum of array
// max sum = sum - min value
// min value = sum - max value

let sumMinMax = (arr, n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  let minvalue = Number.MAX_VALUE;
  let maxValue = Number.MIN_VALUE;

  for (let i = 0; i < n; i++) {
    if (minvalue > arr[i]) {
      minvalue = arr[i];
    }
    if (maxValue < arr[i]) {
      maxValue = arr[i];
    }
  }
  return `Max sum of (n-1) value will be ${
    sum - minvalue
  } and min sum of(n-1) value wiil be ${sum - maxValue}`;
};

const arr = [4, 8, 3, 5, 7];
console.log(sumMinMax(arr, arr.length));

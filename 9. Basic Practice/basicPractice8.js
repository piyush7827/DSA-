// Basic Array Problems

/*Given an array of length N, where every element is present twice or more and only one element 
is present once. Find the unique element */

// const arr = [1, 2, 2, 4, 3, 4, 1, 2, 2, 2, 1, 1, 1, 4];
// /**
//  * key=> number
//  * pair=> count of those number
//  */
// let hm = new Map();

// for (let i = 0; i < arr.length; i++) {
//   if (hm.has(arr[i]) == false) {
//     // value is not there in the hashmap(hm)
//     hm.set(arr[i], 1); // insert the value in the hashmap
//   } else {
//     // update the count
//     let count = hm.get(arr[i]);
//     count++;
//     hm.set(arr[i], count);
//   }
// }
// console.table(hm);

// for (let [key, value] of hm) {
//   if (value == 1) {
//     console.log(`${key} is occuring ${value} times`);
//   }
// }

/*
Given an Array A of n integers, write a program(using rest parameters and different methods of aaray)
to calculate mean, median, mode

Mean = Sum of all observations/Number of observations(mean = find out the average)
Median = The value of the middlemost observation, obtained after 
arranging the data in ascending or descending order, is called the median of the data.
Mode = Observation with maximum frequency
*/

//mean

// const mean = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;

// const nums = [3, 5, 4, 4, 1, 1, 2, 3];

// console.log(`mean of the array ${mean(...nums)}`);

// //median

// let median;
// let arr = [3, 5, 4, 4, 1, 1, 2, 3];
// arr.sort((a, b) => a - b);

// if (arr.length % 2 == 0) {
//   let a = arr[parseInt(arr.length / 2) - 1];
//   let b = arr[parseInt(arr.length / 2) + 1];
//   median = (a + b) / 2;
// } else {
//   median = arr[parseInt(arr.length / 2)];
// }

// console.log(`median of the array ${median}`);

// // mode

// let Mode = (nums) => {
//   let hm = new Map();
//   for (let i = 0; i < nums.length; i++)
//     if (hm.has(nums[i]) == false) {
//       // value is not there in the hashmap(hm)
//       hm.set(nums[i], 1); // insert the value in the hashmap
//     } else {
//       // update the count
//       let count = hm.get(nums[i]);
//       count++;
//       hm.set(nums[i], count);
//     }

//   let modeArray = [];
//   for (let [key, value] of hm) {
//     if (value > 1) {
//       modeArray.push(key);
//     }
//   }
//   return modeArray;
// };
// console.log(`Mode is ` + Mode(nums));

/*
  Given a string `S` and a pair of multiple queries. Let the query pair be (L,R). So this pair (L,R) will correspond to substtring
  S[L..R]. You need to determine if such a pair corresponds to a palindrome substring or not

  input:
  abaaabaaaba,[0,10],
  abaaabaaaba,[5,8],
  abaaabaaaba,[2,5]

  output:
  "The substring is a palindrome",0,10
  "The substring is not a palindrome",5,8
  "The substring is not a palindrome",2,5

*/

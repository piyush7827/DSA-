// K-Closest points to origin

// Given two array of points one representing the x-coordinate and one representing the y-coordinate and
//  a integer k,return the k closest points to origin(0,0)
// The distance between two points is Euclidean distance sqr_root((x1-x2)^2+(y1-y2)^2)
// Answer can be written in any order
// Example:
// Input :x = [1,2,3];
// y = [2,3,4];

// Output:
// Here
// Distance between (1,2) and origin is sqrt(5)
// Distance between (2,3) and origin is sqrt(13)
// Distance between (3,4) and origin is sqrt(25)
// As sqrt(5)<sqrt(13)<sqrt(25) so the closest points will be
// (1,2),(2,3),(3,4).As we need closest 2 points the answer will be (1,2) and (2,3)

// function kClosest() {
//   let x = [0, 1, 2, 1, 0, 3, 4];
//   let y = [0, 1, 4, 3, 2, 1, 0];
//   let k = 3;

//   let points = [];
//   for (let index = 0; index < x.length; index++) {
//     let tempArr = [x[index], y[index]];
//     points.push(tempArr);
//   }

//   function compare(point1, point2) {
//     let distance1 = Math.sqrt(point1[0] * point1[0] + point1[1] * point1[1]);
//     let distance2 = Math.sqrt(point2[0] * point2[0] + point2[1] * point2[1]);

//     return distance1 - distance2;
//   }

//   points.sort(compare);

//   console.log(points);
//   console.log(points.slice(0, k));
// }

// // function swap(arr, index1, index2) {
// //   let temp = arr[index1];
// //   arr[index1] = arr[index2];
// //   arr[index2] = temp;
// // }

// kClosest();

// Sort array in wave form

// Given an array which is unsorted ,we need to sort the array into wave like array where
// arr[0]>arr[1]<=arr[2]>=arr[3]<=arr[4]>=arr[5].......
// Input:{9,8,7,6,5,21,2,4}
// Output:{4,2,6,5,8,7,21,9}

// function swap(arr, index1, index2) {
//   let temp = arr[index1];
//   arr[index1] = arr[index2];
//   arr[index2] = temp;
// }

// function waveSorter() {
//   let arr = [9, 8, 7, 6, 5, 21, 2, 4];

//   for (let index = 1; index < arr.length; index++) {
//     // case even
//     if (index % 2 == 0) {
//       if (arr[index - 1] > arr[index]) {
//         swap(arr, index - 1, index);
//       }
//     } else {
//       // odd
//       if (arr[index - 1] < arr[index]) {
//         swap(arr, index - 1, index);
//       }
//     }
//   }

//   console.log(arr);
// }

// waveSorter();

// var input = [9, 8, 7, 6, 5, 21, 2, 4];

// function sortwave(input) {
//   input.sort((a, b) => a - b);
//   let n = input.length;
//   if (n > 1) {
//     for (let i = 1; i < n; i += 2) {
//       let temp = input[i];
//       input[i] = input[i - 1];
//       input[i - 1] = temp;
//     }
//     return input;
//   } else {
//     return input;
//   }
// }
// console.log(sortwave(input));

// Meeting Rooms
// Given two arrays S and F where elements in S represents the starting time of the meeting and
// elements in F represent the ending time of meetings.
// We need to find maximum number of meetings that can be accomodated in a meeting room
// Input:S:{1,3,0,6,8,4}
// F:{2,4,6,7,9,9}
// Output:4

// var start = [1, 3, 0, 6, 8, 4];
// var finish = [2, 4, 6, 7, 9, 9];

// function maxMeeting(s, f) {
//   var pair = [];
//   let n = start.length;
//   for (let i = 0; i < n; i++) {
//     pair.push([s[i], f[i]]);
//   }
//   pair.sort((a, b) => a[1] - b[1]);
//   let counter = 1;
//   let limit = pair[0][1];

//   for (let i = 1; i < n; i++) {
//     if (pair[i][0] >= limit) {
//       counter++;
//       limit = pair[i][1];
//     }
//   }
//   return counter;
// }

// console.log(maxMeeting(start, finish));

// Max Chunks To Make Array Sorted

// Given an array of length n having elements in the range [0,n-1] in any order.We have to split the array into
//  maximum number of chunks and sort each chunk and concatenate them which should return a complete sorted
//  array.
//  Find the maximum number of chunks that can be made
// Example
// Input:[1,0,4,3,2]
// Output:2
// If we split the array into individual elements the chunk size would be maximum but the array will not be sorted but if we
// divide into two chunks [1,0] and [4,3,2] and sort and concatenate it we get [0,1,2,3,4].

// var start = [1, 0, 4, 3, 2];

// function maxChunk(s) {
//   let maxi = 0;
//   let n = s.length;
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     maxi = Math.max(maxi, s[i]);
//     if (maxi == i) {
//       console.log(maxi);
//       ans++;
//     }
//   }
//   return ans;
// }

// console.log(maxChunk(start));

// Maximum Gap

// Given an array of integers we need to find the maximum difference between two consecutive elements
//  when the array is sorted in ascending order
// Example:
// Input:[2,4,7,9,1,15]
// Output:6
// If the array is sorted it would have elements as
// [1,2,4,7,9,15] and the maximum difference is (15-9) which is 6.

// var input = [2, 4, 7, 9, 1, 15];

// function maxdiff(input) {
//   input.sort((a, b) => a - b);
//   let maxi = 0;
//   for (let i = 1; i < input.length; i++) {
//     let diff = input[i] - input[i - 1];
//     maxi = diff > maxi ? diff : maxi;
//   }
//   return maxi;
// }

// console.log(maxdiff(input));

// Minimum Number of Moves to Seat Everyone

// Given there are N seats and N students in a room.An array seat of length is given where seat[i] is
// the position of ith seat andalso an array of students of length n is given where stud[i] is
// the position of ith student.
// We can perform the following move any number of times.
// Increase or decrease the position of ith student(moving position of ith student from position j to j+1
//  or j-1)
// We need to find the minimum number of moves required to move each student to a seat so that no two
//  students share same seat.
// Example: seat = [2,1,5]
// stud = [2,7,4]
// Output:5

// let seat = [2, 1, 5];
// let stud = [2, 7, 4];

// function arrange(seat, stud) {
//   seat.sort((a, b) => a - b);
//   stud.sort((a, b) => a - b);
//   let counter = 0;
//   for (let i = 0; i < seat.length; i++) {
//     counter += Math.abs(seat[i] - stud[i]);
//   }
//   return counter;
// }

// console.log(arrange(seat, stud));

// Minimum Increment to Make Array Unique
// Given an array of integers.We need to find the minimum number of moves where move is you can choose
// any element of array and increment it by 1 to make every element in the array unique
// Input:[1,3,3]
// Output:After incrementing one of the 3 to four ,all the elements in the array will be unique,so output is 1

function makeUnique(nums) {
  let maxVal = 0;
  let map1 = {};
  for (let i = 0; i < nums.length; i++) {
    maxVal = Math.max(maxVal, nums[i]);
    if (!map1[nums[i]]) {
      map1[nums[i]] = 0;
    }
    map1[nums[i]]++;
  }
  console.log(map1);
  let move = 0;
  let taken = 0;
  for (let x = 0; x < nums.length + maxVal; x++) {
    if (map1[x] >= 2) {
      taken += map1[x] - 1;
      move -= x * (map1[x] - 1);
    } else if (taken > 0 && !map1[x]) {
      taken--;
      move += x;
    }
  }
  return move;
}
console.log(makeUnique(nums));

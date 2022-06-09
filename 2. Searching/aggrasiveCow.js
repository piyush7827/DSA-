// Aggressive Cows

// Farmer Vijay has a larger barn, with ‘n’ stalls. The stalls are located at the position from ‘b1…….bn’ along
//  a straight line. His cows ‘c’ are not interested in his barn layout and become aggressive towards
//  each other once put into a stall, to avoid the cows getting hurt each other.
// The Farmer wishes to assign the cows to stalls, such that the minimum distance between any two of
// them is as large. Find the largest minimum distance.
// Constraints:
// ● n(2 <= n <= 100000)
// ● b1…..bn(0 <= ai <= 1000000)
// ● c(2 <= c <= N)
// Input:
// ● No of stalls (n)
// ● Array of stalls (arr[n])
// ● No of cows(c)
// Sample Input:
// 5
// [1 2 4 8 9]
// 3
// Sample Output: 3

let n = 5; //No of stalls
let c = 3; //No of cows

function check(num, stallArr) {
  let cows = 1,
    pos = stallArr[0];
  for (let i = 1; i < n; i++) {
    if (stallArr[i] - pos >= num) {
      pos = stallArr[i];
      cows++;
      if (cows == c) return 1;
    }
  }
  return 0;
}

function binarySearch(stallArr) {
  let start = 0,
    end = stallArr[n - 1],
    max = -1;
  while (end > start) {
    let mid = Math.floor((start + end) / 2);
    if (check(mid, stallArr) == 1) {
      if (mid > max) max = mid;
      start = mid + 1;
    } else end = mid;
  }
  return max;
}
console.log("The minimum Distance = " + binarySearch([1, 2, 4, 8, 9]));

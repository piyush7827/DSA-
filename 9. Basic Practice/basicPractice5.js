/* Given an array B, break into K sub array in a way that the max sum of all the subarray comes out
to be minimum

input=> K=3
        B =[1,2,3,4]
output=> 4

expalanation=>
[1][2][3,4] =7
[1][2,3][4]= 5
[1,2][3][4] =4 <= minimun out of maximum sum
 */

// function to check if the mid can be maximum sub array
let check = (arr, n, k, mid) => {
  let count = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] > mid) {
      return false;
    }
    // increase sum of current sub-array
    sum += arr[i];
    // if the sum is grater than mid then increse the count
    if (sum > mid) {
      count++;
      sum = arr[i];
    }
  }
  count++;
  if (count <= k) {
    return true;
  }
  return false;
};

// function find maximum sub-array sum which is minimum

let solve = (arr, n, k) => {
  let max = arr.reduce((a, b) => Math.max(a, b));
  let start = max;
  let end = 0;

  for (let i = 0; i < n; i++) {
    end += arr[i];
  }
  // answer stores possible maximum sub-array sum
  let answer = 0,
    mid;
  while (start <= end) {
    mid = parseInt(start + end) / 2;

    // if mid is the possible solution
    if (check(arr, n, k, mid) == true) {
      answer = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return answer;
};

let arr = [1, 2, 3, 4];
let n = arr.length;
let k = 3;
console.log(solve(arr, n, k));

/*
Given an array of length N, where every element is present twice and only one element is present
once. Find the unique element
Sample input: N = 5, Array = [3,2,1,2,3]
Sample output: 1
 */
function findSingle(ar, ar_size) {
  let res = ar[0];

  // Do XOR(operation) of all elements and return
  for (let i = 1; i < ar_size; i++) res = res ^ ar[i];

  return res;
}

let ar = [3, 2, 1, 2, 3];
let n = ar.length;
console.log("Element occurring once is " + findSingle(ar, n));

/*

Find the pair of elements in a given array A such that the sum of the pair is equal to N
Input: A = [10, 20, 10, 40, 50 , 70], N=50
Output: 2,3

*/

function chkPair(A, size, x) {
  for (i = 0; i < size - 1; i++) {
    for (j = i + 1; j < size; j++) {
      if (A[i] + A[j] == x) {
        console.log(
          "Pair with a given sum " + x + " is (" + A[i] + ", " + A[j] + ")"
        );

        return true;
      }
    }
  }

  return false;
}

let A = [10, 20, 10, 40, 50, 70];
let x = 50;
let size = A.length;

if (chkPair(A, size, x)) {
  console.log("<br/>Valid pair exists" + [i] + [j]);
} else {
  console.log("<br/>No valid pair exists for " + x);
}

// other way

function sumOfPair(nums, target_num) {
  var map = [];
  var indexes = [];

  for (var idx = 0; idx < nums.length; idx++) {
    if (map[nums[idx]] != null) {
      var index = map[nums[idx]];
      indexes[0] = index;
      indexes[1] = idx;
      break;
    } else {
      map[target_num - nums[idx]] = idx;
    }
  }
  return indexes;
}
console.log(sumOfPair([10, 20, 10, 40, 50, 60, 70], 50));

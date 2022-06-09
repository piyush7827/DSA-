// Painter partition

// You are provided with ‘n’ number of boards of length [b1, b2,..bn].There are ‘a’ painters available in the
// market and each painter takes one(1) unit time to paint one(1) unit of board.
// We need to find the minimum time to get the job done under the constraintsthat any painter will only
//  paint contiguous sections of the board.
// Note: Two painters cannot share boards to paint.
// Constraints:
// ● a(1 <= n <= 1000)
// ● arr(1 <= arr[i] <= 10^5)
// Input:
// ● Array of boards(arr[])
// ● No of painters(a)
// Sample Input:
// [10, 20, 30, 40]
// 2
// Sample Output:
// 60

let arr = [10, 20, 30, 40];
let p = 2; //p= painter

function sum(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index];
  }
  return sum;
}
// range
let start = arr[0];
let end = sum(arr);
let bestAns = -1;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let canPossibleAnswer = validate(arr, p, mid);

  if (canPossibleAnswer == true) {
    //go to left
    end = mid - 1;
    bestAns = mid;
  } else {
    start = mid + 1;
  }
}

function validate(arr, p, mid) {
  let currAllocation = arr[0];
  let index = 1;
  while (p > 0 && index < arr.length) {
    if (arr[index] > mid) {
      return false;
    } else if (currAllocation + arr[index] > mid) {
      p--;
      currAllocation = arr[index];
      index++;
    } else {
      currAllocation += arr[index];
      index++;
    }
  }

  if (index == arr.length && p == 1) {
    return true;
  }
  return false;
}

console.log(bestAns);

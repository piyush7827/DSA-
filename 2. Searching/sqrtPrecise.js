let n = 10;
let precision = 4;

let start = 0;
let end = n;
let ans = -1;
let mid = 0;

while (end - start > Math.pow(10, -precision)) {
  console.log(mid);
  mid = (start + end) / 2;
  if (mid * mid == n) {
    ans = mid;
    break;
  } else if (mid * mid > n) {
    end = mid;
  } else {
    start = mid;
  }
}
ans = mid;
console.log(ans);

// JavaScript program implementation to find square root of given number upto given precision using
// binary search.

/*function squareRoot(number, precision) {
  let start = 0,
    end = number;
  let mid;

  // variable to store the answer
  let ans = 0.0;

  // for computing integral part
  // of square root of number
  while (start <= end) {
    mid = (start + end) / 2;

    if (mid * mid == number) {
      ans = mid;
      break;
    }

    // incrementing start if integral
    // part lies on right side of the mid
    if (mid * mid < number) {
      start = mid + 1;
      ans = mid;
    }

    // decrementing end if integral part
    // lies on the left side of the mid
    else {
      end = mid - 1;
    }
  }

  // For computing the fractional part
  // of square root upto given precision
  let increment = 0.1;
  for (let i = 0; i < precision; i++) {
    while (ans * ans <= number) {
      ans += increment;
    }

    // loop terminates when ans * ans > number
    ans = ans - increment;
    increment = increment / 10;
  }
  return ans;
}

console.log(squareRoot(10, 4));*/

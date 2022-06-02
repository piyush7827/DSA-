let arr = [5, 7, 6, 1, 4, 8, 9, 3, 2];

function comapreIncresing(a, b) {
  if (a < b) {
    return -1;
  } else if (b < a) {
    return 1;
  } else {
    return 0;
  }
}

function comapreDecresing(a, b) {
  if (a > b) {
    return -1;
  } else if (b > a) {
    return 1;
  } else {
    return 0;
  }
}

// arr.sort((a, b) => a - b); // 1,2,3,4,5,6,7,8,9

// arr.sort((a, b) => b - a); // 9,8,7,6,5,4,3,2,1

console.log(arr);

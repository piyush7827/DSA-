function binarySearch(arr, numbertosearch) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === numbertosearch) {
      return mid;
    } else if (arr[mid] > numbertosearch) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15], 11)); // 5
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15], 20)); // -1

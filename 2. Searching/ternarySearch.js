function ternarySearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid1 = start + Math.floor((end - start) / 3);
    let mid2 = end - Math.floor((end - start) / 3);
    if (arr[mid1] === key) {
      return mid1;
    } else if (arr[mid2] === key) {
      return mid2;
    } else if (arr[mid1] > key) {
      end = mid1 - 1;
    } else if (arr[mid2] < key) {
      start = mid2 + 1;
    } else {
      start = mid1 + 1;
      end = mid2 - 1;
    }
  }
  return -1;
}
console.log(ternarySearch([1, 3, 4, 6, 8, 9, 11, 15, 16, 19], 15));

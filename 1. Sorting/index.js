// function dsa(n) {
//   for (let i = 1; i < n; i++) {
//     console.log(i);
//   }
// }
// dsa(10);

// function printNaturalNumber(n) {
//   if (n == 0) {
//     return;
//   }
//   printNaturalNumber(n - 1);
//   console.log(n);
// }
// printNaturalNumber(45);

// function printNaturalNumber(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// }
// printNaturalNumber(45);

// for (let i = 50; i > 0; i = i - 5) {
//   console.log(i);
// }

// An Not in-place Javascript program
// to reverse an array

/* Function to reverse arr[]
	from start to end*/
function reverseArray(arr, n) {
  // Create a copy array
  // and store reversed
  // elements
  let rev = new Array(n);
  for (let i = 0; i < n; i++) rev[n - i - 1] = arr[i];

  // Now copy reversed
  // elements back to arr[]
  for (let i = 0; i < n; i++) arr[i] = rev[i];
}

/* Utility function to
	print an array */
function printArray(arr, size) {
  for (let i = 0; i < size; i++) document.write(arr[i] + " ");
  document.write("<br>");
}

// Driver code
let arr = [1, 2, 3, 4, 5, 6];
let n = arr.length;
printArray(arr, n);
reverseArray(arr, n);
document.write("Reversed array is<br>");
printArray(arr, n);

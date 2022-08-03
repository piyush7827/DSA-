// print the pattern
// using (2n-1) generate odd no
let rows = 5,
  val,
  col;
// // let col = 5;

let str;
for (let i = 1; i <= rows; i++) {
  let str = "";
  val = i;
  col = 2 * i - 1;
  // add whit space to the left
  for (let j = 0; j <= rows - i; j++) {
    str += " ";
  }
  // add * the output
  //   for (let k = 0; k != 2 * i - 1; k++)
  for (let k = 0; k != col; k++) {
    // str += "*";
    // str += i;
    str += val;
    if (k < col / 2 - 1) {
      val--;
    } else {
      val++;
    }
  }
  console.log(str);
}

// let n = 5;
// let str;

// for (let i = 1; i <= 5; i++) {
//   str = "";
//   for (let j = 1; j <= 5; j++) {
//     // str += j;
//     str += i;
//   }
//   console.log(str);
// }

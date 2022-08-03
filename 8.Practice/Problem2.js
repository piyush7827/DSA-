// function verifyDivide(n) {
//   if (n % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let Result = verifyDivide(8);
// let Result1 = verifyDivide(9);
// console.log(Result);
// console.log(Result1);

function triangleConformation(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return true;
  } else {
    false;
  }
}
let a = 7,
  b = 10,
  c = 5;
if (triangleConformation(a, b, c)) console.log("Triangle");
else console.log("Non Triangle");

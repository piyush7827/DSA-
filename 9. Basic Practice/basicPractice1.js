// write a program to convert it into its binary form
// input = 17
// output = 10001

/*
steps
1. use While loop (num != 0)
2.rem = num %2
3.quotient = parseInt(num/2)
4. num = quotient
5. binaryNum = binaryNum + rem * i
6. i = i*10


*/

let convertBinary = (num) => {
  let binaryNum = 0;
  let rem,
    quotient,
    step = 1,
    i = 1;

  while (num != 0) {
    rem = num % 2;
    quotient = parseInt(num / 2);
    console.log(
      `step: ${step} => ${num}/2, remainder: ${rem}, quotient: ${quotient}`
    );
    num = quotient;
    step++;

    binaryNum = binaryNum + rem * i;
    i = i * 10;
  }
  console.log(`binaryNumber:${binaryNum}`);
};

convertBinary(17);

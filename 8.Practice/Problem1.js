function mathTable(table, n) {
  for (let i = 1; i <= n; i++) {
    console.log(`${table} * ${i} is ${table * i}`);
  }
}
mathTable(6, 9);

function square(n) {
  for (let i = 1; i < n; i++) {
    console.log(`${n} is ${n * n}`);
  }
}

square(125);

const x = 6 % 2;
const y = x ? "One" : "Two";

console.log(y);

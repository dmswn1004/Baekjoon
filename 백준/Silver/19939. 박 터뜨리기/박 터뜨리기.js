let input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let sum = Array.from({ length: input[1] }, (v, i) => i + 1).reduce((a, b) => a + b, 0);
if (input[0] < sum) console.log(-1);
else {
  input[0] -= sum;
  console.log(input[0] % input[1] === 0 ? input[1] - 1 : input[1]);
}
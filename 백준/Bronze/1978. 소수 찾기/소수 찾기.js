let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let num = input[1].split(" ").map(Number);
let count = 0;
for (let i = 0; i < input[0]; i++) {
  if (num[i] === 1) continue;
  let flag = true;
  for (let j = 2; j <= Math.sqrt(num[i]); j++) {
    if (num[i] % j === 0) {
      flag = false;
      break;
    }
  }
  if (flag) count++;
}
console.log(count);
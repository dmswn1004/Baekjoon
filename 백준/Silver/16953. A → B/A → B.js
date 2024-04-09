let input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let answer = 0;

while (input[0] < input[1]) {
  if (input[1] % 2 === 0) {
    input[1] /= 2;
    answer++;
  } else if (input[1].toString().at(-1) === "1") {
    input[1] = Math.floor(input[1] / 10);
    answer++;
  } else break;
}

console.log(input[0] === input[1] ? answer + 1 : -1);
let input = require("fs").readFileSync("/dev/stdin").toString().trim();
input = input.split("-");
let answer = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i].includes("+")) {
    input[i] = input[i]
      .split("+")
      .map(Number)
      .reduce((a, b) => a + b, 0);
  }

  if (i === 0) answer += Number(input[0]);
  else answer -= Number(input[i]);
}
console.log(answer);
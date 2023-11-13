let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

for (let i = 0; i < input.length; i++) {
  if (input[i] === -1) break;
  let arr = [];
  for (let j = 1; j < input[i]; j++) {
    if (input[i] % j === 0) arr.push(j);
  }
  if (arr.reduce((a, b) => a + b, 0) === input[i]) {
    console.log(`${input[i]} = ${arr.join(" + ")}`);
  } else {
    console.log(`${input[i]} is NOT perfect.`);
  }
}
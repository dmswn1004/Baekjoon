let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let N = input.shift();
input = input.map((v) => v.split(" ").map(Number));
input.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

let count = 1;
let time = input[0][1];

for (let i = 1; i < N; i++) {
  if (time <= input[i][0]) {
    time = input[i][1];
    count++;
  }
}

console.log(count);
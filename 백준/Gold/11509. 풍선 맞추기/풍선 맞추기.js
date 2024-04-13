let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let N = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let arrow = Array.from({ length: Math.max(...arr) + 1 }, () => 0);
let answer = 0;

for (let h of arr) {
  if (arrow[h] === 0) {
    answer += 1;
    arrow[h - 1]++;
  } else {
    arrow[h]--;
    arrow[h - 1]++;
  }
}
console.log(answer);
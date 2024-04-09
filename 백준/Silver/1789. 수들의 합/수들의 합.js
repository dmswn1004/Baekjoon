let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let sum = 0;
let i = 1;

while (input >= sum) {
  sum += i++;
}

console.log(i - 2);
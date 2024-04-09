
let input = require("fs").readFileSync("/dev/stdin").toString().trim();
input = Number(input);
let answer = 0;

while (input > 0) {
  if (input % 5 === 0) {
    let num = Math.floor(input / 5);
    answer += num;
    input -= num * 5;
    break;
  }
  input -= 3;
  answer++;
}

console.log(input === 0 ? answer : -1);

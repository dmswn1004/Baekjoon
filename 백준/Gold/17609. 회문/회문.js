let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
let answer = [];
const isPalindrome = (x) => x === x.split("").reverse().join("");
for (let x of input) {
  if (isPalindrome(x)) answer.push(0);
  else {
    let n = x.length;
    let flag = false;
    for (let i = 0; i < Math.ceil(n / 2); i++) {
      if (x[i] !== x[n - i - 1]) {
        if (isPalindrome(x.slice(0, i) + x.slice(i + 1, n))) flag = true;
        if (isPalindrome(x.slice(0, n - i - 1) + x.slice(n - i, n))) flag = true;
        break;
      }
    }
    if (flag) answer.push(1);
    else answer.push(2);
  }
}
console.log(answer.join("\n"));
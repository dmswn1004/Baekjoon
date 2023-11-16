let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let n = parseInt(input);
while (n !== 1) {
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
      n /= i;
      break;
    }
  }
}
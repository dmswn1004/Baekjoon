let [M, N] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const array = Array(N - M + 1)
  .fill()
  .map((_, index) => M + index);

const answer = array.filter((num) => {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
});

if (answer.length) {
  console.log(answer.reduce((sum, prime) => (sum += prime)));
  console.log(answer[0]);
} else {
  console.log(-1);
}

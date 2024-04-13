let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let N = Number(input.shift());
input = input.map(Number);
let febo = [0, 1, 1];
let answer = Array.from({ length: N }, () => 0);

while (Math.max(...input) > febo.at(-1)) {
  febo.push(febo.at(-1) + febo.at(-2));
}

for (let i = 0; i < N; i++) {
  let arr = febo.filter((v) => v <= input[i]);
  let str = [];
  for (let j = arr.length - 1; j > 0; j--) {
    if (input[i] >= arr[j]) {
      input[i] -= arr[j];
      str.push(arr[j]);
    }
  }
  str.sort((a, b) => a - b);
  answer[i] = str.join(" ");
}
console.log(answer.join("\n"));
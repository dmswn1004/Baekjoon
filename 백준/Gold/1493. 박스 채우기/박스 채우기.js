let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [length, width, height] = input.shift().split(" ").map(Number);
let cubes = Array(20).fill(0);
let n = Number(input.shift());

for (let i = 0; i < n; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  cubes[a] = b;
}

function nearestSquare(x) {
  let i = 1;
  while (Math.pow(2, i) <= x) i++;
  return i - 1;
}
let size = 19;
size = nearestSquare(length);
size = Math.min(size, nearestSquare(width));
size = Math.min(size, nearestSquare(height));
let res = 0;
let used = 0;

for (let i = size; i >= 0; i--) {
  used *= 8;
  cur = 2 ** i;

  let required = parseInt(length / cur) * parseInt(width / cur) * parseInt(height / cur) - used;
  let usage = Math.min(required, cubes[i]);
  res += usage;
  used += usage;
}

if (used == length * width * height) console.log(res);
else console.log(-1);
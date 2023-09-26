const fs = require('fs');
const [a, b] = fs.readFileSync("/dev/stdin").toString().split("\n").map(a => Number(a));

const one = b % 10;
const ten = Math.floor((b % 100) / 10);
const hundred = Math.floor(b / 100);

console.log(a * one);
console.log(a * ten);
console.log(a * hundred);
console.log(a * b);
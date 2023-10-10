let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
input.map((a, i) => {input[i] = a.split('').reverse().join('')})
console.log(Math.max(...input.map(Number))); 
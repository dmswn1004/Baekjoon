let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let max = Math.max(...input);
console.log(max + '\n' + Number(input.indexOf(max) + 1));
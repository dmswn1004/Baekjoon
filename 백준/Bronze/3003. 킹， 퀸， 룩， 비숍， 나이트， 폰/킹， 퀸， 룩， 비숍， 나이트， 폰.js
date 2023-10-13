let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let num = [1, 1, 2, 2, 2, 8];
console.log(num.map((a,i)=> a - input[i]).join(' '));
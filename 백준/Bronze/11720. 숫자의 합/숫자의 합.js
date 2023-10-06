let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(input[1].split('').map(Number).reduce((a,c)=>a + c));

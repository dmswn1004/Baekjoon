let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let [h, m] = input[0].split(' ').map(a => +a);
let t = Number(input[1]);

let total = h * 60 + m;
let end = (total + t) % (24 * 60);

console.log(Math.floor(end / 60), end % 60);
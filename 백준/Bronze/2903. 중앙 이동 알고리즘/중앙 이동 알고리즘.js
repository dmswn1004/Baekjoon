let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let point = 2;

for(let i = 0; i < input; i++){
    point += Math.pow(2, i);
};
console.log(Math.pow(point, 2))
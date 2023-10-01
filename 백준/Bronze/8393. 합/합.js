let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let sum = 0;

for(var i = 1; i <= input; i++){
    sum += i;
}
console.log(sum);
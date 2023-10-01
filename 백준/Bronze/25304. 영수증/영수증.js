let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let X = +input[0];
let N = +input[1];
let sum = 0;

for(var i = 2; i < N+2; i++){
    let [a, b] = input[i].split(' ').map(a=> +a);
    sum += (a * b);
}

X == sum? console.log('Yes') : console.log('No');
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(var i = 0; i < input.length; i++){
    let [a,  b] = input[i].split(' ').map(a=> +a);
    console.log(a + b);
}
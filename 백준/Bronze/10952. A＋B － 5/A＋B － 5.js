let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for(var i = 0; i < input.length; i++){
    if(input[i] == '0 0') break;
    let [a,  b] = input[i].split(' ').map(a=> +a);
    console.log(a + b);
}
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
for(var i = 0; i < 10; i++){
    input[i] %= 42;
}
console.log(new Set(input).size);
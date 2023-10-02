let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(a=> a.split(' ').map(a => +a));
let max = 0;
let index = [];

for(var i = 0; i < input.length; i++){
    let num = Math.max(...input[i])
    if(max <= num) {
        max = num;
        index = [i + 1, input[i].indexOf(max) + 1];
    }
}
console.log(max);
console.log(index.join(' '));
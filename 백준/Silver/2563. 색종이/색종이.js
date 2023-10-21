let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(a => a.split(' ').map(Number));
let square = new Array(100).fill(0).map(a => new Array(100).fill(0));
let count = 0;

for(var i = 1; i <= input[0][0]; i++) {
    let [x, y] = input[i];
    for(var j = x; j < x + 10; j++) {
        for(var k = y; k < y + 10; k++) {
            if(++square[j][k] == 1) count++;
        }
    }
}

console.log(count);
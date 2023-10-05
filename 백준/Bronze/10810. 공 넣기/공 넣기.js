let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(a => a.split(' ').map(Number));
let ary = (new Array(input[0][0])).fill(0);

for(var i = 1; i <= input[0][1]; i++){
    for(var j = input[i][0]; j <= input[i][1]; j++){
        ary[j-1] = input[i][2];
    }
}
console.log(ary.join(' '));
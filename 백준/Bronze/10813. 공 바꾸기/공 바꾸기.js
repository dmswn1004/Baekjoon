let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(a => a.split(' ').map(Number));
let ary = (new Array(input[0][0])).fill(1);
ary.map((a, i) => {ary[i] += i});

for(var i = 1; i <= input[0][1]; i++){
    let temp = ary[input[i][0] - 1];
    ary[input[i][0] - 1] = ary[input[i][1] - 1];
    ary[input[i][1] - 1] = temp;
}
console.log(ary.join(' '));

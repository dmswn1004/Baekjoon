let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(a => a.split(' ').map(Number));
let ary = (new Array(input[0][0])).fill().map((a, i)=> i + 1);

for(var i = 1; i <= input[0][1]; i++){
    let temp = ary.slice(input[i][0]-1, input[i][1]).reverse();
    ary.splice(input[i][0]-1, input[i][1] - input[i][0] + 1, ...temp);
}
console.log(ary.join(' '));
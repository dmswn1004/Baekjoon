let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let change = [25, 10, 5, 1];

for (var i = 1; i <= input[0]; i++) {
    let result = [];
    change.map(a => {
        result.push(Math.floor(input[i] / a));
        input[i] %= a;
    });
    console.log(result.join(' '));
}
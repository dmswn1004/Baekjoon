let input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(Number);
input.shift();
input.sort((a,b) => a-b)

const set = Array.from(new Set(input));
for (let i in set) {
    console.log(set[i])
}
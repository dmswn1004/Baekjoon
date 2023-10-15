let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let ary = {};
[...input.toUpperCase()].map(a => {ary[a] = (ary[a] || 0) + 1});
const mostFrequentChars = Object.keys(ary).filter((char) => ary[char] === Math.max(...Object.values(ary)));
console.log(mostFrequentChars.length === 1 ? mostFrequentChars[0] : '?');
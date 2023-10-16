let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let alphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
alphabet.map(a => {input = input.split(a).join('!')});
console.log(input.length);
const fs = require('fs');
const [a, b] = fs.readFileSync("/dev/stdin").toString().split(" ").map(a => +a);

if(a > b) console.log(">");
else if(a < b) console.log("<");
else console.log("==");
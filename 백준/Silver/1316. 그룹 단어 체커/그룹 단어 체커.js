let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let count = 0;
for(var i = 1; i <= input[0]; i++) {
    var arr = input[i].split('');
    var result = [];
    var flag = true;
    
    for(var j = 0; j < arr.length; j++) {
        if(arr[j] !== arr[j+1]) {
            result.push(arr[j]);
        }
    }

    for(var k = 0; k < result.length; k++) {
        if(result.indexOf(result[k]) !== result.lastIndexOf(result[k])) {
            flag = false;
        }
    }
    if(flag) count++;
}
console.log(count);
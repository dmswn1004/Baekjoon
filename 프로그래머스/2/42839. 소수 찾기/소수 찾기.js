let answer = [];

function solution(numbers) {
    let num = numbers.split("").map(Number);
    let visit = new Array(num.length).fill(false);

    dfs([], 0, num, visit);
    return answer.length;
}


function dfs(arr, depth, num, visit) {    
    if(depth > num.length) return;
    
    let x = Number(arr.join(""));
    
    if (isPrime(x) === true) {
        if(answer.indexOf(x) === -1) answer.push(x);
    }
    
    for(let i = 0; i < num.length; i++) {
        if(visit[i] === true) continue;
        
        arr.push(num[i]);
        visit[i] = true;
        dfs(arr, depth + 1, num, visit);
        arr.pop();
        visit[i] = false;
    }
}

// 소수가 맞는지
function isPrime(n) {
    if(n < 2) return false;
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(parseInt(n) % i === 0) return false;
    }
    return true;
}
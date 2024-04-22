function solution(n, times) {
    let answer = 0;
    let start = 0;
    let end = Math.max(...times) * n;
    
    times.sort((a, b) => a - b);
    
    while(start <= end) {
        let mid = parseInt((start + end) / 2);
        let total = 0;
        
        for(let i = 0; i < times.length; i++) {
            total += parseInt(mid / times[i]);
        }
        
        if(total >= n) {
            answer = mid;
            end = mid - 1;
        } else start = mid + 1;
    }
    return answer;
}

function solution(isBadVersion){
    return function(n){
        let left = 0;
        let right= n;
        while(left<right){
            let mid = Math.floor((left+right)/2);
            if(isBadVersion(mid)){
                right = mid;
            }else{
                left = mid-1;
            }
        }
        return -1;
    }
}
const input = 5,bad =4;
console.log(solution(input)) 

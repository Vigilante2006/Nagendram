

//function to check if the mid can be maximum sub array sum.
let check = (arr,mid,n,k)=>{
    let count = 0;
    let sum = 0;
    for(let i=0;i<n;i++){
        if(arr[i]>mid){
            return false;
        }
        //increase sum of current sub array
        sum += arr[i];
        //if the sum i greater than mid then increase the count
        if(sum>mid){
            count++;
            sum = arr[i];

        }
    }
    count++;
    if(count<=k){
        return true;
    }
    return false;
}
//function to find maximum sub array sum which is minimun
let solve = (arr,n,k)=>{
    let max=arr.reduce((a,b)=>Math.max(a,b));
    let start = max;// max sub array sum considering length of subarray as 1
    let end = 0;

    for(let i=0;i<n;i++){
        end += arr[i];//max sub array sum considering length of sub array as 1
    }
        // answer store possible maximum sub array  sum
    let answer = 0,mid;
    while(start<=end){
         mid = parseInt(start+end)/2;

    }
    //if mid is the possible solution 
    if(check(arr,mid,n,k) == true){
        answer = mid;
        end = mid-1;
    }
    else{
        start = mid+1
    }
    return answer;

}
let arr = [1,2,3,4];
let n = arr.length;
let k = 3;
console.log(solve(arr,n,k));

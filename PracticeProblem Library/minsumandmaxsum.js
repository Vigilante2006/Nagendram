let minSumAndMaxSum = (arr,n)=>{
    let sum=0;
    for(let i=0;i<n;i++){
        sum += arr[i];
    }
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    for(let i=0;i<n;i++){
        if(min>arr[i]){
            min=arr[i];
        }
        if(max<arr[i]){
            max=arr[i]
        }
    }
    return `max sum of (n-1) values will be ${sum-min} and min values will be ${sum-max}`;
}
//const arr=[5,1,2,9];
const arr = [2,4,5,6,7,8];
console.log(minSumAndMaxSum(arr,arr.length));







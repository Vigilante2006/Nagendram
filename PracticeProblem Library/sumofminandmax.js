let sumOfMinAndMax = (arr,n)=>{
        let min = Number.MAX_VALUE;
        let max = Number.MIN_VALUE;
        for(let i=0;i<n;i++){
            if(min>arr[i]){
                min=arr[i];
            }
            if(max<arr[i]){
                max = arr[i]
            }
        }
        return min+max;
}
let arr = [5,1,2,9];
console.log(`sum of min and max is ${sumOfMinAndMax(arr,arr.length)} `);
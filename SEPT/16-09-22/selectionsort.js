

function selectionSort(arr){
    let n=arr.length;
    let min_indx;
    for(let i=0;i<n-1;i++){
        min_indx=i;
        for(j=i+1;j<n;j++){
            if(arr[j]<arr[min_indx]){
                min_indx = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[j+1];
        arr[j+1] = temp; 
    }
    return arr;
}
let nums = [10,5,8,20,2,18];
console.log(selectionSort(nums));

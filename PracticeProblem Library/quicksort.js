

function quickSort(arr,start,end){
    if(start>=end) {
        return;
    }
    let index = partition(arr,start,end);
     
    quickSort(arr,start,index-1);
    quickSort(arr,index+1,end);
}

function partition(arr,start,end){

    let pivotValue = arr[end];
    
    let pivotIndex = start;
    
    for(let i=start;i<=end;i++){
        if(arr[i]<pivotValue){
            [arr[i],arr[pivotIndex]] = [arr[pivotIndex],arr[i]];//swapping
            pivotIndex++;
        }
    }
    [arr[pivotIndex],arr[end]] = [arr[end],arr[pivotIndex]];
    return pivotIndex;

}
let arr = [5,3,7,6,2,9];
let arr1 = [9,-2,6,-4,7,10,5,8,0];
quickSort(arr,0,arr.length-1)
quickSort(arr1,0,arr1.length-1)
console.log(arr1);
console.log(arr);






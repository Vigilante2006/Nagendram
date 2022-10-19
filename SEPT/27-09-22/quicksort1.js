
function quickSort(arr,low,high){
    let start = low;
    let end = high;
    if(start>=end){
        return;
    }
    let mid = Math.floor((start+end)/2);
    const pivot = arr[mid];

    while(start<end){
        while(arr[start]<pivot){
            start++;
        }
        while(arr[end]>pivot){
            end--;
        }
        if(start<=end){
            swap(arr,start,end)
            start++;
            end--
        }

    }
    quickSort(arr,low,end);
    quickSort(arr,start,high);
}
function swap(arr,start,end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}

let arr = [15,13,2,17,9,12,0,4];
quickSort(arr,0,arr.length-1);
console.log(arr);




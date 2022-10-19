

function selectionSort(arr){
    let n=arr.length;
    let min_ind;
    for(let i=0;i<n-1;i++){
        //find the min element in the sub array
        min_ind = i;
        for(let j=i+1;j<n-1;j++){
            if(arr[j]<arr[min_ind]){
                min_ind = j;
            }
        }
        //swap the elements.
        if(min_ind!=i){
            let tep = arr[i];
            arr[i] = arr[min_ind];
            arr[min_ind] = tep;
        }
    }
    return arr;
}
let arr = [10,5,8,2,20,18];
console.log(selectionSort(arr));


function selection(arr){
    let min;
    for(let i=0;i<arr.length-1;i++){
        min = i;
        for(j=i+1;j<arr.length-1;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        if(min!=i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}
let arr1 = [6,3,67,21,98,23,10];
console.log(selection(arr1));





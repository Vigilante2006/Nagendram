//merge sort.
function mergeSort(array,left,mid,right){
    //to divide the array based on pointer.
    //create left and right array

    let leftArrayLength = mid-left+1;
    let rightArrayLength = right-mid;
    let leftArray = new Array(leftArrayLength);
    let rightArray = new Array(rightArrayLength);

    for(let i=0;i<leftArrayLength;i++){
        leftArray[i] = array[left+i]
    }
    for(let j= 0;j<rightArrayLength;j++){
        rightArray[j] = array[mid+1+j];
    }
    //2.merge part
    let i=0;
    let j=0;
    let k= left;
    while(i<leftArrayLength && j<rightArrayLength){
        if(leftArray[i]<rightArray[j]){
            array[k] = leftArray[i];
            i++;
        }else{
            array[k]= rightArray[j];
            j++;
        }
        k++;
    }
    while(i<leftArrayLength){
        array[k]=leftArray[i];
        i++;
        k++;
    }
    while(j<rightArrayLength){
        array[k] = rightArray[j];
        j++;
        k++;
    }
}
//just giving pointers to divide, and then merge later
function perMergeSort(array,left,right){
    //stop recursion
    if(left>=right){
        return;
    }
    //step 1:find mid element.
    let mid = parseInt((left+right)/2);
    //to create left array.
    perMergeSort(array,left,mid);
    //to create right array.
    perMergeSort(array,mid+1,right);
    mergeSort(array,left,mid,right)
}
const arr = [10,7,12,9,13,5];

perMergeSort(arr,0,arr.length-1)
console.log(arr);

//recursion call logn
//main fun n
//tc nlogn.




function mergeSort1(array,left,mid,right){
    let leftArrayLength = mid-left+1;
    let rightArrayLength = right-mid;
    let leftArray = new Array(leftArrayLength);
    let rightArray = new Array(rightArrayLength);

    for(let i=0;i<leftArrayLength;i++){
        leftArray[i]=array[left+i];
    }
    for(let j=0;j<rightArrayLength;j++){
        rightArray[j] =array[mid+1+j];
    }
    let i=0;
    let j = 0;
    let k = left;
    while(i<leftArrayLength && j<rightArrayLength){
        if(leftArray[i]<rightArray[j]){
            array[k++] = leftArray[i++];
        }else{
            array[k++] = rightArray[j++];
           
        }
    }
    while(i<leftArrayLength){
        array[k++] = leftArray[i++]
    }
    while(j<rightArrayLength){
        array[k++] = rightArray[j++];
    }
}
function perMergeSort1(array,left,right){
    if(left>=right){
        return;
    }
    let mid = parseInt((left+right)/2);
    perMergeSort1(array,left,mid);
    perMergeSort1(array,mid+1,right);
    mergeSort1(array,left,mid,right)
}
let arrr = [5,6,3,2,8,9,1];
perMergeSort1(arrr,0,arrr.length-1)
console.log(arrr);


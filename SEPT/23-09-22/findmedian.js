
function findMedian(array){
    let mid = parseInt((array.length-1)/2)
    //1.if array length is even (mid+mid+1)/2 is median.
    if(array.length%2==0){
          return (array[mid]+array[mid+1])/2;
        //console.log(mid);
    }
    // if array length is odd ,mid is median
    else{
        return array[mid];
    }
}

function preMergeSort(array,left,right){
    if(left>=right){
        return;
    }

    let mid= parseInt((left+right)/2);
    preMergeSort(array,left,mid)
    preMergeSort(array,mid+1,right);
    mergeSort(array,left,mid,right)

}
function mergeSort(array,left,mid,right){

    let leftArrayLength = mid-left+1;
    let rightArrayLength = right-mid;
    let leftArray = new Array(leftArrayLength);
    let rightArray = new Array(rightArrayLength);

    for(let i=0;i<leftArrayLength;i++){
        leftArray[i] = array[left+i]
    }
    for(let j = 0;j<rightArrayLength;j++){
        rightArray[j] = array[mid+1+j];
    }

    let i=0;
    let j= 0;
    let k = left;
    while(i<leftArrayLength && j<rightArrayLength){
        if(leftArray[i]<rightArray[j]){
            array[k] = leftArray[i];
            i++;
        }else{
            array[k] = rightArray[j];
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
let arr1 = [11,12,25,26,38];
let arr2 = [2, 23,17,20,45];
const finalArray = [...arr1,...arr2];

preMergeSort(finalArray,0,finalArray.length-1);
console.log(finalArray);
console.log(findMedian(finalArray));

var a = [4,5,7,3];
a.sort((a,b)=>(a-b));
console.log((a.length/2));



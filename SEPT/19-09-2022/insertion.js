
let insertionSort = (arr)=>{
        n=arr.length;
    for(let i=1;i<n;i++){
        //choose the first element in the unsorted array
        let current  = arr[i];
        //the last element of sorted array
        let j=i-1;
        while(j>-1 && current<arr[j]){
               arr[j+1]=arr[j];
               j--;
            }
            arr[j+1]=current;
        }
    return arr;
}
//arr.push(12);
let arr = [9,6,7,3,2];
console.log(insertionSort(arr))


const array = ["Banana","Apple","Mango","Orange"];
array.sort();
console.log(array);

function insertion(array){
    let n=array.length;
    for(let i=1;i<n;i++){
        let current = array[i];
        let j=i-1;
        while(j>-1 && current<array[j]){
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = current;
    }
    return array;
}
const arr1 = [8,0,101,32,56,90,18];
console.log(insertion(arr1));


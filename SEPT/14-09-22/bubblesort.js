function bubblesort(arr,k){
    for(let i=0;i<k;i++){
        var isSwapped = false//there is no swaping
        //last i elements are already sorted
        for(let j=0;j<arr.length-1-i;j++){
            //check if the current element is greater than the next element
            if(arr[j]>arr[j+1]){
                //if the condition is true then swap both of them
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                //(arr[j+1],arr[j]);
                isSwapped = true
            }
        }
        if(!isSwapped) break;
    }
    return arr;
}
var k=4;
//var arr=[5,4,3,2,1,6,2];
var arr = [9,2,-4,0,-6,7,18,12,11];
console.log(bubblesort(arr,7));
//console.log(arr[arr.length-3]);
console.log(arr[arr.length-4])
//[8,4,7,6,5]
//O(n^2)




function bubb(arr,k){
    for(let i=0;i<k;i++){
        var isSwapped = false
        for(j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] =temp
                 isSwapped = true
            }
        }
        if(!isSwapped) break;
    }
    return arr;
}
//var k = 4
let arrr=[9,6,10,8,5,45,32,21]
console.log(bubb(arrr,8));
console.log(arrr.length-1);
//console.log(arr[arrr.length-4])
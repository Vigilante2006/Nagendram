
function printArraytriangle(array){

        if(array.length==1){
            console.log(array);
            return;
        }
        let reducedArray = [];
        for(let i=0;i<array.length-1;i++){
            reducedArray[i] = array[i]+array[i+1];
        }
        printArraytriangle(reducedArray);
        console.log(array);
}
const arr = [1,2,3,4,5];
printArraytriangle(arr);
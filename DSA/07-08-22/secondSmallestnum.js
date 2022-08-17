

function findSecondSmallestNum(array){
    let smallest = Number.MAX_VALUE;
    let secondsmallest = Number.MAX_VALUE;

    for(let i=0;i<array.length;i++){
        if(array[i]<smallest){
           // secondsmallest=smallest;
            smallest=array[i];
        }
        if(array[i]>smallest && array[i]<secondsmallest){
            secondsmallest = array[i];
        }
    }
    console.log("second smallest is: "+secondsmallest);

    
}
findSecondSmallestNum([11,34,54,22,13,78])
//console.log(Number.MAX_VALUE);
//findSecondSmallestNum([1,2,3,4,5,6]);
//findSecondSmallestNum([12,56,112,-65,-23,18])

let arr = [111,13,25,9,34,1];
//let n=arr.length;
arr.sort();
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);

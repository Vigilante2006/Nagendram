

function findSecondSmallest(array){
    let smallest = Number.MAX_VALUE;
    let secondsmallest = Number.MAX_VALUE;

    for(let i=0;i<array.length;i++){
        if(array[i]<smallest){
            smallest = array[i];
        }
    }
    for(let j=0;j<array.length;j++){
        if(array[j]>smallest && secondsmallest>array[j]){
            secondsmallest=array[j];
       
        
    }
}
    console.log("Smallest: "+smallest);
    console.log("secondsmallest: " +secondsmallest);
}
//findSecondSmallest([11,34,54,22,13,78]);
findSecondSmallest([4,5,5,6,76,6,23,7,32,34,4,7,6,3]);

// short = (arr)=>{
//     let num = Math.min(...arr);
//     let i=arr.indexOf(num);
//     arr.splice(i,1);
//     if(num==Math.min(...arr)){

//         return short(...arr);
//     }else{
//         console.log(Math.min(arr));
//     }
// };
// short([4,1,45,1,6,1,1,8]);
//short([1,4,45,3,6,10,8]);
//short([3,2,4,1]);
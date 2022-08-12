

function findSecondSmallestNum(array){

    let max=0;
    let min=0;
    for(let i=0;i<array.length;i++){
       
        if(max>array[i]){
            max=array[i];
            console.log(max);
        }
        if(min<array[i]){
            min=array[i];
            console.log(min);
        }
        //array[i-1]<array[i];
    }
    console.log("max: "+max)
    console.log("min: "+max);
    
   // console.log(result);
}
findSecondSmallestNum([11,34,54,22,13,78])
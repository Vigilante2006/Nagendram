

function findSecondSmallestNum(array){
    let result= 0;
    for(let i=0;i<array.length;i++){
        result+=array[i];
    }
    
    console.log(result);
}
findSecondSmallestNum([11,34,54,22,13,78])
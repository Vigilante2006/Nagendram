
// function sumList(list,n,index){
//     if(index===n){
//         return 0;
//     }
// }


function sumOfArray(arr){
    let sum = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            sum.push(arr[i]);
        }
    }
    console.log(sum);
}
sumOfArray([2,3,4,5]);
sumOfArray([1,2,3,4,5,6,7,8,9]);
sumOfArray([22,7,111,3,5,1]);
sumOfArray([5,7,4,8,6,-5,-8]);
sumOfArray([8,12,76,42,8,90,24]);
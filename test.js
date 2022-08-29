

// function sumAndAverage(n){
//     let sum=0;
//     let average;
//     for(let i=0;i<=n;i++){
//         sum+=i;
//         average = sum%n;
//     }
//     console.log(sum);
//     console.log(average);
// }
// sumAndAverage(4);


function countOddNumber(arr){
   
   let result = [];
    arr.forEach(num =>{
        if(num%2!==0) {
            result.push(num);
        }   
    });
    console.log(result);
}
countOddNumber([1,6,22,7,111,3,5,1]);
countOddNumber([2,7,5,7,4,8,6,-5,-8]);
countOddNumber([3,7,8,12,76,42,8,90,24]);
//console.log(arr);


//Write a program to sum numbers from 1 to N.
//N=>input given to function.

//n=5 => 1+2+3+4+5=15

//you can't use math function,n(n+1)/2
//for loop

// function sumOfNumbers(sum){
//     var total=0;
//     for(var i=0;i<=sum;i++){
//         total+=i;//0+1,1+2,3+3,6+4,10+5
//         //total=total+i;
//     }
//     return total;
// }
// console.log(sumOfNumbers(10));
// console.log(sumOfNumbers(15));
// console.log(sumOfNumbers(45));

/*function sunOfNumbers(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    //return sum;
    console.log(sum);
}
console.log(sunOfNumbers(19));*/


function sumOfNumbers(num){
    let total=0;
    for(let i=1;i<=num;i++){
        total+=i;//0+1,1+2 3+3,6+4,10+5
    }
    console.log(total);
}
sumOfNumbers(15);


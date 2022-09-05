


// function fibonacci(n){
    
//     if(n==0 || n==1){
//         return n;
//     }
//     return fibonacci(n-1)+fibonacci(n-2)
// }
// console.log(fibonacci());
// console.log(fibonacci(24));


function findFibonacci(n){

    if(n==0 || n==1){
        return n;
    }
    return findFibonacci(n-1)+findFibonacci(n-2);
}

console.log(findFibonacci(6));
// function isPrime(num){
//     if(num==2){
//         return true;

//     }else if(num>1){
//         for(var i=2;i<num;i++){
//             if(num%i !==0){
//                 return true;
//             }else if(num===i*i){
//                 return false
//             }
//             }
//         }else{
//             return false;
//     }
// }
// console.log(isPrime(4));

function isPrime(n){
    for( let i=2;i<n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

//a=8 [i=3],[a-i]=5,
function find2PNums(a){
    for( i=2;(i<a-2||a<5);i++){
        if(isPrime(i) && isPrime(a-i)){
            console.log(i,a-i);
            return;
        }

    }
    console.log("No Prime Numbers found");
}

find2PNums(10);
find2PNums(15);
find2PNums(4);
find2PNums(200);
find2PNums(9);


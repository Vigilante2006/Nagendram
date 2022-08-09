
 function primePalindrome(n,num){
     let len = n.length;
     
     for(let i=0;i<len/2;i++){
         if(n[i]!==n[len-1-i]){
             return false;
         }
     }
     return true;
    
}
for(j=0;j<=50;j++){
          if(primePalindrome(j.toString())){
          console.log(j);
      }
}
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



var a = [1,2,4,5,6, 7];
console.log(a.splice(0,4));





function findfactorial(num){
//     let result = 1;
//     while(num>=1){
//         result = result*num;
//         num--;
//     }
//     console.log(result);
        if(num==0){
            return 1
        }
        if(num<=1){
            return 1;
        }
        return num*findfactorial(num-1);
}
console.log(findfactorial(5));
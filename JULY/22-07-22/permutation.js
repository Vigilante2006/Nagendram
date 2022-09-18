
function perm(num){
    var arr = String(num).split("")
    //console.log(arr);
    if(arr.length<3 && num%60==0){
        return console.log(true);
    }else{
        let sum = 0;
        for(let i=0;i<arr.length;i++){
            sum+=Number(arr[i]);
        }
        //console.log(sum);
        if(sum%3==0){
            for(let k=0;k<arr.length;k++){
                if(arr[k]==5 || arr[k]==0){
                    for(let i=0;i<arr.length;i++){
                        for(let j=0;j<=i;j++){
                            if(j==arr.length-1){
                                i=0;
                            }else if(Number(arr[i])%4==0 && arr[i]!==arr[j]){
                                //console.log(arr[i],arr[j]);
                                return console.log(true);
                            }
                        }
                    }
                }else{
                    sum = false;
                }
            }
        }else{
            sum = false;
        }
        if(sum==true){
            console.log(true);
        }else{
            console.log(false);
        }
    }
}
perm(2340);
perm(60);
perm(180);
perm(540);
perm(316);
perm(754);





// function isDivisibleBy60(num){
//     if(num%10==0){
//         return 1;
//     }
//     let sum = 0;
//     let last = false;
//     let secondlast = false;
//     while(num!=0){                                               
//         i=num%10;
//         num = parseInt(num/10)
//     }
//         if(i%2 == 0 && (i>0 || last));{
//             secondlast = true;
//             if(i==0)
//             last = true;
//         }
//     if(sum%3==0 && last && secondlast){
//         return 1;
//     }
//     return 0;
// }
// let number =2340;
// let num = 24;
// console.log(isDivisibleBy60(number));
// console.log(isDivisibleBy60(num));




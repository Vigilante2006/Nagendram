
//Approach.
//Input => 1234567 =>2+3+4+5+6 =>20
//step 1:convert into astring.
//step 2:Traverse and pick individual digits


function getDigitSum(num){
    var numStr = num.toString()//converting num to string
   
   //1.check if inner digits are present.
    if(numStr.length<3){
        console.log(-1);
        return;
    }

    //2.Run Loop
    let sum=0;
     for(let i=1;i<=numStr.length-2;i++){
        sum +=Number(numStr[i]); 
     }
     console.log(sum);

}
getDigitSum(123456);
getDigitSum(12);
getDigitSum(9);
getDigitSum(7071);
getDigitSum(123);





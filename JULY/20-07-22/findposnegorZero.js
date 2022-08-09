
// function numPosNegOrZero(x){
//     switch(x){
//         case (x>0):{
//             console.log("num is positive");
//             break;
//         }
//         case (x==0):{
//             console.log("Zero");
//             break;
//         }
//         case (x<0):{
//             console.log("negative");
//             break;
//         }
//         default:{
//             console.log("Invalid");
//         }
//     }
// }   
// numPosNegOrZero(5);
// numPosNegOrZero(0);
// numPosNegOrZero(-5);


function identifyNumber(num){
    if(num>0){
        console.log("Positive");

    }else if(num==0){
        console.log("Zero");
    }else if(num<0){
        console.log("Negative");
    }else{
        console.log("Invalid");
    }
}
identifyNumber(5);
identifyNumber(0);
identifyNumber(-2);
identifyNumber("abc");
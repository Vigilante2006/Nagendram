// function IfCheckALargest(a,b,c){
//     if(a>b){
//         if(a>c){
//             console.log("Largest");
//         }else{
//             console.log("not largest");
//         }
//     }
// }


function CheckIfALargest(a,b,c){

    //return a>b ? a>c ? "Largest" +a: "Not a Largest"+a : "NotLargest"+a;
//return a>b && a>c ? "a is largest" : b>a && b>c ? "b is largest" : "c is largest";
    a>b && a>c ? console.log("a is largest") : b>a && b>c ? console.log("b is largest") : console.log(" c is largest");

}
console.log( CheckIfALargest(1,2,3));
console.log( CheckIfALargest(3,2,1));
console.log( CheckIfALargest(2,1,3));
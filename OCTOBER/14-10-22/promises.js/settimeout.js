
//it will Imort the module
const verifyCardModule = require("./verifyCard");
function placeOrder(){
    //1.verify card
    const promise = verifyCardModule.verifyCard(2022);
    //waiting for promise to complete.
    promise.then(
        //when promise is fullfilled
    (msg)=>{
        console.log(msg)
        //throw new Error ("Error inside then fulfilled callback")
        deductamount();
    },
    //whem promise is rejected
    (err)=>{
        console.log(err);
    }
    
    );//.catch((err)=>{
//         console.log("Error handling  in catch function")
//         console.log(err);
//     });
 }
function deductamount(err){
    if(err){
        console.log(err);
    }else{
    console.log("amount deducted");
    }
}
placeOrder();







// console.log("task 1")

// setTimeout(()=>{
//     console.log("task 2-async program")
// },0)

// console.log("task 2");

// console.log("task 3");
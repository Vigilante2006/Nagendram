
const verifyCardModule = require("./verifyCard");
function placeOrder(){
    //1.verify card
    verifyCardModule.verifyCard();
    //verifyCardModule.otherTask()
    //2.deduct amount
    deductamount();
}
//async

function deductamount(err){
    if(err){
        console.log(err);
    }else{
    console.log("amount deducted");
    }
}
placeOrder();







console.log("task 1")

setTimeout(()=>{
    console.log("task 2-async program")
},0)

console.log("task 2");

console.log("task 3");




const verifyCardModule1 = require("./verifycard");
function placeOrder(){
    verifyCardModule1.verifyCard();
    deductamount();
}
function deductamount(err){
    if(err){
        console.log(err);
    }else{
        console.log("amount deducted")
    }
}
placeOrder();





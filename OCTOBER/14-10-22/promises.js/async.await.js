
const verifyCardModule = require("./verifyCard");
async function placeOrder(){
    //wait for this to finish before executeing next statements.
    try{
        const result = await verifyCardModule.verifyCard(2022)
        console.log(result);
        deductamount();
        //throw new Error("after promise is resolved")
    }catch(err){
        console.log(err);
        return;
    }
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







// console.log("task 1")

// setTimeout(()=>{
//     console.log("task 2-async program")
// },0)

// console.log("task 2");

// console.log("task 3");
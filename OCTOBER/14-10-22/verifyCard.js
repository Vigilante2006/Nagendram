
//Infosys.

//it exports the module.
module.exports.verifyCard=(cb)=>{
    setTimeout(()=>{
        //console.log("card verified");
        cb(undefined, "card is expired");
     },4000);
}

 



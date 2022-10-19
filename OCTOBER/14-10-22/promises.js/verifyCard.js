
//Infosys.

//it exports the module.
module.exports.verifyCard=(year)=>{
    const cardPromise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            try{
                //throw new Error("Error while in promise")
                // if(num>=0){
                //     console.log("positive")
                // }else{
                //     console,log("negative");
                // }
                
                throw new Error("Error while in promise")
                if(year>=2022){
                    //call an api.
                    resolve("verified");
                }else{
                    reject("Failed because card is expired");
                }
                
            }catch(ex){
                console.log("error");
                console.log(ex);
                reject("failed because of error")
            }
            
            //tast is completed sucessfully
            //resolve()
            // reject("failed because card is expired")
            // resolve()
        },4000);
    });
    return cardPromise;
}

 



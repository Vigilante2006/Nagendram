


function findPairForSum(array,num){

    //1. Go through each number.
    for(let i=0;i<array.length;i++){
        let firnum = array[i];
        let secnum = num-firnum;
        //2. find second number.
        for(j=0;j<array.length;j++){
            if(i!=j && array[j]==secnum){
                console.log([firnum,secnum]);
                return;
            }
        
        }
    }
     console.log("Pair not found");
     return;
}

findPairForSum([10,20,30,40,50],50);
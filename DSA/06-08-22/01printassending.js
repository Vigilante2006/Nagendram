

function printAssendingOrder(array){

       let count =0
    for(let i=0;i<array.length;i++){
            if(array[i]==0)
            count++;
    }
    for(let i=0;i<count;i++){
        array[i] = 0;
        for(let i=count;i<array.length;i++){
            array[i]=1;
        }
    }


    for(let i=0;i<array.length;i++){
        console.log(array[i]+ " ");
    }
    
}

printAssendingOrder([0,1,1,0,0,1,0,1]);
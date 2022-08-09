function tableOfaNumber(n){
   
    for(var i=1;i<=10;i++){
       let result= i*n;
        console.log(result);
    
    }
   
}

tableOfaNumber(7);

//for(i=1;i<=10*n;i+=n)



function printTable(num){
    for(let i=1;i<=num;i++){
        let table="";
        for(let j=1;j<=10;j++){
            table+=j*i.toString()+" ";
        }
        console.log(table);
    }
}
printTable(10);

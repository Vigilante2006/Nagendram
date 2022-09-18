// function mathsTable(table,n){
//     for(let i=1;i<=n;i++){
//         console.log("${table}*${i},${table*i}")
//     }

// }
// mathsTable(7,10);

// function mathsTable(table,n){
//     for(var i=1 ;i<=n;i++){
//         console.log(` ${table} * ${i} = ${table*i}`);
//     }
// }
// mathsTable(9,10);




function mathsTable(table){
    
    for(let i=1;i<=table;i++){
        let tab = "";
        for(let j=1;j<=10;j++){
            tab += j*i.toString()+" ";
        }
        console.log(tab)
    }
}
    
mathsTable(10);


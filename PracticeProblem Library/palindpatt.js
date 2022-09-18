

let palindpatt = (row)=>{
    let str;
    for(i=1;i<=row;i++){
        str = "";
        let val =i;
        let col=2*i-1;
        for(let j=1;j<=row-i;j++){
            str +=" ";
        }
        for(let k=0;k!=col;k++){
            str +=val;
            if(k<col/2-1){
                val--;
            }else{
                val++;
            }
        }
        console.log(str);
    }
}
palindpatt(5);



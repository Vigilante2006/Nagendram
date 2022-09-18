
//let n=9;
let str;
for(let i=1;i<=9;i++){
    str = "";
    for(let j=1;j<=9-i;j++){
       str+=" ";
    }
    for(let k=0;k<2*i-1;k++){
        str +=i;
    }
    console.log(str);
}



let numpattern = (n)=>{
    let str;
    for(let i=1;i<=n;i++){
        str = "";
        for(let j=1;j<=n-i;j++){
            str += " ";
        }
        for(let k=0;k<2*i-1;k++){
            str +=i;
        }
        console.log(str);
    }
}
numpattern(9);

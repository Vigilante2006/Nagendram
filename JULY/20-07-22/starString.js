/*function starString(){
    let number_of_rows=5;
    let star_string="";
    for(let row =0 ;row<number_of_rows;row++){
        for(let colom =0;colom<=row;colom++){
            star_string+="*";
        
        }
        star_string+="<br>";
    }
    console.log(" ",star_string);
}
starString("*");*/

/*function starString(num){
    let stars=""
for(let i=1;i<=num;i++){
    
    for(let j=1;j<=num-i;j++){
        stars +=" ";
    }
    for(let k=0;k<2*i-1;k++){
        stars +="*";
    }
    stars +="\n";
    
}

console.log(stars);
}

starString(5);*/

/*function starString(num){
    let star=""
    for(let i=1;i<=num;i++)
    {

        for(let j=1;j<=num-i;j++){
            star+=" ";
        }
            for(let k=0;k<2*i-1;k++){
                star+="*";
        }
            star += "\n";
    }   
        console.log(star);
   
}
starString(5);*/


// function starString(num){
//     let star=""
    
//     for(let i=1;i<=num;i++){
       
//         for(let j=1;j<=num-i;j++){
//             star +=" ";
//         }
//         for(let k=0;k<2*i-1;k++){
//             star +="*";
//         }
//         star +="\n";
//     }
//     console.log(star);
// }
// starString(5);


function starString(num){
    for(i=1;i<=num;i++){
        let star="";
        for(let j=1;j<=num-i;j++){

             star +=" ";
        }
             for(let k=0;k<2*i-1;k++){
                star +="*";
             }
             star +="\n";
       
    }
    console.log(star);

}
starString(7);













/*function starString(num){
     
    for(let i=1;i<=num;i++){
        let stars="";
        for(let j=1;j<=i;j++)
        {
            stars+="*";
        }
        console.log(stars);
    }
}
starString(5);*/

// function starString(num){

//     for(let i=1;i<=num;i++){
//         let stars="";
//         for(let j=1;j<=i;j++){
//             stars+="*";
//         }
//         console.log(stars);
//     }
    

// }

// starString(5);


// function starString(num){
//     for(i=1;i<=num;i++){
//         let star=""
//         for(j=1;j<=i;j++){
//             star+="*";
//         }
//         console.log(star);
//     }
// }
// starString(6);




function printStar(stars){
    for(var star="*";star.length<=stars;star+="*"){
    console.log(" "+star);
    }
}
printStar(5);
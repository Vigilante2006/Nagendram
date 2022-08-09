// function revPattern(num){
//      let pat=""
// for(let i=1;i<=num;i++){
//     pat =" ";
//     for(let j=1;j<=i;j++){
//         pat +="*";
//     }
//     console.log(pat);
// }
// }
// revPattern(5);


function starReverse(num){
    let pat ="";
    for(let i=1;i<=num;i++){
        pat=" ";
        for(let j=1;j<i-1;i++){
            pat+="*";
        }
        console.log(pat);
    }
}
reverseString(5);
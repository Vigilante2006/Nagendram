

// function isOppositeSignsOrNot(i,j){
//     if(i==j){
//         console.log("not opposite signs");
//     }else{
//         console.log("Opposite signs");
//     }
// }
// isOppositeSignsOrNot(+78,+78);
// isOppositeSignsOrNot(+123,-123);

function checkSigns(x,y){
    return ((x^y)<0)
}
let x=+123, y=+12
console.log(checkSigns(x,y));


function calculateDiffOperators(x,y){

let z ;
let output;
if(z=='+'){
    output = x+y;
    return output;
}
else if(z=='-'){
    output = x-y;
    return output;
}
else if(z=='*'){
    output = x*y;
    return output;
}else {
    output = x/y;
    return output;
}


}

Console.log(calculateDiffOperators(2,3));
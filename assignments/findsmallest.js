function findSmallestNum(a,b,c){
        if(a<b && a<c){
            console.log(a+" is SMallest");
        }else if(b<a && b<c){
            console.log(b+" is Smallest");
        }else{
            console.log(c+" is Smallest");
        }

}
findSmallestNum(12,44,2);

//find smallest without comparision operator

let CHAR_BIT = 8;
function min(x,y)
{
    return y+((x-y)&((x-y)>>(32 * CHAR_BIT-1)));
}
function smallest(x,y,z){
    return Math.min(x,Math.min(y,z));
}
let x=12,y=44,z=2;
console.log("Smallest of 3 num is "+smallest(x,y,z));
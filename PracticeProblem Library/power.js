

let power = (x,n,d) =>{
    let res = 1;
    while(n>0){
        //check if n is odd or even
        if(n&1){
            res *= x;
        }
        n=n>>1;
        x=x*x;
        
    }
    return res%d;
}
console.log("power is "+power(2,3,5));
console.log("power is "+power(2,5,13));
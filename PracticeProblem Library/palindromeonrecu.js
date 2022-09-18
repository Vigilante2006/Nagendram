

//n=>original number
//rev=>reverse number.Initial value will be 0.

function reverse(n,rev){
    //base case
    if(n==0){
        return rev;
    }
    //self work
    rev=(rev*10)+(n%10);
    return reverse(Math.floor(n/10),rev)
}
let n=121;
let reversedNumber = reverse(n,0);
if(n==reversedNumber){
    console.log("Yes");
}else{
    console.log("No`")
}


  
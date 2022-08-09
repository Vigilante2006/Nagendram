function verify(n){

    return (n<=2 ? false : (n%2==0 ? true  :false));
   
}
let n=8
console.log((verify(n)) ?  "Yes" : "no" + "\n");
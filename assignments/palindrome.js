

function checkPalindrome(n){
    var len = n.length;
   
    for (var i=0;i<len/2;i++){
        if(n[i]!==n[len-1-i]){
            return 'not a palindrome';
        } 
    }
    return 'is a palindrome';
}

for(j=0;j<=50;j++){
    if(checkPalindrome(j.toString())){
        console.log(j)
    }
}



let palindrome = (x)=>{
    let reversedStr = "";
    let xstr = x.toString();
    for(let i of xstr){
        reversedStr = i+reversedStr;
    }
    return reversedStr===xstr;
}
let x = 121;
console.log(palindrome(x));
let x1 = 123;
console.log(palindrome(x1));


let palin = (x)=>{
    let reversed = x.toString().split("").reverse().join("");
    return(x.toString()===reversed)
}
console.log(palin(x));
console.log(palin(x1));
// const n=(121);
//  const value=checkPalindrome(n);
//  console.log(value);

/*function printPalindrome(n){
    let rev=0;
    for(var i=n;i>0;i/=10)
    rev = rev*10+i%10;
    return (n==rev);

}
for(var i=1;i<=50;i++){
    if(printPalindrome(i)){
        count<<i<<"";
    }
}
console.log(printPalindrome(33));

 */
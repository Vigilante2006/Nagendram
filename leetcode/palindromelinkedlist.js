//1.
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

//2.
let palin = (x)=>{
    let reversed = x.toString().split("").reverse().join("");
    return(x.toString()===reversed)
}
console.log(palin(x));
console.log(palin(x1));
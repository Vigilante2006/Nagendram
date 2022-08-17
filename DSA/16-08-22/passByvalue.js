function passByValue(value){
// it will create new address and add value there
//  because it gets value n parameter ,not address
    return(value+10);

}
const num = 50;
console.log("Number before passing t function",num);
// we are passing value not address;
const result = passByValue(num);
console.log("result",result);
//num is not updated because address was not passed
console.log("Num after passing to function",num);
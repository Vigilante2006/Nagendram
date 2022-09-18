


function add(a,b){
    
    //for lop will start from  1 and move till the value of second.
    //number,first number(a) is incremented in for loop
    for(let i=1;i<=b;i++){
        a++;
    
    } 
    return a;
}
//first number is 10 and second number is 32 for loop will start.
var a = add(10,32);

//from 1 and move till 32 and the value of a is incremented 32 times.
//which will give us the sum of two numbera
console.log(a);





// Javascript Program to add two numbers
// without using arithmetic operator
function Add(x, y) {
    // Iterate till there is no carry  
    while (y != 0)
    {
        // carry now contains common 
        //set bits of x and y
        let carry = x & y;  

        // Sum of bits of x and y where at 
        //least one of the bits is not set
        x = x ^ y; 

        // Carry is shifted by one so that adding
        // it to x gives the required sum
        y = carry << 1;
    }
    return x;
}

 //driver code
document.write(Add(15, 32));

const findGCD = (num1,num2)=>{
    let a = Math.abs(num1);
    let b = Math.abs(num2);

    while(a && b && a!==b){
        if(a>b){
            [a,b] = [a-b,b];
        }else{
            [a,b] = [a,b-a];
        }
    }
    return a||b;
}
const num1 = 462;
const num2 = 910;
console.log(findGCD(num1,num2));
// Step1: if a = b, then return the value of a
// Step 2: otherwise, if a>b then let a = a-b and return to step 1
// Step 3: otherwise if a<b then let b = b-a and return to step 1
// For example,
// gcd(25,10)
// a=25, b=10
// a=25-10 = 15, b=10
// a=15-10 = 5, b=10
// a = 5, b = 10 - 5 = 5, and have reached a = b = 5, means gcd(25,10) = 5
//TC = O(a+b)




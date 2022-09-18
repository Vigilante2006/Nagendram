let num1=2,num2=4,num3=8;

let sumofnums = (n1,n2) => n1+n2;
let printvalues = (n)=>console.log(n);

console.log(sumofnums(num1,num2));
console.log(sumofnums(num2,num3));

let sum1 = sumofnums(num1,num2);
let newsum = sumofnums(sum1,num3);

printvalues(num2);
printvalues(num1);
printvalues(num3);
printvalues(newsum);
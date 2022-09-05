// let num1 = parseFloat(prompt("Enter num1: "));
// let num2 = parseFloat(prompt("Enter num2: "));
// const operation = prompt("select the operator in prompt(+,-,/,*):");

// let result;

// if(operation == "+"){
//     result = num1+num2;

// }
// if(operation == "-"){
//     result = num1-num2;

// }
// if(operation ==" /"){
//     result=num/num2;

// }
// if(operation == "*"){
//     result=num1*num2;
// }
// console.log(`${num1} ${operation} ${num2} = ${result}`)


function calculator(a,b){
    let result1 = a+b;
    console.log(result1);
    let result2 = a-b;
    console.log(result2);
    let result3 = a/b;
    console.log(result3);
    let result4 = a*b;
    console.log(a*b);
}
calculator(30,10);


function votingAge(age){
    if(age>18){
        return true;
    }
    return false;
}
console.log(votingAge(27));
console.log(votingAge(17));

function printincranddecor(a,b,c){
    if(a>b && b>c){
        console.log("Decreaseing order");
    }else if(a<b && b<c){
        console.log("Increasing order");
    }else{
        console.log("neither increasing nor decreasing");
    }
}
printincranddecor(12,45,87);
printincranddecor(12,56,43);
printincranddecor(98,65,32);

function findlargestnum(a,b,c){
    if(a>b && a>c){
        console.log("A is largest");
    }else if(b>a && b>c){
        console.log("B is largets");
    }else{
        console.log("C is largest");
    }
}
findlargestnum(89,54,23);
findlargestnum(54,76,23);
findlargestnum(43,65,90);



//function expression

//function in js:
    //1.functions play a very imp role in js.
    //there are no of ways to work with functions.
    //functions can be passed as parameters,
    //function is also a datatype in js.

var x=10;

//create a function => function Expression.
const add = function(a,b){//add a function to the variable
    console.log(a+b);
}

// callng a function

add(10,20);
console.log(typeof add);

const sub = function(a,b){
   console.log(a-b);
}
sub(30,10);
console.log(typeof sub);



function printMessage(funAdd,message){
    funAdd(10,20);
  console.log(message);
}
printMessage(add,"Hello There");


const multiple = function(a,b){
    console.log(a*b);
}
multiple(7,8);
console.log(typeof multiple);

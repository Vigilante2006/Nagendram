//1.what is function ?
//->A block of codes to perform a task.
//why do we use it ?
    //->reusability, ->Modularity
//How do we use it ?
var x=10;
var y=20;
var result=x+y;
console.log(result);

//how to create a function ?
//circular brackets are used take inputs into function.
//curly brackets are used to define body if a function.

function addTwoNumbers(x,y){
    var result = x+y;
    // return is used to return output to caller.
    
    //
    return result;
}
// How to call/execute/invoke a function
// circular brackets are used to pass parameters.

var output = addTwoNumbers(10,20)
console.log(output);
output = addTwoNumbers(20,40);
console.log(output);
console.log("result is",addTwoNumbers(0,-140));

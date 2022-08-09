//Hoisting => calling a function before it is created.


// add(12,34);
// const add = function (a,b){
//     console.log(a+b);
// }


sub(32,12);
const sub = function(a,b){
    console.log(a-b);
}

console.log(sub);

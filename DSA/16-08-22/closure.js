// understanding clouser

//1.learning sbout scope.
  //1.1 when x will start 


const add = function(){
    var x = 10;
    console.log(x);
    return function add2(){
        var y=20;
        console.log(x+y);
    }
}
const result = add();
result();
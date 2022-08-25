

var i=0;
function add(num1,num2){
    let result = num1+num2;
    i=i+1;
    add(result,num1)
}
add(1,2)
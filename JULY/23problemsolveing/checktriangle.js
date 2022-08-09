
function checkIfTriangleOrNot(a,b,c){
    if(b+c<=a || a+c<=b || a+b<=c){
       
        console.log("Not a Triangle");
    }else{

        console.log("Triangle")
    }
}
checkIfTriangleOrNot(7,10,5);





// function checkIfTriangle(a, b, c)
// {
// if ( b + c <= a || a + c <= b || a + b <= c )
// return false;
// else
// return true;
// }
// let a = 7, b = 10, c = 5;
// if (checkIfTriangle(a, b, c))
// console.log("Triangle");
// else
// console.log("Non Triangle");


function checkIfTriangleOrNot(a,b,c){
    if(b+c<=a || a+c<=b || a+b<=c){
       
        console.log("Not a Triangle");
    }else{

        console.log("Triangle")
    }
}
checkIfTriangleOrNot(7,10,5);





function checkIfTriangleOrNot(a,b,c){
    if(b+c<=a || c+a<=b || a+b<=c){
        console.log("Not a triangle")
    }else{
        console.log("Triangle");
    }
}
checkIfTriangleOrNot(3,4,8);
checkIfTriangleOrNot(3,4,5);
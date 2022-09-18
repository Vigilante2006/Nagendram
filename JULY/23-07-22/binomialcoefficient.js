function binomialCoefficient(num,k){
    if(k>num)
    return 0;
    if(k==0 || k==num)
    return 1;

    return binomialCoefficient(num-1,k-1)
    +binomialCoefficient(num-1,k)
}
var num=4,k=2;
console.log("value of c("+num +","+k+") is "+binomialCoefficient(num,k));



let cars1 =['honda','hyundai'];
let cars2 = cars1;
cars1.push('mahindra');
console.log( cars1 +"---" +cars2);



var msgs =new Array("Hello","Hey","Morning!");
for(var i=0;i<msgs.length;i++){
    console.log(msgs[i]+"|");
}


var values = [10,20,30,40];
var result = values.reduceRight(function(x,y,z,w){
    return (x+y+z);
})
console.log("Result: ",result);

var cars = ["honda","Hyundai","Mahindra"];
var result = cars.unshift("toyota","tata");
console.log("[",result,"]",cars);



// const arr = [10,20,30];
// let result = 0;
// arr.forEach(myFunction);
// console.log("Result: ",result);
// function myFunction(value,index,array);{
//       result+=values;
// }

const curr = new Date();
console.log(curr);
10+8+6+4
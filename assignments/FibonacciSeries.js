//Fibonacco series...
//0,1,1,2,3,5,8,13,21,...etc
/*function fibonacciSeries(number) {
    let fibo = [0, 1]
    for (var i = 2; i <= number; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
console.log(fibonacciSeries(100));*/

/*function fibonacciSeries(num){
    let fibo=[0,1]
    for(var i=2;i<=num;i++){
        fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo;

}
console.log(fibonacciSeries(100));*/
function fib(num){

    var a =0;
    var b=1;
    var c;
    console.log(a);
    console.log(b);
for(let i=2;i<num;i++){

    c=a+b;
    if(c<num){

    console.log(c);
    a=b;
    b=c;
    }
}
}
fib(70);

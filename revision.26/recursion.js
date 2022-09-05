

function fact(n){
    if(n===1){
        return 1;
    }
    return n*fact(n-1);
}
console.log(fact(100));
//5*fact(4);
//4*fact(3);
//3*fact(2);
//2*fact(1);

//n! = n*(n-1)!

function fibb(n){
    if(n===0 || n==1){
        return n;
    }
    return fibb(n-1)+fibb(n-2);

}
console.log(fibb(6));

//N=6,5+4
//N=5,4+3,
//N=4,3+2,
//N=3,2+1,
//N=2,1+1,
//N=1,1+0

//incr and decre
function incN(n){
    if(n===1){
        console.log(1);
        return;
    }
    console.log(n);
    incN(n-1);
    console.log(n);
}
incN(5);



function fibb(n){
    if(n==0 || n==1){
        return;
    }
    return fibb(n-1)+fibb(n-2);
}
console.log(fibb(5));
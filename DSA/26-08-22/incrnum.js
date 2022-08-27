

function printincrenum(n){
    //base 
    if(n==0){
        return;
    }
    //moveing towards end
    printincrenum(n-1);
    //print n
    console.log(n);
}
printincrenum(5);
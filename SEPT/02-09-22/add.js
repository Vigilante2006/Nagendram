

function add(a,b){
    const result = a+b;
    return result;
}
console.log(add(3,5));


//function on time coplexicity

function ceckTC(n){
    for(i=0;i<n;i++){
        console.log(i);//a*n
    }
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            console.log(i,j);//b*n^2
        }
    }
    console.log(result);//c*1
    //O(an+bn^2+c)
    //O(n^2)
}
ceckTC(5)


//an+bn*2+c1
//O(n^2)


// function printincrenum(n){
//     //base 
//     if(n==0){
//         return;
//     }
//     //moveing towards end
//     printincrenum(n-1);
//     //print n
//     console.log(n);
// }
// printincrenum(5);


function num(n){
    let result=[];
    let arr=0;
    for(let i=0;i<n;i++){
        if(i%2!==0){
        result +=arr[i];
        result.split(arr[i]);
        }
    }
    console.log(result);
}
num([1,5,79,76,4,68,9,3,11]);
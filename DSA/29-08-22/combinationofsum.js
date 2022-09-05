


function combinationOfSum(arr){

    let sum=0;
    let result = [];
    if(arr.length==1){
        return;
    }
    for(let i=0;i<arr.length-1;i++){
        
        sum=arr[i]+arr[i+1];
        result.push(sum);

    }
    console.log(result);

}
const arr=[1,2,1];
combinationOfSum(arr);
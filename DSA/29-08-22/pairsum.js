

function elementsPairSum(arr,i=0,t,newA=[]){
    if(arr.length == i){
        return newA;
    }
    if(arr[i]+arr[i+1]==t){
        newA.push(aar[i]+arr[i+1]);
    }
    return elementsPairSum(arr,t,i+1,newA);
}
var arr = [10,20,30,40,50,60];
var t=30;
var result = elementsPairSum(arr,t);
console.log(result);
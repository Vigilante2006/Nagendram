
let sum = 0;
let arr = [3,5,4,1,8,6,9];
arr.sort((a,b)=>a-b)
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
let mean = sum/arr.length;
console.log(mean);



let median;

let arr1 = [3,5,4,1,8,6,9];
arr1.sort((a,b)=>a-b);
console.log(arr);

if(arr.length%2==0){
    let a=arr[parseInt(arr.length/2)-1];
    let b = arr[parseInt(arr.length/2)+1];
    median = (a+b)/2 ;
}else{
    median = arr[parseInt(arr.length/2)]
}
console.log(median);



let median1;
let temp = [];
let arr2 = [[2,3,1],[6,9,4],[11,20,10]];
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[0].length;j++){
        temp.push(arr[i][j])
    }
}
temp.sort((a,b)=>a-b);
console.log(temp)
if(temp.length%2==0){
    let a=temp[parseInt(temp.length/2)-1];
    let b = temp[parseInt(temp.length/2)+1];
    median1 = (a+b)/2;
}else{
    median1 = arr[parseInt(temp.length/2)]
}
console.log(median1);

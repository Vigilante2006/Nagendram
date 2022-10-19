
let arr = [1,2,3,4];
arr.reverse();
console.log(arr);

function reverse(arr){
    let result = [];
    for(let i=arr.length-1;i>=0;i--){
        result += arr[i];
    }
    console.log(result);
}
reverse([1,2,3,4])


let x = 5462
 console.log(Number(x.toString().split("").reverse().join("")))
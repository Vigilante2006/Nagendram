

function findMissingNumInSeries(arr){
    let start = parseInt(arr[0]);
    let end = parseInt(arr[arr.length-1]);

let currentSum = 0;
for(let i=start ; i<=end; i++){
    currentSum += i; 
}
//console.log(currentSum);
const actualSum = arr.reduce((acc,val)=>{
 return (parseInt(acc)+parseInt(val))
},0)

 console.log(`currentSum ${currentSum} - actualSum ${actualSum} = missing Sum is ${currentSum - actualSum}`);
}
const nums = [1,2,3,5]
const nums1 = [1,2,3,4,5,7];
const nums2 = [2,3,4,5,6,8];
findMissingNumInSeries(nums);
findMissingNumInSeries(nums1);
findMissingNumInSeries(nums2);



let missnum = (arr)=>{
    let start= parseInt(arr[0]);
    let end = parseInt(arr[arr.length-1]);
    let currSum = 0;
    for(let i=start ; i<=end; i++){
        currSum += i;
    }
    console.log(currSum);
    let actSum = 0;
    for(let j=0;j<=arr.length-1;j++){
        actSum += arr[j];
    }
    console.log(actSum);
    console.log(`${currSum - actSum}`);
}
const n= [1,2,3,4,6];
missnum(n);





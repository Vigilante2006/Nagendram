// let mean = (nums)=>{
//     let sum =0;
//     for(let i=0;i<nums.length;i++){
//         sum+=nums[i];
//     }
//     //console.log(sum);
//     //console.log(nums.length);
//     console.log("mean useing first approach: "+sum/nums.length);
//     //console.log("mean useing first approach: "+sum/num.length);
// }
// //approach 2 - using rest parameters.
// const mean1 = (...nums)=>nums.reduce((acc,val)=>acc+val,0)/nums.length;
// const num1 = [3,5,4,4,1,1,2,3];
// const num2 = [1,2,3];
// mean(num1);
// mean(num2);

// console.log("mean useing second approach: "+mean1(...num1));
// console.log("mean useing second approach: "+mean1(...num2));

// let median = (nums)=>{
//     let median = 0;
//     let n= nums.length;
//     nums.sort((a,b)=>a-b);
//     console.log(nums);
//     if(n%2==0){
//         let a=nums[(n/2)-1];
//         let b=nums[(n/2)+1];
//         median = [a+b]/2;
//     }
//     else{
//          median=nums[n/2]
//     }
//     console.log(median);
// }
// const num = [3, 5, 4, 4, 1, 1, 2, 3];
// median(num);

// let mode = (nums)=>{
    
//     let hm = new Map();
//     for(let i=0;i<nums.length;i++){
//         if(hm.has(nums[i])==false){
//             hm.set(nums[i],1);
//         }else{
//             let count = hm.get(nums[i]);
//             count++;
//             hm.set(nums[i],count);
//         }
//     }
//     let modeArray = [];
//     for(let [key,value] of hm){
//         if(value>1){
//             modeArray.push(key);
//         }
//     }
//     return modeArray;
// }
// const nums=[3,5,4,4,1,1,2,3]
// const num3=[1,2,3,4,5,6,5,4,3,2]
// console.log("mode is " +mode(nums))
// console.log("mode is " +mode(num3));



const num1 = [3,5,4,4,1,1,2,3];
const num2 = [1,2,3];

let mean = (num)=>{
    let sum = 0;
    for(let i=0;i<num.length;i++){
        sum += num[i];
    }
    console.log("mean useing first approach: " +sum/num.length);
}
let mean1 = (...nums)=>nums.reduce((acc,val)=>acc+val,0)/nums.length;
mean(num1);
mean(num2);
console.log("mean useing second approach: "+mean1(...num1));
console.log("mean useing second approach: "+mean1(...num2));

let median = (nums)=>{
    let n=nums.length;
    let median = 0;
    nums.sort((a,b)=>a-b);
    console.log(nums);

    if(n%2==0){
        let a = nums[(n/2)-1];
        let b = nums[(n/2)+1];
        median =parseInt((a+b)/2);
    }else{
        median = nums[parseInt(n/2)];
    }
    console.log("median is " +median);

}
median(num1);
median(num2);

let mode = (nums)=>{
    let hm = new Map();
    for(let i=0;i<nums.length;i++){
        if(hm.has(nums[i])==false){
            hm.set(nums[i],1);
        }else{
            let count = hm.get(nums[i]);
            count++;
            hm.set(nums[i],count);
        }
    }
    let modeArray=[];
    for(let [key,value] of hm){
        if(value>1){
            modeArray.push(key);
        }
    }
    return modeArray;
}
const num3 = [3,2,5,4,6,7,7,6,5];
mode(num1);
mode(num2);
console.log("mode is "+mode(num3));

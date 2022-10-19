

let findMinSubArrayLength1 = (nums,sum)=>{
    let left = 0;
    let right = 0;
    let totalsum = 0;
    let result = 0;

    while(right<nums.length){
        totalsum += nums[right];
        //console.log(totalsum);
        while(totalsum>=sum){
            let len = right-left+1
            //console.log(len)
            if(result === 0 || len<result)
                result = len;
                totalsum -= nums[left];
                //console.log(totalsum)
                left++
           }
         right++
    }
    return result;
}
console.log(findMinSubArrayLength1([2,1,6,5,4],9))
// let arr1 = [2,3,1,2,4,3]
// console.log(findMinSubArrayLength1(arr1,7));
// console.log(findMinSubArrayLength1([2,1,6,5,4],9))
// console.log(findMinSubArrayLength1([3,1,7,11,2,9,8,21,6,2,33,19],52))
//console.log(findMinSubArrayLength1([1,4,16,22,5,7,8,9,10],39))




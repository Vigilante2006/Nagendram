
let squareOfSortedArray = (nums)=>{
    let left = 0,
    right = nums.length-1,
    result = [],
    position = nums.length-1;
    while(left<=right){
        if(nums[left]**2>nums[right]**2){
            result[position]=nums[left]**2;
            position--
            left++
        }else{
            result[position]=nums[right]**2;
            position--
            right--
        }
    }
    return result;

}
let nums= [-4,-1,0,3,10];
console.log(squareOfSortedArray(nums));

let searchInsert = (nums,target)=>{
    let left =0;
    let right = nums.length;
    while(left<right){
        let mid = left+Math.floor((right-left)/2)
        if(nums[mid]==target){
            return mid;
        }else if(nums[mid]<target){
            left += 1; 
        }else{
            right -= 1;
        }
    }
    return left;
}
console.log(searchInsert([1,3,5,6],5));
console.log(searchInsert([1,3,4,5,6],2));


var searchIndex = (nums,target)=>{
    let left = 0,
     right = nums.length-1;
    while(left<=right){
        let mid = left+Math.floor((right-left)/2)
        if(nums[mid]==target){
            return mid;
        }else if(mid<target){
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
    return -1;
}
let target =9;
let nums = [-1,0,3,5,9,12];
//let targ = 8;
//let num = [-2,-1,0,3,6,8,10,18,23];
console.log(searchIndex(nums,target));
//console.log(searchIndex(num,targ));
//  l   m      r
//[-1,0,3,5,9,12]
//m = 0+(5-0)/2 = 2
//        l    r
//[-1,0,3,5,9,12]
//m = 3+(5-3)/2 = 3+1 = 4
//O(logn)



let binary =(nums,target)=>{

    let left = 0,
    right = nums.length-1;
    while(left<=right){
        let mid = left+Math.floor((right+left)/2);
        let potmid = nums[mid];
        if(potmid==target){
            return potmid;
        }
        if(potmid>target){
            right = potmid-1
        }else{
            left = potmid+1;
        }
    }
    return -1
}
let target1 = 9;
let num1 = [-1,0,3,5,9,12];
console.log(binary(num1,target1));
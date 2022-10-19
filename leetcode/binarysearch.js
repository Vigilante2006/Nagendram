

var searchIndex = (nums,target)=>{
    let left = 0,
     right = nums.length-1;
    while(left<=right){
        let mid = left+Math.floor((right-left)/2)
        if(nums[mid]==target){
            return mid;                            // t
        }else if(nums[mid]<target){               //1,2,3,4,5,6,7
            left = mid+1;                       //  m
        }else{
            right = mid-1;
        }
    }
    return ;
}
let target =2;
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



var search = function(nums, target) {
    let left =0,
        right = nums.length-1;
     let count =0;
     while(left<right){
         let mid = parseInt((left+right)/2)
         if(nums[mid]==target){
             return mid;
         }else if(nums[mid]<target){
             left = mid;
         }else{
             right = mid;
         }
         if(right-left==1){
             count++;
             if(count>1){break;}
         }
     }
     return -1;
 };



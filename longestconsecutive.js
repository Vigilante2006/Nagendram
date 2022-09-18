// var longestConsecutive = function(arr) {
//     let n = arr.length;
//     let S = new Set();
//     let ans = 0;
//      for (let i = 0; i < n; i++)
//         S.add(arr[i]);
//         //[100,4,200,1,2,3]
//         //console.log(!S.has(99));
//         for (let i = 0; i < n; i++)
//     {
    
//         if (!S.has(arr[i] - 1))
//         {
         
//             let j = arr[i];
//             while (S.has(j))
//                 j++;
 
//             ans = Math.max(ans, j - arr[i]);
//         }
//     }
//     return ans;
// }
// //console.log(longestConsecutive([100,4,200,1,2,3]));
// console.log(longestConsecutive([100,4,200,1,2,3,20,,5,30,6]));






let longestConsecutiveSequence = (nums) => {
    if(nums.length==1){
        console.log(1); 
        return;
    }     
  nums.sort((a, b) => a - b);
  console.log(nums);
  let subarr = [];
  let newarr = [];
  let commonArr = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] == 1 || nums[i] === nums[i + 1]) {
      if (nums[i] === nums[i + 1]) {
        commonArr.push(nums[i])
        if(i==nums.length-2){
            commonArr.push(nums[i+1]);
        }
        continue;
}
      subarr.push(nums[i]);
      if (nums[i + 2] - nums[i + 1] != 1 && (nums[i + 2] !== nums[i + 1] || i+2 ==nums.length-1)) {
        subarr.push(nums[i + 1]);
        console.log(subarr);
        if (subarr.length >= newarr.length) {
          newarr = subarr;
          subarr = [];
        }
      }
    }
  }
  console.log(newarr);
if(commonArr.length==nums.length && nums.length!=0){
    console.log(1);
    return;
}
  console.log(newarr.length);
};
longestConsecutiveSequence([12,43,54,65,11,10,23,13,9])
longestConsecutiveSequence([100,4,200,1,2,3]);
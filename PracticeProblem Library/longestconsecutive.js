let n=parseInt(readline());
let nums=readline().split(" ").map(Number);
//let nums=[];
longestConsecutiveSequence=(nums)=>{
	if(nums.length==1){
		console.log(1);
		return;
	}
	nums.sort((a,b)=>a-b);
	console.log(nums);
	let subarr=[];
	let newarr=[];
	let commonArr=[];
	for(i=0;i<nums.length;i++){
		if(nums[i+1]-nums[i]==1||nums[i]==nums[i+1]){
			if(nums[i]==nums[i+1]){
				commonArr.push(nums[i])
				if(i==nums.length-2){
					commonArr.push(nums[i+1]);
				}
				continue;
			}
            subarr.push(nums[i]);
			if(nums[i+2]-nums[i+1]!=1 && (nums[i+2]!==nums[i+1] || i+2==nums.length-1)){
				subarr.push(nums[i+1]);
				console.log(subarr);
				if(subarr.length>=newarr.length)
				{
					newarr=subarr;
					subarr=[];
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
longestConsecutiveSequence([1,4,3,2,5,10,7,9,8,3]);
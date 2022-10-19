
//1.
function bubbleSort(nums){
    for(let i=0;i<nums.length;i++){

        let isSwapped = false;
        for(let j=0;j<nums.length-1-i;j++){
            if(nums[j]<nums[j+1]){
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1]=temp;
                isSwapped = true;
            }
        }
        if(!isSwapped) break;
        
    }
    return nums;
}
let k=10;
let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
    41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,
    61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,
    81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
    console.log(bubbleSort(nums,k));


    //2.
let bubble = (a,n)=>{
    for(let i=0;i<=n;i++){
        console.log(a[i]);
    }
}
let sort = (a,n)=>{
        for(let i=n;i>=0;i--){
            for(let j=i;j>=0;j--){
                if(a[j]>a[j-1]){
                    let temp = a[j];
                    a[j] = a[j-1];
                    a[j-1] = temp;
                }
                bubble(a,n)
            }
        }
    }
    let n=6
    let a = [];
    a.push(12);
    a.push(21);
    a.push(11);
    a.push(54);
    a.push(9);
    a.push(35);
    sort(a,n);

    //worstcase TimeComplexity = O(n^2);
    //bestcase TimeComplexity = O(n); 
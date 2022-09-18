

let maxIndexDiff = (arr)=>{

    let maxIndexDiff = Number.MIN_VALUE;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]<=arr[j]){
                maxIndexDiff = Math.max(maxIndexDiff,j-i);
            }
        }
    }
    console.log(`Maximum Index difference is : ${maxIndexDiff}`)
}
maxIndexDiff([4,5,7,2]);
maxIndexDiff([14,13,8,9,3,2,10,11,12,3]);


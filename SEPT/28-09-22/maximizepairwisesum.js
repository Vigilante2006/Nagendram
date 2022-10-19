

let maximizePairwizeSum = (array)=>{
    array.sort((a,b)=>(a-b))
    let ans = 0;
    for(let i=0;i<array.length;i=i+2){
        ans += array[i];
    }
    console.log(ans);
}
maximizePairwizeSum([2,1,3,4]);
maximizePairwizeSum([8,6,4,5]);



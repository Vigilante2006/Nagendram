


let index2darr = (arr,t)=>{
    let result = [];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(t==arr[i][j]){
                result.push(i,j)
            }
        }
    }
    console.log(result);

}
const arr = [
    ["portal","greeks","gfg"],
    ["gfg","computer","portal"],
    ["geeks","for","geeks"]
]
index2darr(arr,"geeks")
index2darr(arr,"computer")
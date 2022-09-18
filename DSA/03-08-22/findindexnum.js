

function findIndexNumber(arr,t){
    let output = [];
    for(let i=0;i<arr.length;i++){
        if(t===arr[i]){
            output.push(i);
        }
        console.log(output);
    }
}
const arr = ["gfg","geeks","portel","computerscience","gfg","gfg","geeks"]
findIndexNumber(arr,"geeks");
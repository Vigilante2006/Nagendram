

function findIndexNumberIn2Darr(arr,t){
    let output = [];
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(t===arr[i][j]){
                output.push(i,j);
            }
        }
    }
    console.log(output);
}
const arr = [
    ["gfg","gfg","geeks"],
    ["data","geeks","gfg"],
    ["conputerscience","portal","data"]
];
findIndexNumberIn2Darr(arr,"portal");
findIndexNumberIn2Darr(arr,"data");
findIndexNumberIn2Darr(arr,"gfg");
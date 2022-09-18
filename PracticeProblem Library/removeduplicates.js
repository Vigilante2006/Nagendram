


function removeDuplicates(arr){
    let obj ={};
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]+=1;
        }else{
            obj[arr[i]] = 1;
        }
    }
    console.log(obj);
    return Object.keys(obj);
}
const arr =[1,1,2,2,2,3,3,3,3,4,4,5,5,6,6,7,7,8]
console.log(removeDuplicates(arr));




function removeduplicates(arr){
    let obj = {};
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]+=1
        }
        else{
            obj[arr[i]] = 1;
        }
    }
    //console.log(obj);
    return Object.values(obj);
    //console.log(Object.Objectkeys(obj));

}
console.log(removeDuplicates([1,1,2,2,2,4,5,5,5]));
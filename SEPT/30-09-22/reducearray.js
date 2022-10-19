
function convertArrayToReducedForm(array){
    let n=array.length
    let copiedArray = [...array];
    copiedArray.sort((a,b)=>a-b);

    // create object (Hash table);
    let obj = {}
    //let map = new Map()
    //Map.set(copiedArray)

    for(let i=0;i<n;i++){
        obj[copiedArray[i]] = i;
        //map.get(copiedArray,i);
    }
    for(i=0;i<n;i++){
        array[i] = obj[array[i]];
    }
    console.log(array);
}
let arr = [1,2,5,10,3,4,]
let arr1 = [4,10,9,3,5,10]
convertArrayToReducedForm(arr);
convertArrayToReducedForm(arr1);

//tc= O(n)
//sc = O(n)



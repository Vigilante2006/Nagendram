
// const arr = [1, 2, 3, 4, 4, 5, 4, 6, 1, 2, 3, 6];
// //key ->numbers
// //pair ->count of those numbers
// let hm = new Map();

// for(let i=0;i<arr.length;i++){

//     if(hm.has(arr[i]) == false){//value has not there in the hasmap.
//         hm.set(arr[i], 1);//insert the value in the hasmap.
//     }
//     else{//update the count
//             let count = hm.get(arr[i]);
//             count++;
//             hm.set(arr[i], count);
//     }    
// }
// console.table(hm);

// for(let [key, value] of hm){
//     if(value==1){
//         console.log(`${key} is occuring ${value} time`);
//     }
// }





function findUniqueNum(arr){
    let hm = new Map();
    for(let i=0;i<arr.length;i++){
        if(hm.has(arr[i])==false){
            hm.set(arr[i],1);
        }else{
            let count = hm.get(arr[i]);
            count++;
            hm.set(arr[i], count);
        }
    }
    console.table(hm);

    for(let [key,value] of hm){
        if(value==1){
            console.log(`${key} is occuring ${value} times`);
        }
    }
}
findUniqueNum([1,1,2,4,3,5,3,5,3]);

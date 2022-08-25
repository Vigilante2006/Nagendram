

function findpairOfele(array,num){
    var obj = {};
    for(let i=0;i<array.length;i++){
        let firstnum = array[i];
        let secondnum = num-firstnum;
        if(!obj[firstnum.toString()]){
            //makeing entry for 1st num
            obj[firstnum.toString()] = i.toString;
        }
        //check if second number exists in obj.
        if(obj[secondnum.toString()] && obj[secondnum.toString()]!=i.toString()){
         console.log([firstnum,secondnum])
         return;
        }
       
    }
    return;
}
 findpairOfele([20,0,40,10,45,30,5],40)



 let arr3 = [30, 20, 41, 110, 10, 40];
pairSum = (arr, n) => {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    count++;
    let num = n - arr[i];
    if (arr.indexOf(num) !== undefined && i < arr.indexOf(num)) {
      console.log(i, arr.indexOf(num));
    }
  }
  console.log("ObjTime : ", count);
};

pairSum(arr3, 50);




let twoSum = (array, sum) => {
    let obj = {},
      results = []

        for (let i = 0; i < array.length; i++){
            if (obj[array[i]]){
                results.push([obj[array[i]], array[i]])
            }else{
                obj[sum - array[i]] = array[i];
            }
          }
          return results;
    }
console.log(twoSum([10,20,10,40,50,60,70,30],50));

 

//window technique
function find3NumberSum(array,sum){
    //[5,3,2,6]
    //2,1,-4,6
    //2,3,4,5,6
    array.sort((a,b)=>a-b)
    array = [...new Set(array)]
    console.log(array)
    for(let i=0;i<array.length;i++){
        let left = i+1;
        let right = array.length-1

        while(left<right){
            if(array[i]+array[left]+array[right]==sum){
                console.log(array[i] , array[left], array[right])
                left++
            }
            else if(array[i]+array[left]+array[right]>sum){
                right--;
            }
            else{
                left++
            }
        }
    }
}
const arr = [5,3,2,6,9,1,4,0,8,9,4,5,6]
find3NumberSum(arr,10)
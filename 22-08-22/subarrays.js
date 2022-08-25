

//print subarrays
//time complexcity O(n^3)

function subarrays(array){

    //pick starting poit
    for(let i=0;i<array;i++){
        //pick ending point
        for(let j=i;j<array;j++){
            //print subarray between starting and ending point.
            for(k=i;k<=j;k++){
                
                console.log(arr[k]+ " ")
            }
        }
    }
}

const arr = [1,2,3];
subarrays(arr.length);
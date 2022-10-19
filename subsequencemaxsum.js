
function subsequence(array){
    let n=array.length;
    var oddNumbers =0 ;
    var allsum = 0;
    smallestOddNumber = Math.max(...array);
    maxOddNegativeNumber = Math.min(...array)
    let isNegativePresent = false
    for(let i=0;i<n;i++){
        if(array[i]>0){
            if(array[i]%2!==0){
                oddNumbers +=1;
            }
            allsum +=array[i]
            if(array[i]%2!=0 && array[i]<smallestOddNumber){
                smallestOddNumber = array[i]
            }else{
                isNegativePresent = true;
                if(array[i]%2!=0 && array[i]>maxOddNegativeNumber){
                    maxOddNegativeNumber = array[i];
                }
            }
        }
        if(oddNumbers%2===0){
            console.log(allsum)
        }else{
            solution1 = allsum-smallestOddNumber
            if(isNegativePresent){
                solution2 = allsum+maxOddNegativeNumber
            }
            if(isNegativePresent){
                if(solution1>solution2){
                    console.log(solution1)
                }else{
                    console.log(solution2)
                }
            }else{
                console.log(solution1)
            }
        }

    }
}
subsequence([-1,-2,-3,3,4,5,6,7]);
subsequence([7,3,2,8,1]);
subsequence([3,1,2,4,5]);
//subsequence([1,2,-3,-4,0,5,6]);
//subsequence([-2,-8,-4,-7]);


function maxsequencesum(array){
    var max=0;
    let maxsofar=0;
    for(let i=0;i<array.length;i++)
    {
        max = max+array[i];
        if(max<array[i]){
            max = array[i]
        }
        else if(maxsofar<max){
            maxsofar = max
        }
        return maxsofar;
    }
}
console.log(maxsequencesum([3,2,4,5,1]));




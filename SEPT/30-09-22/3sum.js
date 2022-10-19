

function find3NumberSum(array,sum){
    let matrix = [];
    //brute force technique
    for(let i=0;i<array.length-2;i++){
        for(let j=i+1;j<array.length-1;j++){
            for(let k=j+1;k<array.length;k++){
                if(array[i]+array[j]+array[k]==sum){
                    matrix.push([array[i],array[j],array[k]])
                    //console.log([array[i],array[j],array[k]])
                }
            }
        }
    }
    //console.log(array)

    for(let i=0;i<matrix.length;i++){
        const array = matrix[i];//[5,3,2]
        for(let j=0;j<matrix.length;j++){
            if(i==j) continue;
            let target= [...matrix[j]];//[3,5,2]//both are eleminate
            let count = 0
            for(let k=0;k<array.length;k++){
                if(target.includes(array[k])){
                    target.splice(target.indexOf(array[k]),1);
                    count++
                }
            }
            if(count==3){
                matrix.splice(j,1);
                j--;
            }
        }
    }
    console.log(matrix);
}
const arr = [4,5,6,-4,-2,7,1,0,-6,-8,-7];
find3NumberSum(arr,0);


function sumOfEachcolumn(matrix){
     
    const result = [];
    for(let i=0;i<matrix[0].length;i++){
        let sum = 0;
        for(let j=0;j<matrix.length;j++){
            sum+=matrix[j][i];
        }
        result.push(sum);
    }
    console.log(result);

}
const matrix = [
    [3,4,5,12],
    [3,4,7,8],
    [2,3,4,21],
    [4,4,10,9]
];
sumOfEachcolumn(matrix);
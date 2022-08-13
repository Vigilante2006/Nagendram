


function diagonolMatrix(matrix){

    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix.length;j++){
            if(i!=j && matrix[i][j]!=0){
                return false;
            }
        }
    }
    return true;


}
const matrix = [
    [1,0,0,0],
    [0,2,0,0],
    [0,0,3,0],
    [0,0,0,4]
];
const matrix2 = [
    [1,0,3,0],
    [0,2,0,0],
    [0,0,3,0],
    [0,0,0,4]
];
console.log(diagonolMatrix(matrix2));
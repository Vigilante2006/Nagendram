

function sparseMatrix(matrix){

    let count = 0;
    //var totalelements;
    for(let i=0;i<matrix[0].length;i++){
        for(let j=0;j<matrix.length;j++){
           if(matrix[i][j]!=0){
            //totalelements.push_back(matrix[i][j]);
            count++;
            //return (count > parseInt((m*n)/2),10);

            
        return true;    
        }
            
        }
    }
    return false;
}
const matrix=[
    [1,0,15,0],
    [7,0,0,22],
    [0,0,0,0],
    [10,0,0,28]
];
console.log(sparseMatrix(matrix));
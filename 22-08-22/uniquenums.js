

function uniquenum(array){

    var outputarray = [];
   
    
    for(let i=0;i<array.length;i++){
        //1.get element.

        //2.check if this reoccurs.
        for(let j=0;j<array.length;j++){
            if(i!=j && array[i]==array[j]){
                    break;
            }
            if(j==array.length-1){
                outputarray.push(array[i]);
            }
        }
      
    }
    return outputarray;
}
    

const array = [5,5,56,3,6,7,6,7,];
console.log(uniquenum(array));



let a = ["1", "1", "2", "3", "3", "1"];
let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);
console.log(unique);


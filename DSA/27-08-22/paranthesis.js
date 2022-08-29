
const result = [];//array result
const n=1;//num of left and right parenthesis in every string
let str = "";//set of parentheses which makes an item in array

function printParanthesis(str,left,right){
    //end position .
    if(str.length==n*2){
        result.push(str)
        return;
    }
    //reaching towards end
    if(left!=n){
        printParanthesis(str+"(" ,left+1 ,right)
    }
    if(right<left){
        printParanthesis(str+")" ,left ,right+1)
    }

}
printParanthesis(str,0,0);
console.log(result);
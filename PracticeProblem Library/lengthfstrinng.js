

function findLengthOfString(str){
    if(str == ""){//base case
        return 0;
    }
    let res = findLengthOfString(str.substring(1));//resursive call
    return res+1;//self work
}
console.log(findLengthOfString("Programming"));


var str= ("relevel");
console.log(str.substring(1,6));


let stringlength = (str)=>{

    if(str==""){
        return 0;
    }
    let res = stringlength(str.substring(1));
    return res ;
    //console.log(res+1);
}
console.log(stringlength("relevel"));
console.log(stringlength("algorithm"));
console.log(stringlength("programming"));
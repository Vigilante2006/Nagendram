function findLargerNum(num1,num2){
    if(num1==num2){
        console.log(" Both are equal");
    }else if(num1>num2){
        console.log(num1+" is larger");
    }else if(num2>num1){
        console.log(num2+" is larger");
    }else{
        console.log("Both are not equal");
    }

}
findLargerNum(5,5);
findLargerNum(5,2);
findLargerNum(6,9);
findLargerNum(8,"abc");
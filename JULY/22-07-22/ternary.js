function isOddOrEven(num){


    //Modular operator % 
    //if(num%2==0){
        
       // return "Even";

    // }else{
      //  return "Odd";
    // }
    //using ternsry operator.
    //<ConditionalExpression> ? resultIfExpressionISTrue : resultIfExpressionIsTrue.

      return num%2==0 ? "Even" : "Odd"
}
console.log(isOddOrEven(10));
console.log(isOddOrEven(109));
console.log(isOddOrEven(1039));
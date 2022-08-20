// this is a pure function 
 //1. it doesnot depends on any external data.
 //2. it only depends on arguments passed
 //3. it does ot have any side effects.

 function pureAddFunction(a,b){
    return a+b;

 }
 console.log(pureAddFunction(10,20));


//impure function
    //it depends on external data.
    //its behaviur might be changed, as sideeffects.
   const numC=34;
 function impureAddfunction(a,b){
        return a+b+numC;
 }
 
 console.log(impureAddfunction(12,24));


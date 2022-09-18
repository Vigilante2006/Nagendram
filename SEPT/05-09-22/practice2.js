function foo(n){
    for(let i=2;i<Math.sqrt(n);++i){
        if(n%i===0){
           return false;
        }
    }
   return true;
}
foo(25);

//O(sqrt(n))
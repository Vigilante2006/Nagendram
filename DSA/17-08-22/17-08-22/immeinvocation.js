
//IIFE - Immediate Invocation Function Expression.

(()=>{
    console.log("Helloworld");
})();

((a,b) =>{
    console.log("Hello world",a+b);//we have rapped it in circular bracket.
})(4,5);
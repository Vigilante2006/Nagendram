


// function factorial(n){
//     //base condition 
//     if(n==1){
//         return 1;
//     }
//     return n*factorial(n-1);

// }
// //start of recursion
// console.log(factorial(5));




testcases =parseInt(readline())
for(let i=0;i<testcases;i++){
	n=parseInt(readline());
	array = readline().split(" ").map(Number);
	console.log(n, array);
}


// function sumAndAverage(n){
//     let sum=0;
//     let average;
//     for(let i=0;i<=n;i++){
//         sum+=i;
//         average = sum%n;
//     }
//     console.log(sum);
//     console.log(average);
// }
// sumAndAverage(4);


// function countOddNumber(arr){
   
//    let result = [];
//     arr.forEach(num =>{
//         if(num%2!==0) {
//             result.push(num);
//         }   
//     });
//     console.log(result);
// }
// countOddNumber([1,6,22,7,111,3,5,1]);
// countOddNumber([2,7,5,7,4,8,6,-5,-8]);
// countOddNumber([3,7,8,12,76,42,8,90,24]);
// //console.log(arr);



// let n = parseInt(readline());
//     	sumAndAverage(n);
 
// 	function sumAndAverage(n) {
//     var sum = 0;
//     for(let i = 1; i <= n; i++){
//         sum += i;
//     }
//     console.log(sum+" "+Math.floor(sum/n));
 
// }

// let testcase = parseInt(readline());
//  while(testcase>0){
//  let n = parseInt(readline());
//  let  arr =[];
//   arr = readline().split(" ").map(Number);
// console.log(countOddNumbers(arr, n));
// testcase--;
//  }
// function countOddNumbers(arr, n){
//  var count = 0;
//     for(let i = 0; i < n; i++){
//         if(arr[i] % 2 != 0){
//             count++;;
//         }
//     }
//     return count;
// }




// function range(length){
//     var a=5;
//     for(let i=0;i<length;i++){
//         console.log(a);
//     }
// }
// range(3);




//dowhile loop first executes the statements and after that
//checks for the condition
// var a=10;
// do{
//     a+=1;
//     console.log(a);
// }while(a<5);


// var a=0;
// var b=0;
// while(a<3){
//     a++;
//     b+=a;
//     console.log(b);
// }

// var size = 5;
// var a=5;
// var size=4;
// for(let j=size;j>=0;j++){
//     console.log(a);
//     a=a-2;
// }


// var a=0;
// for(a;a<5;a++){
//     console.log(a);
// }


// var num=212.13456
// console.log(num.toExponential(2));


// let a=true+true%5;
// console.log(a);

// var b=null;
// var c;
// console.log(b);
// console.log(c);


//var str = "helloworld"
//console.log(str);
// var str = 'helloworld';
// console.log(str);
// var str = `helloworld`;
// console.log(str);


// let a=10;
// a++;
// ++a;
// console.log(a++);
// //console.log(++a);

// let num = '20';
// console.log(+num);
// let str = 'abc';
// console.log(+str);

// let num1 = 10
// let str1 = 'avengers';
// let num4=0;
// console.log(!num1);
// console.log(!str1);
// console.log(!num4)

// let num1 = 20;
// let num2 = "10";
// let num3 = 'avengers'
// console.log(num1+num2);
// console.log(num2+num3);


// function print(n){
//     if(n==0) return;
//     console.log(n%2);
//     console.log(n/2)
// }
// print(2);
// print(1)


// function func(a,b){
//     if(b==0) return 0;
//     if(b==1) return a;
//     return a+func(a,b-1);
// }
// console.log(func(3,8));
// console.log(func(2,4));
// console.log(func(8,9));



// function f(n){
//     let ans=0;//c1
//     for(let i=0;i<=n;i++){//n
//         for(let j=0;j<=log(i);j++){//logn
//             ans+=1;//c2
//             console.log(ans);//c3
//         }
//     }

// }

// //c1+n+logn+c2+c3
// //nlogn



// function something(number){
//     if(number<=0){
//         return 1;
//     } else{
//         return number*something(number-1);//4*3*2*1
//     }
// }
// console.log(something(4));




// function my_recursive_function(n){
//     if(n==0){
//         return;
//     }
//     my_recursive_function(n-1);
//     console.log(n);
// }
// my_recursive_function(10);



// function evenOrOdd(num){
//     if(num%2==0){
//         console.log("Even");
//     }else{
//         console.log("Odd");
//     }
// }
// evenOrOdd(9);

// var arr=[140,160,320];
// //var arr = [20,10,30];


// var a = arr[0];
// var b = arr[1];
// var c = arr[2];
// if(a>b && a<c){
//     console.log(a);
// }else if(b>a && b<c){
//     console.log(b);
// }
// else{
//     console.log(c);
// }
 

var a = [];
a.unshift(1);
a.unshift(22);
a.shift();
a.unshift(3,[4,5]);
a.shift();
a.shift();
a.shift()
console.log(a);


function num(n){
    if(isNaN(n)){
        return "Not a number";
    }
    return "number";
}
console.log(num("1000F"))


// Which keyword is used to come out of a loop only for that particular iteration?
//ans:break
// con
// Fill in the blank. In a stack, the command to access an nth element from the top of the stack s will be _______________.
//ans:s[Top-n]
// The Direct Memory Access(DMA) mode can be subdivided into multiple modes for performing I/O tasks/operations. Which of the following is not a DMA mode?

// Consider the following table and answer the given question. Which of the following options represents the completion order of the three process under FCFS and Round Robin policies with CPU quantum of 2 time units



let e =10
function outer(){
    var e=2;
    return function inner(){
        console.log(e)
    }
}
outer()();
console.log(e);





function subsequenceRearrangement(arr, n)
{
	arr.sort((a,b)=>a-b)
	console.log(arr);
}
//Driver Code
var n = readline();
var temp = readline().trim();
var s = temp.split(" ");
for(i=0;i<n;i++)
{
    s[i]=Number(s[i]);
}
var num  = subsequenceRearrangement(s,n);
print(num);



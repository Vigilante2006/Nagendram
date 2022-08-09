/*let a=10;
console.log(typeof a)
let b="slice";
console.log(typeof b)
let c=true
console.log(typeof c)*/




/*var res = sayHello();
var sayHello = function(){
    console.log("hello");
}*/


/*var name="rick";
function printName(){
    var name="Morty";
    console.log(name);
}
printName();*/

/*for(i=0;i<10;i++){
    console.log(i);
}*/

/*let n=0;
while(n<3){
    n++;
    console.log(n);
    
}*/


/*var sum=0;
for(i=0,j=0;i<10 && j<10;i++,j=i+2){
    console.log(i);
    console.log(j);
    sum+=i;
}
console.log(sum);*/


/*let i=0;
while(i<6){
    if(i===3){
       break; 
    }
    i=i+1;
}*/


/*for(let i=0;i<10;i++){
    if(i===3){
        continue;
    }
    console.log(i);
}*/


// var i,j;
// for(i=1;i<2;i++){
//     for(j=1;j<2;j++){
//         if(i==j);{
//             continue;
//         }
//         console.log(i,j);
//     }
// }


/*function tempAndRaining(temp,isRaining){
 if((temp<=20 && temp>=28)&&isRaining==false) {
        console.log("yay! you can go out to play");
 }else if((temp<=18 && temp>=20)&& isRaining==false){
    console.log("stay inside the play school");
 }else{
    console.log("Go home and stay there");
 }
}

tempAndRaining(25);*/

/*function marks(){
let obtained_marks=46

let result_value = (obtained_marks>=40) ? 'pass' : 'fail' ;////ERROR

console.log('you ${result_value} the exam');
}
marks();*/

/*const checked_number = 5;
let x = 4;
switch(true){
    case(x>0):
    text="The number is Positive";
    break;
    case(x<0):
    text = "The number is Negative";
    break;
    case (x===0):
    text = "the Number is Zero";
    break;
    default:
        text = "No value found";
}
console.log(text);*/


/*let hcf_value;
const first_number=16;
const second_number=8;
for(let iterator=1;iterator<=first_number && iterator<=second_number;iterator++){
    if(first_number%iterator==0 && second_number%iterator==0){
        hcf_value=iterator;
    
    }
}
console.log("hcf of ${first_value} & ${second_value} is {hcf_value}");*/

// function printPalindrome(str){
//     let len = str.length;
//     for(i=0;i<len/2;i++){
//         if(str.charAt(i)!=str.charAt(len-i-1))
//         return false;

//     }
//     return true;
// }
// for(j=1;j<=50;j++){
//     if(printPalindrome(j.toString())){
//         console.log(j);
//     }
// }


// function fibonacciSeries(num){
//     var a=0;
//    var b=1;
//    var c;
//      console.log(a);
//      console.log(b);
//      for(i=2;i<num;i++){
//         c=a+b;
//         if(c<num){
//             console.log(c);
//             a=b;
//             b=c;
//         }
//      }

// }
// fibonacciSeries(10);

// function votingAge(age){
//     if(age>=18){
//         //console.log("you are a voter");
//         return true;
//     }else{
//         //console.log("not a voter");
//         return false;
//     }
// }
// console.log(votingAge(25));

// function checkLargeNUm(a,b,c){
//     if(a>b && a>c){
//         console.log(a+" is Greater");
//     }else if(b>a && b>c){
//         console.log(b+" is Greater");

//     }else{
//         console.log(c+" is Greater");
//     }
// } 

// checkLargeNUm(5,3,1);
// checkLargeNUm(4,9,7);
// checkLargeNUm(1,3,6);


// function gradingSystem(score){

//      if(score>= 95){
//         console.log("Grade A+");
//      }else if(score>=79 && score<=94){
//         console.log("Grade A")

//      }else if(score>=69 && score<=78){
//         console.log("Grade B");
//      }else if(score>=59 && score<=68){
//         console.log("Grade c")
//      }else if(score>=49 && score<=58){
//         console.log("Grade D")
//      }else {
//         console.log("Fail");
//      }

// }
// gradingSystem(65);
// gradingSystem(98);


// function incAndDec(x,y,z){
//     if(x<y && y<z){
//         console.log("Increaseing an order");
//     }else if(x>y && y>z){
//         console.log("Decreasing an order");
//     }else{
//         console.log("neither decreasing nor decreasing");
//     }
// }
// incAndDec(23,45,89);
// incAndDec(98,56,34);
// incAndDec(23,89,45);


//Math.ceil(0.75);
// function minLectures(M,N){

//     let ans=0;
//     if(N<Math.ceil(0.75*M))
//     ans = (Math.ceil(((0.75*M)-n)/0.25));
//     else
//     ans=0;
//     return ans;

// }
// let M=7,N=6;
// console.log(minLectures(M,N));


// function votingAge(n){
//     if(n>=18){
//         return true;
//     }
//     return false;
// }
// console.log(votingAge(20));

// function increasingAndDec(a,b,c){
//     if(a>b && b>c){
//         console.log("Increaseing Order");
//     }else if(a<b && b<c){
//         console.log("Decreasing Order");
//     }else{
//         console.log("Neither decreasing nor increasing");
//     }

// }
// increasingAndDec(13,45,87);
// increasingAndDec(98,65,32);
// increasingAndDec(98,23,56);


// function largeNum(a,b,c){
//     if(a>b && a>c){
//         console.log(a+" is largest");
//     }else if(b>a && b>c){
//         console.log(b+" is largest");
//     }else{
//         console.log(c+" is largest");
//     }
// }
// largeNum(25,15,20);
// largeNum(13,45,12);
// largeNum(45,67,89);


// function gradeingSystem(marks){
//     if(marks>=90){
//         console.log("A");
//     }else if(marks>=80 && marks<89){
//         console.log("B");
//     }else if(marks>=70 && marks<79){
//         console.log("C")
//     }else if(marks>=33 && marks<59){
//         console.log("D");
//     }else{
//         console.log("Fail");
//     }
    
// }
// gradeingSystem(99);
// gradeingSystem(85);
// gradeingSystem(72);
// gradeingSystem(56);
// gradeingSystem(22);

// function isRainingOrNot(temp,isRaining){
//     if(temp>=20 && temp<=25 && !isRaining){
//         console.log("Not raining children go to park");
//     }else if(temp>18 && temp<=20 && isRaining){
//         console.log("is raining children do't go to park");
//     }else{
//         console.log("go home stay there");
//     }
// }
// isRainingOrNot(20,false);
// isRainingOrNot(20,true);
// isRainingOrNot(26,false);

// function findNumPosOrNeg(num){
//     let x=5;
//     switch(true){
//         case (num>=x):{
//             console.log("Positice");
//             break;
//         }
//         case (num==0):{
//             console.log("Zero");
//             break;
//         }
//         case (num<x):{
//             console.log("Negative");
//             break;
//         }
//         default:{
//             console.log("Invalid");
//         }
//     }
// }
// findNumPosOrNeg(5);
// findNumPosOrNeg(0);
// findNumPosOrNeg(-3);
// findNumPosOrNeg("abc");


// function findNumPosOrNeg(num){
//     if(num>0){
//         console.log("Positive");
//     }else if(num==0){
//         console.log("Zero");
//     }else if(num<0){
//         console.log("Negative");
//     }else{
//         console.log("Invalid");
//     }
// }
// findNumPosOrNeg(6);
// findNumPosOrNeg(0);
// findNumPosOrNeg(-5);
// findNumPosOrNeg("abc");

// function sumTillN(n){
//     let sum = 0;
//     for(let i=1;i<=n;i++){
//         sum=sum+i;
//     }
//     console.log(sum);
// }
// sumTillN(10);
// sumTillN(5);
// sumTillN(20);

// function printStars(num){
//     for(i=0;i<=num;i++){
//         let stars ="";
//         for(let j=0;j<=i;j++){
//             stars+="*";
//         }
//         console.log(stars);
//     }
// }
// printStars(5);

// function printStars(stars){
//     for(var star="*";star.length<=stars;star+="*"){
//         console.log(" "+star);
//     }
// }
// printStars(5)

// function printStars(num){
   
//         for(i=1;i<=num;i++){
//             let stars=""
//             for(j=1;j<=num-i;j++){
//                 stars +=" ";
//             }
//             for( k=0;k<2*i-1;k++){
//                 stars +=k.toString();
//             }
            
//             console.log(stars);
//     }
   
// }
// printStars(5);


// function printTable(n){
//     for(let i=1;i<=10;i++){
//         console.log(i*n);
//     }
// }
// printTable(3);

// function isEvenOROdd(a,b,c){
 
//         // if(num%2==0){
//         //     console.log("even");
//         // }else{
//         //     console.log("Odd");
//         // }

//    // return (num%2==0) ? console.log("Even") : console.log("Odd") ;
//     return a>b && a>c ? console.log( a+" is Largest") : b>a && b>c ?  console.log(b+" is Largest") : console.log("c is Largest");
//     }
// isEvenOROdd(12,8,5);
// isEvenOROdd(14,45,15);
// isEvenOROdd(13,43,56);


// function reverseString(str){
//     let j="";
//     for(let i=str.length-1;i>=0;i--){
//         j+=str[i];
//     }
//     console.log(j);
// }
// reverseString("Hello");

// var arrayOfNumbers = [10,20,30,40,50,60];
// console.log(arrayOfNumbers[0]+arrayOfNumbers[4]);


// function sumOfInnerDigits(num){
//     let numStr=num.toString();
//     if(numStr.length<3){
//         console.log(-1)
//         return ;
//     }
//     let sum = 0;
//     for(let i=1;i<=numStr.length-2;i++){
//         sum =sum+Number(numStr[i]);
//     }
//     console.log(sum);
// }
// sumOfInnerDigits(212323);
// sumOfInnerDigits(90);

// function getPower(num,pow){
//     let i=1;
//     let result=1;
//     while(i<=pow){
//         result=result*num;
//         i++;
//     }
//     console.log(result);
// }
// getPower(10, 2);
// getPower(2,5);
// getPower(4,3);


// function fibonacciSeries(n){
//     if(n<0) return -1;
//     if(n==1) return 0;
//     if(n==2) return 1;

//     let i=2;
//     let series=[0,1];
//     while(i<=n-1){
//         let newNum=series[i-1]+series[i-2];
//         series.push(newNum);
//         i++;
//     }
//     console.log(series[i-1]);
// }
// fibonacciSeries(6);


// function isPrime(n){
//     for(let i=2;i<=n;i++){
//         if(n%i==0){
//             return false;

//         }
//         return true;
//     }
// }
// function find2PNum(a){
//     for(i=2;(i<a-2 || a<5);i++){
//         if(isPrime(i) && isPrime(a-i));
//         console.log(i, a-i);
//         break;

//     }
   
// }
// find2PNum(15);
// find2PNum(9);
// find2PNum(4);


// class Environmentalist{

//     constructor(name,location){
//         this.name=name;
//         this.location=location;

//     }
//     surveyArea(){
//         console.log("Area Sueveyed");
//         return 100;

//     }
//     showAlert(){
//         console.log("Plant more trees");

//     }
//     plantTrees(){
//         console.log("10 trees");
//     }
// }

// const obj = new Environmentalist("nag","Perali");
// console.log(typeof obj);
// console.log(obj instanceof Environmentalist);

// function canArrayBeSorted(sorted){
//     if(array.length==1){
//         return true;
//     }

//     let startIndex;
//     for(let i=0;i<=array.length;i++){
//         if(array[i]>array[i+1]){
//             startIndex=i;
//             break;
//         }
//     }
//     let endIndex;
//     for(i=startIndex;i<=array.length;i++){
//         if(array[i]<array[i+1]){
//             endIndex=i;
//             break;
//         }
//     }
//      let decreasingArray=[];
//     let j=0;
//     for(let i=startIndex;i<=endIndex;i++){
//         decreasingArray[j]=array[i];
//         j++;
//     }
//     for(let i=decreasingArray.length-1;i>=0;i--){
//         array[startIndex]=decreasingArray[i];
//         startIndex++;
//     }
//     console.log("Main array after reverse: ",array);
//     for(let i0;i<array.length-1;i++){
//         if(array[i]>array[i+1]){
//             console.log(false);
//             return;
//         }
//     }
//     console.log(true);

// }
// canArrayBeSorted([1,2,3,4,5,6]);



// function sum(n1,n2,n3,n4,n5,n6,n7,n8){
//     console.log(n1+n2+n3+n4+n5+n6+n7+n8);

// }
// sum(1,2,3,4,5,6,7,8);

//function sum(array){
    
//}
// var array = [1,12,3,4,5,66,7,7,6,,2,,3,5,5,6,6]
// console.log(array);

var array = ["Ravi","Nagendram","Rithwik","Aradhya","Anok"];
//var array3 = array[2];
console.log(array);
// array.pop();
// console.log(array);
// array.splice(2,1);
// console.log(array);
// array.shift();
// console.log(array);
// array.unshift(10,"Ravi");
// console.log(array);
array.slice(1,3);
console.log(array);

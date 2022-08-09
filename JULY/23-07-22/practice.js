
// function getSumOfNumbers(num){
//     let numStr = num.toString();
//     if(numStr.length<3){
//         console.log(-1);

//     }
//     let sum=0;
//     for(i=1;i<=numStr.length-2;i++){
//         sum+=Number(numStr[i]);

//     }
//     console.log(sum);
// }
// getSumOfNumbers(123456);
// getSumOfNumbers(12);
// getSumOfNumbers(1058);
// getSumOfNumbers(764938);


//  function powerOfNum(num,powa,powb){

//          let i=1;
//          let result= 1;
//          while(i<=powa){
//              result *=num;
//              i++; 
           
//          }
//          console.log(result);

//             // let j=1;
//             // let result2 = 1;
//             // while(j<=powb){
//             //     result2*=num;
//             //     j++;
              
//             // }
//             // console.log(result2);
//  }
//  powerOfNum(4,2);
//  powerOfNum(2,5);
//  powerOfNum(4,3);

// function getNthPositionOFFibSerie(n){

//     if(n<0) return -1;
//     if(n==1) return 0;
//     if(n==2) return 1;
       
//             let i=2;
//         let series = [0,1];
//         while(i<=n-1){
//             let newNum = series[i-1]+series[i-2];
//             series.push(newNum);
//             i++;
//         }
//         console.log(series[i-1]);

// } 
// getNthPositionOFFibSerie(5);
// getNthPositionOFFibSerie(24);





//  getNthPositionOfFibSeries(5);
//  getNthPositionOfFibSeries(24); 


// function sumOfInnerDigits(num){

//     numStr = num.toString();

//     if(numStr.length<3){
//         console.log(-1);
//         return;
//     }
//         let sum=0;
//         for(i=1;i<=numStr.length-2;i++){
//             sum+=Number(numStr[i]);
//         }
//         console.log(sum);
//         return;
// }

// sumOfInnerDigits(123456);
// sumOfInnerDigits(12);
// sumOfInnerDigits(4466);
// sumOfInnerDigits(1056);


// function isPrime(n){
//     for(let i=2;i<n;i++){
//         if(n%i==0){
//             return false;
//         }
       
//     }
//     return true;
// }
// function find2PNum(a){
//     for(i=2;i<a-2 || a<4;i++){
//         if(isPrime(i) && isPrime(a-i)){
//             console.log(a-i,i);
//             return;
//         }
//     }
//     console.log("Not a Prime numbers found");
// }
// find2PNum(10);
// find2PNum(15);
// find2PNum(200);
// find2PNum(9);
// find2PNum(11);

 


// let result = 0;
// for (let i = 0; i < 5; i++) {
//     result += i;
// }
// console.log(result);

// JAVASCRIPT BOOK AUTHERS
//di in.net core book by mark SVGFEConvolveMatrixElement.SVG_EDGEMODE_DUPLICATE
//john paapa.
//uncle Bob.
//john steek.
//MARTIN fOWLER.
//jon p smith.


function powerOfNum(num,pow){
    let i=1;
    let result = 1; 
    while(i<=pow){
        result = result*num;
        i++;
    }
    console.log(result);
}

powerOfNum(10,2);
powerOfNum(2,5);
powerOfNum(4,3);









let isEvenOrOdd = (num)=>{
    if(num%2==0){
        console.log(`${num} is Even number`);
    }else{
        console.log(`${num} is odd number`)
    }
}
isEvenOrOdd(6);
isEvenOrOdd(9);


let isEvenOROdd1 = (num)=>{
    if(!(num&1)){
        console.log(`${num} is even number`);
    }else{
        console.log(`${num} is odd number`)
    }
}
isEvenOROdd1(8);
isEvenOROdd1(11);
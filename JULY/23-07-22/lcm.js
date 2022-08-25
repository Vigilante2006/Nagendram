

let lcm = (n1,n2) =>{
    //find the smallest and biggest number from both the numbers.
    let lar = Math.max(n1,n2);
    let small = Math.min(n1,n2);

    //loop till you find a number by adding the largest num which is divisible by the smallest num

    let i = lar;
    while(i%small!== 0){
        i+=lar;
    }
    //return the number. 
    return i;
}
console.log(lcm(20,15));
console.log(lcm(17,19));
console.log(lcm(5,7));
//console.log(lcm(12, 18, 7, 15, 20, 24, 28));
//console.log(lcm(4,6,8));
//console.log(lcm(20,18,12));


//lcm of more numbers
const calculateLCM = (...arr)=>{
    const gcd2 = (a,b)=>{
        //greatest common divisor of two integers.
        if(!b) return b===0 ? a : NaN;
        return gcd2(b,a%b);
    };
    const lcm2 = (a,b)=>{
        //least common multiple of two integers.
        return a*b/gcd2(a,b);
    }
    //least common multiple of a list of integers.
    let n = 1;
    for(let i=0;i<arr.length;i++){
        n=lcm2(arr[i],n);
    }
    return n;
};
console.log(calculateLCM(10,20,15,25,30,35));
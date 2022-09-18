

let cuberoot1 = (num)=>Math.cbrt(num);
let printvalues = (n)=>console.log("the cibe root is : " +n);

//return the absolute difference of n-mid*mid*mid.
let diff = (num,mid) => {
    if(num>(mid*mid*mid)){
        return n-(mid*mid*mid);
    }
    else{
        return (mid*mid*mid)-n;
    }
}

let cuberoot2 = (num) =>{
    let start=0;
    let end = num;

    //set error or precision 
    let e = 0.0000001;
    while(true){
        let mid = (start+end)/2;
        let error = diff(num,mid);

        //if error if less than e then mid is the answer
        if(error<=e){
            return mid;
        }
        if((mid*mid*mid)>n){
            end =mid;
        }else{
            start = end;
        }
    }
}
let cubert1 = cuberoot1(3);
let cubert2 = cuberoot1(8);
let cubert3 = cuberoot1(1000);
console.log("Useing approach 1")
printvalues(cubert1);
printvalues(cubert2);
printvalues(cubert3);
console.log("Useing approach 2");
let cubert4 = cuberoot1(3);
let cubert5 = cuberoot1(8);
let cubert6 = cuberoot1(1000);
printvalues(cubert4);
printvalues(cubert5);
printvalues(cubert6);

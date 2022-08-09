

let innerCounter=1;
let innerCounter2=2;

for(let i=1;i<5;i++){
    console.log("Outer for loop: "+i);
    for(let j=0;j<=1;j++){
        console.log("Inner for loop:"+innerCounter++);
        for(let j=0; j<=5; j++){
            console.log("Inner2 for loop: "+innerCounter2++);
        }
    }
}


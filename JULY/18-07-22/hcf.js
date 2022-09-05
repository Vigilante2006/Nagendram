function hcf(a,b){
    let result = 0;
    for(let i=0;i<=a && i<=b;i++){
        if(a%i==0 && b%i==0){
            result = i;
        }
    }
    console.log("hcf is " +result);
}
hcf(16,8);
hcf(25,15);
hcf(81,54);



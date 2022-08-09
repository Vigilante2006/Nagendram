function deliveryBoy(a,b,c){
    let count = 0;
    for(var i=c;i<=b;i++){
        if(i==b && count!=a){
            i=0;

        }
        count++;
        if(count==a){
            break;
        }
    
    }
    console.log(i);
}
deliveryBoy(2,5,1);
deliveryBoy(8,5,2);
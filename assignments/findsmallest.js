function findSmallestNum(a,b,c){
        if(a<b && a<c){
            console.log(a+" is SMallest");
        }else if(b<a && b<c){
            console.log(b+" is Smallest");
        }else{
            console.log(c+" is Smallest");
        }

}
findSmallestNum(12,44,2);

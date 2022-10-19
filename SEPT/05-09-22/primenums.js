function sieveOfEratosthenes(primes){
    var isPrime = Array(MAX_Size).fill(true);
    var p,i;
    for(p=2;p*p<MAX_Size;p++){
        if(isPrime[p]==true){
            for(i=p*p;i<MAX_Size;i+=p){
                isPrime[i]=false;
            }
        }
    }
    for(p=2;p<MAX_Size;p++){
        if(isPrime[p]){
            primes.push(p);
        }
    }
}
    var n=10;
    var primes = [];
    var MAX_Size = 1000005;
    sieveOfEratosthenes(primes);
    console.log(n+"the prime is "+primes[n-1]+ "<br>");

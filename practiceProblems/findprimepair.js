let sieve = (n,isPrime) =>{
    //initialise all entries of bpplean array as true.
    isPrime[0] = isPrime[1] = false;
    for(let i=2 ; i<n ; i++)
    {
        isPrime[i] = true;
    }
    for(let p=2;p*p<=n;p++)
    {
        if(isPrime[p]==true)
        {
            //update all multiples of p
            for(let i=p*p;i<n;i++)
            {
                isPrime[i]=false; 
            }
        }
    }
    return false;
}
let findPrimepair = (n)=>{
    //generate all prime using sieve algo
    let isPrime = new Array(n+1);
    for(let i=0 ; i<n ; i++){
        isPrime[i] =false;
    }
    sieve(n, isPrime);
    //traversing all numbers to find first pair
    for(let i=0; i<n ;i++)
    {
        if(isPrime[i] && isPrime[n-i])
        {
            console.log(i+" "+(n-i))
            return;
        }
    }
}
findPrimepair(5);
findPrimepair(9);
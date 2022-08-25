function fibonacciSeries(n){

    
    if(n<1) return -1;
    if(n==0) return 0;
    if(n==2) return 1;


    let i=2;
    let series=[0,1];
    while(i<=n-1){
        let newNum = series[i-1]+series[i-2];
        series.push(newNum);
        i++;
    }
    console.log(series[i-1]);
    //     var a=0;
    
    //     var b=1;
    //     var c
    //     console.log(a);
    //     console.log(b)
    // for(i=0;i<num;i++){
    //     c=a+b;
    //     if(c<num);
    //     a=b;
    //     b=c
    //     console.log(c);
    // }
    }    
    
fibonacciSeries(5);
fibonacciSeries(24);
//fibonacciSeries
//fibonacciSeries



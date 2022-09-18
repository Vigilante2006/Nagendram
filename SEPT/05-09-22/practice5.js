

function foo(n){
    let p=0;//c1
    let q=0;//c2
    for(let i=0;i<n;i++){//n
        p=0;//c3*n
        for(let j=n;j>1;j=j/2){//logn
            p++;//c4*logn
            for(let k=1;k<p;k*=2){//logn
                q++;//c5*logn-1
            }
        }
    }
}


//c1+c2+c3n*c4logn*c5logn-1
//n*logn*logp
//nloglogn
//O(nloglogn)


function foo(n){
    let ans = 0;//c1
    for(let i=0;i<n;i++){//n
        for(let j=i;j>i;j--){//n
            ans+=1;//c2*n*n
        }
    }
    console.log(ans);//c3
}

//c1+c2(n*n)+c3
//O(n^2)
 

 function assign(a,n){
    a.sort();
    let ans = [];
    let p = 0; q = n-1;
    for(let i=0;i<n;i++){
        if((i+1)%2==0){
            ans[i] = a[q--];
        }else{
            ans[i] = a[p++];
        }
    }
    for(let i=0;i<n;i++)
    console.log(ans[i]+" ")
 }
 let A = [1,2,5,3,7,8,9];
 let n=A.length;
 assign(A,n);
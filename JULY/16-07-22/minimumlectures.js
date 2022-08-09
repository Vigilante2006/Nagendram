function minLectures(m,n){
    let ans = 0;
 if(n<Math.ceil(0.75 * m))
 ans = Math.ceil(((0.75 * m) - n)/0.25);
 else
 ans= 0;
 return ans;
}
let M=7,N=6;
console.log(minLectures(M,N));
    
 


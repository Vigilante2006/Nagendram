

function xpowy(x,y){
    let ans = 1;
    for(let i=0;i<y;i++){
       ans *= x;
    }
    return ans;
}
console.log(xpowy(10,4));
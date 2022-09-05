
const largenum = (x,y,z)=>{
    let maxvalue;
if(x>y){
    maxvalue=x;
    //console.log(`${x} is greater than the value of ${y}`)
}else{
    console.log(`${y} is greater than the value of ${x}`);
}
return maxvalue;

}
const x=22,y=9,z=5;
let maxvalue = largenum(x,y,z);
console.log(`${maxvalue} is gteater than the value of ${x} and ${y} and ${z}`)


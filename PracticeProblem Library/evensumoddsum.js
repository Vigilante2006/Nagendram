
let evenSumOddSum = (num)=>{
    let EvenSum = 0;
    let OddSum = 0;
    let str=num.toString();
    for(let i=0;i<str.length;i++){
        if((i+1)%2==0){
            EvenSum += parseInt(str.charAt(i));
        }else{
            OddSum += parseInt(str.charAt(i));
        }
    }
    console.log(`EvenSum:${EvenSum}`);
    console.log(`OddSum:${OddSum}`);
}
evenSumOddSum(54873);
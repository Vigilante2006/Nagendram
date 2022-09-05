


let steps =0;
function makes1(num){
    if(num==1){
        console.log(steps);
        return;
    }
    steps++;
    //console.log(steps);
    num=num-1;
    if(num%2==0){
        num=num/2;
    }
    if(num%3==0){
        num = num/3
    }
    makes1(num);

}
makes1(10);
 steps = 0;
makes1(20);
//makes1(48);
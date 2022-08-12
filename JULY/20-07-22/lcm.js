function findlcm(num1,num2){

    for(let i=1;i<num1*num2;i++){
        if(i%num1==0 && i%num2==0){
            break;
            return i;
        }
    }
    console.log("LCM is: "+i);
}
findlcm(8,16);
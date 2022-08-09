
function iterateFrom1To100(){
    for(let i = 0;i <= 100;i++){
        if(i%3==0 && i%5==0){
            console.log("MiddBuzz");
        }else if(i%3==0){
            console.log("Relevel");
        }else if(i%5==0){
           console.log("Buzz");

        }else{
            console.log(i);
        }
    }
}

iterateFrom1To100();

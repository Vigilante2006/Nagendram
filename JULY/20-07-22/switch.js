/*function checkPoNeOrZero(x){
    
    switch(true){
        case(x>0):
        text="positive";
        break;
        case(x==0):
        text="Zero";
        break;
        case(x<0):
        text="Negative";
        break;
        default:
        text="No value";

        }
        console.log(text);

    }

    checkPoNeOrZero(4);
    checkPoNeOrZero(0);
    checkPoNeOrZero(-2);*/

    function identifyNumber(num){
        if(num>0){
            console.log("Positive");

        }else if(num==0){
            console.log("Zero");
        }else if(num<0){
            console.log("Negative");
        }else{
            console.log("Invalid");
        }
    }
    identifyNumber(34);
    identifyNumber(0);
    identifyNumber(-21);
    identifyNumber();


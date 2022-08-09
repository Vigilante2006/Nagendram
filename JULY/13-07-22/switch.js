// switch => to help decision makingbased on matching value


/*function printResult(marks){
    if(marks<35){
        console.log("you have failed");

    }else if(marks>=35 && marks<50){
        console.log("you are pass")
    }
    else if(marks>=50 && marks<60){
        console.log("second class");
    }else{
        console.log("distinction");
    }
}

printResult(20);
printResult(90);
printResult(70);
printResult(40);
printResult(60);
printResult(30);*/

function printResult(grade){
    //A+
    //A
    //B
    //c- fail
    switch(grade){
        case "A+":{
            console.log("Distinctiion");
            break;
        }
        case "A":{
            console.log("First Class");
            break;
        }
        case "B":{
            console.log("pass");
            break;
        }
        case "C":{
            console.log("fail");
            break;
        }
        default : {
            console.log("Invalid value");
        }
    }
    console.log("Out Of Switch");
}

//printResult("A+");
//printResult("A");
printResult("B");
//printResult("C");
printResult("D");



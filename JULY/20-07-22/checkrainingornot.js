/*function isRainingOrNOt(temp,isRaining){

    if(temp>=20 && temp<=25 && !isRaining){

        console.log("Children can go play");

    }else if(temp>=18 && temp<=20 && isRaining){

        console.log("stay inside the school")
    }else{
        console.log("Go home and stay there")
    }
    }
    isRainingOrNOt(22 ,true);
    isRainingOrNOt(19, true);
    isRainingOrNOt(28, false);*/

/*function isRainingOrNot(temp){
    if(temp>=20 && temp<=25){
        console.log("it is not Raining, go outside and play ");
    }else if(temp>=18 && temp<=20){
        console.log("it is Raining stay at school");
    }else {
        console.log("Go home and stay there");
    }

}
isRainingOrNot(23);
isRainingOrNot(19);
isRainingOrNot(27);*/


// function isRaining(temp,isRaining){

//     if(temp>=20 && temp<=25 && !isRaining){
//             console.log("Is not Raining ")
//     }else if(temp>=18 && temp<=20){

//         console.log("Is Raining");
//     }
// }
// isRaining(23);


function isRaining(temp,isRaining){
    if(temp>=21 && temp<=25 && !isRaining){
        console.log("Is not raining");
    }else if(temp>=18 && temp<=20 && isRaining){
        console.log("is raining")
        
    }else {
        console.log("Go home and stay there");
    }

}
isRaining(24,false);
isRaining(19,true);
isRaining(28, false);

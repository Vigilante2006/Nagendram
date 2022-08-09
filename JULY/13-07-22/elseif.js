function checkTime(time){
    //22-4 ->night
    //5-12 ->morning
    //13-16 ->afternoon
    //17-21 ->evening
    if(time<4 && time>=22){
        console.log("this is night");

    }else if(time>=5 && time<12){

        console.log("morning");
    }else if(time>=13 && time<16){
        console.log("afternoon");
    }else if(time>=17 && time<21){
        console.log("evening");

    }else {
        console.log("Invalid");
    }
}

checkTime(11);
checkTime(20);
checkTime(28);
checkTime(14);




//to display current day and time.

const today = new Date();
const day = today.getDay();
const daylist = ["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"];
console.log(`Today is : ${daylist[day]}.`);
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour>=12) ? "PM" : "AM" ; 
hour = (hour>=12) ? hour-12 : hour;
if(hour===0 && prepand ===" PM "){
    if(minute===0 && second===0){
        hour = 12;
        prepand = "Noon";
    }
}
if(hour===0 && prepand === " AM "){
    if(minute===0 && second===0){
        hour=12;
        prepand = "Mdnight";
    }
}
console.log(`Current time : ${hour}${prepand} : ${minute} : ${second}`);
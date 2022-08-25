

// let avengers = {
//     realName:"avengers",
//     city:"mumbai",
//     heroname:"Jackson"
// };
// let realName = avengers.realName;
// let city = avengers.city;
// let heroname = avengers.heroname;
// console.log(realName);
// console.log(city);
// console.log(heroname);



// let newAvengers = {
//     realName : "avengers",
//     city : "california",
//     heroname :"michale"
// };

// let realName,city,heroname;
// ({realName:fname,city:vuru,heroname:barname} =newAvengers);

// console.log(fname);
// console.log(vuru);
// console.log(barname);

// let {realName,city,heroname} = {realName:"avengers",city:"washington",heroname:"john doe"};
// console.log(realName);
//  console.log(city);
// console.log(heroname);

let newAvengers = {
    realName : "avengers",
    nickname :"john",
    city : {
        country:"california",
        state:"mumbai"
    },
    heroname :"michale"
};
let {realName,nickname,...restOfDetails} = newAvengers;
console.log(realName);
console.log(restOfDetails);

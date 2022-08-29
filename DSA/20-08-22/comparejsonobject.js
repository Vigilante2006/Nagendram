

function isequal(bike,bike1){
    const keys1 = Object.keys(bike);
    const keys2 = Object.keys(bike1);

    return keys1.length == keys2.length && keys1.every((key)=>bike[key]==bike1[key]);
}

var bike = {
    "model":"royal enfield",
    "price":"120000"
};
var bike1 = {
    "model":"pelsor",
    "price":"90000"
}
//console.log(bike,bike1);
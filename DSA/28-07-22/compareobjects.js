

let obj1 = {
    name:"john",
    age:23,
    degree:"CS"
};
let obj2 = {
    age:"23",
    degree:"CS"
};
console.log(obj1,obj2);
function isEqual(obj1,obj2){
    for(key in obj2){
// const keys1 = Object.keys(obj1);
// const keys2 = Object.keys(obj2);

    if(obj1[key]!==obj2[key]);{
    return false;
    }
    }
    return true;
}

console.log(isEqual(obj1,obj2));

var input=['h','e','l','l','o'];
const output=input.join('');
console.log(output);

var a= [1,2,4,5,6,7];
console.log(a.splice(0,4));


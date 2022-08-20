// function passByReference(array,value){
//     array.push(value);
// }
// const arr = [2,3,4];
// passByReference(arr,5);
// console.log(arr);
// console.log(typeof arr);

// function checkObject(obj){
//     obj.age = 25;

// }
// const obj = {name:"x",age:20};
// let obj2={};
// //assigns a new copy with memory address to target.
// obj2 = Object.assign(obj2,obj);
// obj2.age = 25;
// checkObject(obj);
// console.log(obj2);

//object => objects in javascript are of reference type.
// nums,strings,bools,are of value type.



function checkObject(obj){
    obj.age = 18;
}
const obj = {name:"X",age:20};
let obj2 = {};
obj2 = Object.assign(obj2,obj);
obj2.age = 25;
console.log(obj2);
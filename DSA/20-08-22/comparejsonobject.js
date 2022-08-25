
function isEqual(obj1,obj2){
    //1. getting all the keys of both objects.
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    //const checkIfEqualValue = function(key){
        //return obj1[key]==obj2[key]
    //}
    return keys1.length == keys2.length && keys1.every((key)=>obj1[key]==obj2[key]);

}

function isEqualValue(obj1,obj2){
    //getting all keys of bothobjects.
    const values1 = Object.values(obj1);
    const values2 = Object.values(obj2);
    console.log(values1);
    const checkIfEqulaValue = function(v,i){
        return v==values2[i];
    }
    return values1.length == values2.length && values1.every((v,i)=> v==values2[i]);

}
var student = {
    "fname":"Nagendram",
    "lname":"Makena"
};
var student_copy = {
    "fname":"Nagendram",
    "lname":"Mankena"
};

console.log(isEqualValue(student,student_copy));



// var student2 = {
//     "fname":"Rahul",
//     "lname":"Shankar"
// }

// console.log(isEqual(student1, student1_copy));


function isEqual(obj1,obj2){
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
   
    const isEqual2 = (v,i)=>v==values2[i];
     return keys1.length==keys2.length && keys1.every((key)=>obj1[key]==obj2[key]);
    
}
function isEqual2(obj1,obj2){
    const values1 = Object.values(obj1);
    const values2 = Object.values(obj2);
    console.log(values1);
    const checkifequalvalues = function(v,i){
        return v=values2[i];
    }
    return values1.length==values2.length && values1.filetr((v,i)=>v==values2[i]);
}


var children = {
    "fname":"Rithwik",
    lname:"kumar"
}
var children_copy = {
    fname:"Rithwik",
    lname:"kumar"
}
console.log(isEqual(children,children_copy))

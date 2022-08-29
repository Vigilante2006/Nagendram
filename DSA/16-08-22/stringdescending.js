

const arr = ["a","d","t","v","c","z"];
arr.sort((a,b)=>b.localeCompare(a));
console.log(arr);

const arr1 = [4,6,7,2,9,1];
arr1.sort((a,b)=>b-a);
console.log(arr1);



//clouser
function counter(){
    let count = 0;
    return function(value){
        count +=value;
        console.log(count);
    }
}
const counterCall = counter();
counterCall(1);
counterCall(2);
counterCall(3);


//settime function
// for(var i=0;i<4;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000);
// }

// for(let i=0;i<4;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000);
// }


const obj= {
    javascript:"hard",
    java:"easy",
    python:"medium"
}
const newobj = obj;
newobj.javascript = "easy";
obj.javascript = "veryeasy",
console.log(newobj.javascript);
console.log(obj);



const array = ["a,","b","c","z","h"];
const newArray = array.find((val)=>val=="c");
console.log(newArray);




//Array Functions
// const studentIDs = [2,4,7,8,9,32,45,76,];
                    [4,8,14,16,18,64,90,152]

  //createing a newarray as result of operation on every element in original array                 

                //console.log(studentIDs.map((num)=>num*2));
                //console.log(studentIDs.map((num)=>num.length[32]));

                //console.log(studentIDs.map((num)=>num*num));//squar
                //console.log(studentIDs.map((n)=>n/2).splice(1,4));
                //console.log(studentIDs.map((obj)=>obj+10));

// const students =[
//      ["Ravi","Nagendram","aradhya","Rithwik","slice"],
//      ["Kumar","Anok","lucky","aradhya"]
//     ];
// //              [4,9,7,7,5]
//               console.log(students.map((name)=>name.length));
//               console.log(students.map((obj)=>obj.indexOf("aradhya")));

//filter function

// const nums = [11,34,122,56,3,79,47];

 //const isEven =(num)=>num%2==0;
// // output[34,122,56]
//console.log(nums.filter(isEven));
//console.log(nums.filter((num)=>num*2));

// const students = ["Ravi","Nagendram","Rithwik","aradhya","slice"];

// console.log(students.filter(name=>name.length<=5));

 const students =[

     {"name":"Nagendram", age:28},
     {"name":"Ravi", age:32},
     {"name":"Lucky", age:25},
     {"name":"Rithwik", age:22},
     {"name":"Aradhya", age:10},
     {"name":"Slice", age:12},
     {"name":"Anok",age:17}


 ]
 console.log(students.filter((obj)=>obj.age>18));
// nums = [2,4,7,9];

// expected output:22
// console.log(nums.reduce((preNum ,currNum)=>preNum+currNum));

// console.log(nums.reduce((preNum,currNum)=>((preNum+currNum)/3)));
// console.log(nums.reduce((preNum ,currNum)=>preNum+currNum+5));


// const mutiplyby2 = function (num){
//     return num*2;
// }


// function mutiplyby(array){
//     const result=[];
//     for(let i=0;i<array.length;i++){
//         result.push(array[i]*2);
//     }
//     console.log(result);
// }

// //Map function.
//     //transforms array into a new array as a result of some operation.
 //var a=[1,2,4,5,6,7];
 //console.log(a.splice(0,4));
// //a.splice(0,4);

 //console.log(a);



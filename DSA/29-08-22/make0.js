

let steps=0;
function makeIt0(n){
    //base condition.
    if(n==0){
        console.log(steps);
        return;
    }
    steps++;
    //1.choose largest digit from number.
    //2. substract it from main number.
    //3.call it again with result from step2.

    //43 => "43" => ['4','3']
    let arr = n.toString().split('').map(i=>Number(i));
    //spread operator converts array of numbers in to individuals.
    let max = Math.max(...arr);
    makeIt0(n-max);
}

//1.Starting point
makeIt0(27);//5
//makeIt0(48);//7

//REST Operator: converts individual values in to array.
//SPREAD => extracts individual values from array.

function sum(array){
    console.log(...array);
}
sum([1,2,3,4]);


const arr = ["4","3","5"];
console.log(arr.join('|'));
console.log(arr.concat(''));
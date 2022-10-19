//useing bubblesort
function employeeNamesalary(arr,k){
    let n = arr.length;
    for(let i=0;i<k;i++){
        let isSwapped = false;

        //last i elements are already swaped
        for(let j=i;j<n-1-i;j++){
            //check if the current element is greater than the next element.
            if(arr[j]['salary']>arr[j+1]['salary']){
                //if the condition is true then sap the elements
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        if(!isSwapped) break;
    }
    return arr;
}
let k=2,
arr = [{"Name":"Ravi","salary":100000},
       {"name":"Ramesh","salary":10000},
        {"name":"Rakesh","salary":500000},
        {"name":"Rithwik","salary":45000},
        {"name":"Riya","salary":650000}];
        console.log(employeeNamesalary(arr,k));
        console.log(arr[arr.length-k]["salary"]);


function employeeNamesalary1(arr,k){
    for(let i=0;i<k;i++){
        let isSwapped = false;
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]["salary"]>arr[j+1]["salary"]){
                let swap = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = swap;
                isSwapped = true;
            }
        }
        if(!isSwapped) break;
    }
    return arr;
}
let k1=3
let arr1 = [{"name": "rithwik","salary":600000},
            {"name":"Rivi","salary":500000},
            {"name":"Aradhya","salary":450000},
            {"name":"Nag","salary":100000}]
console.log(employeeNamesalary1(arr1,k1));
console.log(arr[arr1.length-k1]["salary"]);


    
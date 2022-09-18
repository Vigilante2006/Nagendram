
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
let k=2;
arr = [{"Name":"Ravi","salary":100000},
       {"name":"Ramesh","salary":10000},
        {"name":"Rakesh","salary":500000},
        {"name":"Rithwik","salary":45000},
        {"name":"Riya","salary":650000}];
        console.log(employeeNamesalary(arr,k));
        console.log(arr[arr.length-k]["salary"]);
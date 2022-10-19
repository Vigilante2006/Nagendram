

function arrayofCountriesInLexicalorder(str){
    let n=str.length;

    for(let i=0;i<n;i++){
        var isSwapped = false;
        for(j=0;j<n-i-1;j++){
            if(str[j].localeCompare(str[j+1]) != -1){
                var temp = str[j];
                str[j] = str[j+1];
                str[j+1] = temp;
                isSwapped = true;
            }
        }
        if(!isSwapped) break;
    }
    return str;
}

var str = ["India","Australia","China",
            "Russia","Brazil","Japan"]
console.log(arrayofCountriesInLexicalorder(str));


var a="india"
var b= "pakistan"
let c =a.localeCompare(b);
console.log(c);



function arrofcount(arr,k){
    for(let i=0;i<k;i++){
        let isSwaped = false
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j].localeCompare(arr[j+1]) !=-1){
                let swap = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = swap;
                isSwaped = true;
            }
        }
        if(!isSwaped) break;
    }
}
let arr = ["Ravi","rithwik","Slice","Nag","Aradhya"];
arrofcount(arr,5)
console.log(arr);


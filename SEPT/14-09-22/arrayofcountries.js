

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




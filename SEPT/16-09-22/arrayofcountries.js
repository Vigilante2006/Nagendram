

function countriesInLexicalOrder(arr){
    let n=arr.length;
    let min_ind;
    for(let i=0;i<n-1;i++){
        min_ind = i;
        for(let j=i+1;j<n;j++){
            if(arr[j].localeCompare(arr[min_ind])==-1){
                min_ind = j;
            }
        }
        if(min_ind!=i){
            let temp = arr[min_ind];
        arr[min_ind] = arr[i];
        arr[i] = temp;
        }
        
    }
    return arr;
}
let arr = ["India","Australia","Chaina","Russia","Brajil","Japan"];
console.log(countriesInLexicalOrder(arr));



function selection(arr){
    let n=arr.length;
    let minind;
    for(let i=0;i<n-1;i++){
        minind = i;
        for(j=i+1;j<n-1-i;j++){
            if(arr[j].localeCompare(arr[minind])==-1){
                minind = j;
            }
            
        }
        if(minind!=i){
            let swap= arr[minind];
            arr[minind] = arr[i];
            arr[i] = swap;

        }
    }
    return arr;
}

let arrr = ["India","Australia","Chaina","Afghan","pakistan"];
console.log(selection(arrr))
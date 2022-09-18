

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
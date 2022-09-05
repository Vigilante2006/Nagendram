

function searchElement(list,n,element){
    for(let i=0;i<n;i++){
        if(list[i]===element){
            return true;
        }
    }
    return false;
}


//Inplace Implamentation 
function merge(arr,start,mid,end){
    let start2 = mid+1;

    //if the direct message is already sorted
    if(arr[mid]<=arr[start2]){
        return;
    }
    //Two pinters to maintain start of both arras to merge
    while(start<=mid && start2<=end){
        //If element 1 is in right place
        if(arr[start]<=arr[start2]){
            start++;
        }
        else{
            let value = arr[ start2];
            let index = start2;

            //shift all the elements between element1
            //element2,right by 1.
            while(index != start){
                arr[index] = arr[index-1];
                index--;
            }
            arr[start] = value;
            start++;
            mid++;
            start2++;
        }
    } 
}
function mergesort(arr,l,r){
    if(l<r){
        let mid = parseInt((l+r)/2);

        //sort first and second halves
        mergesort(arr,l,mid);
        mergesort(arr,mid+1,r)
        merge(arr,l,mid,r);
    }
}
let arr = [4,7,9,3,5,6,2];
mergesort(arr,0,arr.length-1);
console.log(arr);
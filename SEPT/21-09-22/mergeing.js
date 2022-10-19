
function mergesort(arr){
    if(arr.length<2){
        return arr;
    }
    const middle= Math.floor(arr.length/2);
    const left = arr.slice(0,middle),
    right = arr.slice(middle,arr.length);

    return merge(mergesort(left),mergesort(right));
}
function merge(left,right){
    const result = [];
    while(left.length && right.length){
        if(left[0]<=right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift());
        }
    }
    while(left.length){
        result.push(left.shift());
    }
    while(right.length){
        result.push(right.shift());
    }
}
let arr = [4,5,3,2,8,10,7,9];
console.log(mergesort(arr));



//psedo code
// function mergeSort(arr,l,m,r){
//     var n1 = m-l+1
//     var n2 = r-m;
//     var L= new Array(n1);
//     var R = new Array(n2);

//     for(let i=0;i<n1;i++){
//         L[i]=arr[l+i];
//     }
//     for(let j=0;j<n2;j++){
//         R[j]=arr[m+1+j]
//     }
//     let i,j,k;
//     i= l,j=m+1 ,k=l;
//     while(i<=m && j<=r){
//         if(L[i]<=R[j]){
//             arr[k]= L[i];
//             i++;
//         }
//         else{
//             arr[k] = R[j];
//             j++;
//         }
//         k++;

//     }
//     while(i<n1){
//         arr[k] = L[i];
//         i++
//         k++
//     }
//     while(j<n2){
//         arr[k] =R[j];
//         j++;
//         k++;
//     }
// }




// let merge = (arr1,arr2)=>{
//     let m = arr1.length;
//     let n = arr2.length;
//     let c=[];
//     let i,j,k;
//     i=j=k=0;
//     while(i<m && j<n){
//         if(arr1[i]<arr2[j]){
//             c[k++] = arr1[i++];
//         }else{
//             c[k++] = arr2[j++];
//         }

//     }
//     for(i= 0;i<m;i++){
//         c[k++]=arr1[i]
//     }
//     for(j=0;j<n;j++){
//         c[k++]=arr1[j]
//     }
// }
// let arr1 = [2,10,18,20,23];
// let arr2 = [4,9,19,25];
// console.log(merge(arr1,arr2));
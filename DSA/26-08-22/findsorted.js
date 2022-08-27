function findsorted(array,i){
//base condition.
//1.check if end of array.
if(i==array.lrngth-1){
    return true;
}
//2.is next number less than current number
if(array[[i]]>array[i+1]){
    return false;
}
return findsorted(array,i+1);

}
console.log(findsorted([5,6,4,3,2],0));
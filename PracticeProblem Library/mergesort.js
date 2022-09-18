function mersgeSort(a){
    //base case
    if(a.length<2) return a;
    
    const middle = Math.floor(a.length/2);
    
    const left = a.slice(0,middle);//left half
    const rigth = a.slice(middle,a.length);//right half
    //recursive call
    const sorted_left = mersgeSort(left);
    const sorted_right = mersgeSort(rigth);
    //self work
    return merge(sorted_left,sorted_right);
}
function merge(a,b){
    const c= [];
    while(a.length && b.length){
        c.push(a[0]>b[0] ? b.shift() : a.shift());
    }
    while(a.length){
        c.push(a.shift());
    }
    while(b.length){
        c.push(b.shift());
    }
    return c;
}
console.log(mersgeSort([1,3,2,5,7,6,0,9]));



function mersgeSort1(a){
    if(a.length<2) return a;

    const middle = Math.floor(a.length/2);
    const left = a.slice(0,middle);
    const right= a.slice(middle,a.length);

    const sorted_left = mersgeSort1(left);
    const sorted_right = mersgeSort1(right);

    return merge(sorted_left,sorted_right);

}
function merge1(a,b){
    const c=[];
    while(a.length && b.length){
        c.push(a[0]>b[0] ? a.shift() : b.shift());
    }
    while(a.length){
        c.push(a.shift());
    }
    while(b.length){
        c.push(b.shift());
    }

    return c;
}
console.log(mersgeSort1([32,54,5,7,6,8,9,9,032,2,32,5]));
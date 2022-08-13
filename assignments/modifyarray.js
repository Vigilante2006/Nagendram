function modifyArray(a, n)
{
    // store current value of arr[0] and update it
    let prev = a[0];
    a[0] = a[0] * a[1];
 
    for (let i = 1; i < n - 1; i++)
    {
        // Storing current value 
        let curr = a[i];
 
        // Update current value with product of previos and next elements
        a[i] = prev * a[i+1];
 
        // Update previous value
        prev = curr;
    }
 
    // Updating last element of the array 
    a[n-1] = prev * a[n-1];
    return a;
}
 

let a = [2, 3, 4, 5, 6];
let n = a.length;
console.log(modifyArray(a, n));

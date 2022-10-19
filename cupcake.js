
// Question Name: Cupcakes
// Problem Statement
// Gru,
//  the criminal mastermind successfully performed the heist at the Deshute
//  Bank with the help of his N minions. So he decided to give a treat to
// the minions.
// For the treat, Gru bought M cupcakes. There are several types of cupcakes and the ith cupcake is of type Ai.
// The
//  minions don’t like variety, hence a minion accepts the treat if and
// only if he gets all the cupcakes of the same type. Also not giving the
// same number of cupcakes to every minion may cause the minions to fight 
// and Gru does not want that. Hence Gru will distribute the cupcakes among
//  the minions such that :
// Each minion gets the same number of cupcakes.
// All the cupcakes a minion gets must be of the same type. Different minions may get cupcakes of different(or the same) types.
// It
//  can be seen that this type of distribution may lead to the wastage of
// cupcakes(see the sample example). Hence Gru wants to distribute the
// cupcakes among the minions such that a minimum of cupcakes are wasted.
// Given N, M, and array A, tell the maximum number of cupcakes Gru can
// distribute among the minions.
// Input Format
// First line contains two space separated integers denoting N and M.
// Next line contains M space separated integers denoting array A.
// Output Format
// Print the maximum number of cupcakes Gru can distribute among the minions.
// Constraints
// 1<=N, M<=105
// 1<=Ai<=109
// Sample Input 1
// 2 6
// 1 2 1 2 1 3
// Sample Output 1
// 4
// Explanation of Sample 1
// Distribute the cupcakes as :
// 1st minions get 2 cupcakes of type 1
// 2nd minion gets 2 cupcakes of type 2
// This distribution leads to wastage of 2 cupcakes(one of type 1 and one of type 3).


// Kamal
//   6:10 PM
// We still don't get the solution of module test 1 on 25th September. Please provide it as soon as possible


// Parames
//   11:40 AM
// Dominant Element
// Question Name: Dominant Element
// Problem Statement
// Consider an array A consisting of N positive integers. The ith element of the array is called Dominant if :
// Let B be an array formed by removing Ai from array A. Like if A = [5 1 2 3 2] and i=3, B will be = [5 1 3 2].
// Now Ai is dominant if it is possible to rearrange elements of array B such that Ai+j > Bj holds for all 1<=j<=length of array B.
// Like if Ai = 2 and B = [3 1 2], Ai is dominant because if we rearrange elements of array B as [2 1 3], A1+1 > B1, A2+2 > B2 and A3+3 > B3 holds.
// Given array A, print the number of Dominant elements in array A.
// Input Format
// First line contains a single integer denoting N.
// Next line contains N space separated integers denoting the elements of array A.
// Output Format
// Print the number of Dominant elements in array A.
// Constraints
// 1<=N<=105
// 1<=Ai<=N
// Sample Input 1
// 5
// 5 1 4 3 2
// Sample Output 1
// 2
// Explanation of Sample 1
// The 1st and 3rd elements of the array are Dominant.
// For i=1, B = [1 4 3 2]. Here 5+1>1, 5+2>4, 5+3>3 and 5+4>2 holds.
// For i=3, B = [5 1 3 2]. Rearrange array B as [2 3 1 5]. Here 4+1>2, 4+1>3, 4+3>1, 4+4>5 holds.


function cupcake(arr,n){
    if(n>arr.length) return 0 ;
    let x=n;
    let freq = {};
    for(let i=0;i<arr.length;i++){
        if(freq[arr[i]]){
            freq[arr[i]]+=1
        }else{
            freq[arr[i]] = 1
        }
    }

//let a = Math.floor(arr.length/n);
let uniqueEleArr = Object.keys(freq).sort((c,b)=>freq[b]-freq[c])
// console.log(uniqueEleArr);

for(let a=Math.floor(arr.length/n);a>1;a--){
    while(x>0 && freq[uniqueEleArr[0]]>=0){
        console.log(a)
        freq[uniqueEleArr[0]]-=a;
        x--
        uniqueEleArr.sort((c,b)=>freq[b]-freq[c])
        //1:4 2:3 3:2
    }
    if(x==0){
        return a*n;
    }
}
return n;
}

console.log(cupcake([1,1,1,1,2,2,2,3,3],2))
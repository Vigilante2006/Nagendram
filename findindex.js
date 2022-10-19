// array = [4,5,6,7,0,1,2];
// target =1

// 1.find pivot(start+end)/2
// 2.check if(pivot===target)
//     2.1if yes return indexe
// 3.find which part is sorted
//     (arra[low]>array[mid-1])
// 4.find if target present in sorted part
// 5.then go to the other half
//     (start = mid+1)
// 6.go to step

// [4,5,6,7,0,1,2] start=0 end=6 pivot=3
// [- - - - 0,1,2] start=4 end=6 pivot=5
// [- - - - - - 2] start=6 end=6 pivot=6

// if target == array[pivot]
// return pivot

// array = [4,5,6,7,0,1,2];
// target =1
// target <=arr[pivot-1] && target >=arr[0]



let findIndex = (arr,target)=>{
    let start =0;
    let end = arr.length-1;
    found = false
    while(start<=end){
    let mid = Math.floor((start+end)/2)
        if(arr[mid]===target){
            console.log(mid)
            found = true;
            break;
        }
        else if(arr[mid-1]>=arr[start]){
            if(target<=arr[mid-1] && target>=arr[start]){
                end = mid-1
            }else{
                start = mid+1
            }
        }else{
            if(target<=arr[end] && target>=arr[mid]){
                start = mid+1 
            }else{
                end = mid-1
            }
        }
    }
    if(!found){
        console.log(-1);
    }

}
findIndex([4,5,6,7,8,0,1,2,3],2)


// Question Name: Minimum Product 1

// Problem Statement

// You are given an array A of length N. You need to partition the array into continuous blocks such that :

// the Bitwise XOR of elements of each block is greater than 0.
// The Product of the number of blocks and maximum of the sizes of all blocks is minimized.
// Like say the array was : [0,1,1,0,1].

// Then we can Partition it into three blocks as : (1,2), (2,3), (4,4) (these represent the start and end of each block) = [0,1], [1,0], [1].

// Here the Bitwise XOR of elements of each block is = 1(greater than 0),

// number of blocks = 3,

// maximum of the sizes of all blocks = maximum(2,2,1) = 2

// Input Format

// First-line contains a single integer N, denoting the length of the array.
// The next line contains N space-separated integers denoting the array elements.
// Output Format

// Print the minimum product of : the number of blocks and the maximum of the sizes of all blocks you can get. If there is no way to partition the array print -1.
// Constraints

// 1<=N<=1000
// Elements of the array are either 0 or 1.
// Sample Input 1

// 5

// 0 1 1 0 0

// Sample Output 1

// 6

// Explanation of Sample 1

// We can partition the array as : (1,2), (3,5)(these represent the start and end of each block) = [0,1], [1,0,0].

 








// Question Name: Peaceful children

// Problem Statement

// Consider N children standing in a line. The ith child in the line has a toy with goodness Gi.

// Child i and Child j are considered enemies of each other if Gi+Gj is a power of 2.

// Peaceful children are the ones who do not have any enemies.

// Given an array G of length N, print the number of peaceful children standing in the line.

// Input Format

// First line of input contains a single integer denoting N.
// Next line contains N space-separated integers denoting the goodness of the toys.
// Output Format

// Print the number of peaceful children standing in the line.
// Constraints

// 1<=N<=10^5
// 1<=Gi<=10^9
// Sample Input 1

// 5

// 5 1 2 4 3

// Sample Output 1

// 2

// Explanation of Sample 1

// Enemies of child 1 are: child 5

// Enemies of child 2 are: child 5

// Enemies of child 3 are: no enemies

// Enemies of child 4 are: no enemies

// Enemies of child 5 are: child 1, child 2

// Hence peaceful children are: child 3 and child 4

 



array = [4,5,6,7,8,0,1,2,3]
target = 3

start = 0
end = array.length - 1 
found = false
count = 0
while (start <= end ){
  count++
  console.log('Loop :', count)
  mid = Math.floor((start + end) / 2)
  if (array[mid] === target){
    console.log(mid)
    found = true
    break
  }
  else if (array[mid - 1] >= array[start]){
    if (target <= array[mid - 1] && target >= array[start]){
      end = mid - 1
    }else{
      start = mid + 1
    }
  }else{
    if (target <= array[end] && target >= array[mid]){
      start = mid + 1
    }else{
      end = mid - 1
    }
  }
}
if(!found){
  console.log(-1)
}


// Which of the following is a process of removing the currently running program from memory and bringing in another program into the memory?


// Which of the following disk-scheduling algorithms can be considered as the default algorithm, given their advantages and disadvantages are bearable compared to all other algorithms?


// The difference between the height of the left subtree to the height of the right subtree of every node is at most one for which of the following?


// Which of the following methods could be used to attach it with the object and returns attached method that could be invoked anytime in future?


// which of the following will be descibes the below of RARP?


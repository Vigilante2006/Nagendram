//1.
// let fun = function(a,b,c){
//     //console(a,b,c)//type error
//     console.log(a, b, c)
//     //a b c
//     //a1 b1 c1
// }
// var fun1 = fun.bind(this,"a")
// var fun2 = fun.bind(this,"a1","b1")
// fun1("b","c");
// fun2("c1");

//2.
const value = {number:10};
const multiply = (x={...value})=>{
    console.log((x.number*=2))
}
multiply();
multiply();
multiply(value);
multiply(value);
//ans:20 20 20 40

//3.
const hClass = {
    students:30,
    benches:20,
    boards:2
}
const {students:classStrength,benches:classBenches,
boards:classBlackBoard}=hClass;
console.log(classBlackBoard);
//ans:2



//4.
// function demo(val){
//     return(val ? "true" : "false");
// }
// bool ans = true;//error
// console.log(demo(ans));



//5.the following function computes the value of mCn correctly
//for all legal values m and n (m>=1,n>=0and m>n) and in the above
//function which of the following is the correct expression for E?
function func(m,n){
    if(E) return 1;
    else return(func(m-1,n)+func(m-1,n-1));
}
//ans:(C) (n = = 0) || (m = = n)

//6.
// int main(){
//     int i,j,count
//     count = 0
//     i=0
//     for(j=-4;j<=4;j++){
//         if((j>=0) && (i++))
//         count = count+j
//     }
//     count = count+i
//     print(count)
// }
//ans:B.the program will compile successfully and output 10 when executed.

//7.what will be the output of the following psedo-cede when parameters are passed by 
// reference and dynamic scoping is assumed?
//  a= 3
//  void n(x) {x = x*a;print(x);}
//  void m(y) {a=1;a=y-a;n(a);print(a);}
//  void main() {m(a);}
//ans:a:4,4


//8.what will be the output of the given pseudo code?
function  main(){
    var a =2,b=0
    var c = (b++)? 2:b==1 && a
    console.log(c)
}
main()
//ans:2


//9.which of the following statements are correct about destructors?

// a.it is an exclusive function that is called 
// to free the resources, acquired by the Object//ans

// b.it is an exclusive function that is called 
// to delete the class

// c.it is an exclusive function that is called
//  anytime to delete an Object
 
//  d.it is an exclusive function that is called
//   to delete all the objects of a class. 



// 10. in a sequential representation of a binary,tree in memory,
// let TREE be an array which is linear in nature.if any node N occupies the position 
// TREE[K] then its left child is stored in and it is right child is stored in-
//ans:B:TREE[2*k],TREE[2*k+1]


//11. let S be a stack of size n>=1.Starting with the empty stack,
// suppose we push the first n natural numbers in sequence,and then perform n pop operations. 
// assume that push and pop operation take x second each, and y seconds elapse between the end of one 
// such stack operation and the start of the next operation.for m>=1,definethe stack-life of m as the time elapsed 
// from the end of push(m) to the start of the pop operation that removes m from s. the average
// stack-life of an element of this stack is?
//ans:3y+2x


//12.which of the following specia symbol allowed in a variable name?
//ans:'_(underscore)'


//13. consider a situation when no data structure like arrays,heap,linked list,etc..,
// are available to you, but you are allowed to use queues.if you want to implemnt a stack 
//  and push n numbers(n>=100,000)into the stack after makeing it, ow many queues will be
//  required at least to do so?
//ans:2.


//14.which transitions in process state diagram detrmines that the OS is useing preemptive scheduling?



//15.consider the following S1 and S2 S1:A hard handover is one in which the channel in the 
// source cell is retained and used for a while in parallel with the channel in the target cell. 
// S2:A soft handover is one in which the channel in the source cell is retained and only then the 
// channel in the target cell is engaged.
//ans:Both S1 And S2 are not true.

//16.In relation to the given table ,what does the following querty print:Saelect*FROM student LEFT OUTER
// JOIN Student_address onabort(Student.StudentID = Student_address.Student);
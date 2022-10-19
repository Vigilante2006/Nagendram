console.log(Math.random().toString(36).substring(2,15));

//console.log(Math.random().toString().substring())

//2.
function demo(array1,callback)
{
    array1.push(35);callback();
}
var array1 = [2,3,4];
demo(array1,function(){console.log("array has been modified",array1)});

//3.
greetMe = function(language,country)
{
    console.log("hi " +this.name+ "in " +language+country)
}
people = [{"name":"shun"},{"name":"vaibhav"}]
greetMe.call(people[1],["english ","england"])


//4.how do you add google fonts to your project

//5.
// let func = (num)=>{
//     //if(num>0)
//     return (num+func(num-3))
//     var num = 6
//     func(num)
//     console.log(func(num));
// }
//  function func1(num){
//     func(num)
//  }
//  console.log(func1(6))


 //6.
 function exam(){
    let j=0;
    for(;j<10;){
        if(j<10){
            console.log("exam",j++)
        }
        else{
            //continue;
            console.log("Quiz")
        }
    }
    return 0;
 }

//7.
 function fun(n){
    let x =1,k;
    if(n==1) return x;
    for(k=1;k<n;++k){
        x = x+fun(k)*fun(n-k)
        //console.log(x);
    }
    return x;
 }
 console.log(fun(4));


//  8.Consider the following and Inorder traversals of binary tree.
//  post rder:1,2,5,4,7,6,3,9,11,10,8
//  In order:1,2,3,4,5,6,7,8,9,10,11
//  find the total number of nodes that have height greater than the height of oe 6
//  Assume root is at lowest height.



// 9.the difference between the height of the left subtree to the height of the right subtree
// of every node is at most one for which of the following ? ans:AVL tree


// 10.which of the following is a charter of border gateway protocol

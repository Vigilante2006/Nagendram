//phone class
//properties 
//1.color
//2.ram
//3.camera
//4.model
//5.storage
//6.name
//methods
//1.call
//2.openapp
//3.sendmessage
//4.takephoto
//5.start
// class myphone{
//     constructor(color,ram,model,storage,name="iphone 14"){
//         this.color=color;
//         this.ram=ram;
//         this.camera=camera;
//         this.model=model;
//         this.storage=storage;
//         this.name=name;

//     }
// }
// assignPrice(location = "delhi"){
//     console.log
// }

// myPhone = newPhone(("black",16,64,"iphone pro",64,"iphone 13"))



// var a=2.6;
// var b=0.75;
// console.log(Math.ceil(a));
// console.log(Math.floor(a));
// console.log(parseInt(a));
// console.log(Math.ceil(b));



//let y=20;
// function printMessage(){
//     let s="lucky";
//     {
//         var x="hello";
//         let xs="hi";
//         console.log(y);
//         console.log(xs);
//     }
// }
// printMessage();

// class Phone{

// calculatePrice(){
//     if(myPhone.storage===128){
        
//             this.finalPrice = 1500000
//     }else{
//         this.finalPrice = this.price
//     }
// }



// let array = [1,2,3,4,5]
// //operations
// //1.add
// //2.access
// //3.delete
// //update

// //1.add
// //add an element at the end of the array
// let newEle = 10
// array.push(newEle)
// array[array.length]=newEle
//array.splice(array.length,0,newEle)
//add an element in the begining of the array

//array.splice(0,0,10,40)
//array.unshift(20,30)
//array[11]=5
//console.log('Final Array:',array)


//2.access
//console.log(array[100])
//console.log(array[array.length-1])


//3.delete
//delete the element at the end of the array
// let res= array.pop()
// console.log('popped element:'.res)
// array.splice(array.length-1,1)
// //delete an element in thebegning of an array
// array.shift()
// console.log('Final Array:',array)



// var a=[1, 2, 4, 6, 7, 8];
// console.log(a.splice(0,4));
// a.splice(0,4);
// console.log(a);

// var arrar = [1,2,4,5,6, 7];
// console.log(array.splice(0,4));

// var num =32;
// console.log(num<<4);

// const points = [40, 100, 1, 5, 25, 10];
// //let arr = points.sort((a, b) => b - a)
// let arr1 = points.sort((a, b) => a - b)
// //console.log(arr);
// console.log(arr1);

// Negative Value ( a > b) => a will be Place before b
// zero value (a == b) => No Change
// Positive Value (a < b ) => a will be place after b
// flow of sort()



// function printTable(num){
//     for(let i=1;i<=num;i++){
//         let table="";
//         for(let j=1;j<=10;j++){
//             table+=j*i.toString()+" ";
//         }
//         console.log(table);
//     }
// }
// printTable(10);
// function checkloop(){
// var i=1;
// do{
//     console.log(i);
//     i++
// }while(i>=10)//false
// }
// checkloop(2)

// var i=1;
// while(i>=10){
//     console.log(i)
//         i++;
    
// }
// var sum=0;
// const num = [2,3,4,6,7,8];
// console.log(num.forEach(num+num));
// num.forEach(myfunction)
// function myfunction(item){
//     sum+=item;
//     console.log(sum)
// } 

// let sum=0
// let arr2 = arr2.forEach((num)=>{sum=sum+num;})

// const cars = ["maruti","123"];
// for(const x of cars){
//     let element =x;
//     console.log(element);
// }



let n= 123456;
function getSum(n){
    let sum = 0;
    while(n>0||sum>9){//to check if the number is single digit or not.
    if(n==0){
        n=sum;//10
        sum=0;
    }
    sum=sum+n%10;//0+4 //4+3 //7+2 //9+1 //1
    n=Math.floor(n/10);//don't have anything to add //123 //12  //1 //0  
    //n=parseInt(n/10);
}
return sum;
}
console.log(getSum(n));



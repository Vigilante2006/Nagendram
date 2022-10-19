
// var countOfObjects = 0;

// class FunctionApp{

//       count;

//     //countOfobjects=0;
//     //whenever object is created ,constructor is invoked
//      //it is invoked as sonas object is created.
//     constructor(){
//         countOfObjects++;
//     }

//       countObjects(){
        
//         console.log("Count of Objects = "+countOfObjects);
//       }
//       doLogic2(){

//         console.log("Performing logic 2");
        
//       }
//       doLogic3(){

//         console.log("Performing logic 3");
//         console.log(this);
//         //calling another method using same object.
//         this.doLogic2();

//       }

// }

// const obj1 = new FunctionApp();
// const obj2 = new FunctionApp();
// const obj3 = new FunctionApp();
// obj1.countObjects();
// obj1.doLogic3();




var countOfObjects = 0;

class functionapp{
     
  constructor(){
      countOfObjects++
      
  }
  countObjects(){
    console.log("Count of objects =  "+countOfObjects);
  }
  doLogic2(){
    console.log("performing logic 2")
  }
  doLogic3(){
    console.log("performing logic 3");
    this.doLogic2();
    console.log(this);
  }
}
const obj = new functionapp();
const obj4 = new functionapp();
const obj5 = new functionapp();
const obj6 = new functionapp();
obj5.countObjects()
obj.doLogic3()


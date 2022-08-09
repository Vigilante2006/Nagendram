
var countOfObjects = 0;

class FunctionApp{

      count;

    //countOfobjects=0;
    //whenever object is created ,constructor is invoked
     //it is invoked as sonas object is created.
    constructor(){
        countOfObjects++;
    }

      countObjects(){
        
        console.log("Count of Objects = "+countOfObjects);
      }
      doLogic2(){

        console.log("Performing logic 2");
        
      }
      doLogic3(){

        console.log("Performing logic 3");
        console.log(this);
        //calling another method using same object.
        this.doLogic2();

      }

}

const obj1 = new FunctionApp();
const obj2 = new FunctionApp();
const obj3 = new FunctionApp();
obj1.countObjects();
obj1.doLogic3();


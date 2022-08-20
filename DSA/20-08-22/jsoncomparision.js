class Environmentalist{  

    constructor(name ,location){
        //this keyword refers to object which has called the constructor
        this.name = name;
        this.location = location;


       
    }
    //2. actions,methods,functions.
    surveyArea(){
        console.log("Area Surveyed");
        return 100;

    }
    showAlert(){
        //pushLibrary.call("Plant trees please");
        console.warn("please plant more trees");

    }
    plantTrees(){
        console.log("10 trees planted");

    }

}
// new keyword is used to create new objects from a prototype.
//you can create infinite number of objects from a

const nagendramObj = new Environmentalist("Nagendram","vizag");
//how to call actions for an object.
console.log(nagendramObj);
nagendramObj.surveyArea();
nagendramObj.showAlert();
nagendramObj.plantTrees();

const raviObj = new Environmentalist("Ravi","vizag");
//how to call actions for an object.
raviObj.surveyArea()

console.log(typeof nagendramObj);


// how to find if nagendramobj is object of Environmetalist ?
console.log(nagendramObj instanceof Environmentalist);// instanceof is an operator.

//convert a javascript obj to json string.
const nagendramJsonObj = JSON.stringify(nagendramObj);
console.log(nagendramJsonObj);
console.log(typeof nagendramJsonObj);

const parsenagObj = JSON.parse(nagendramJsonObj);
console.log(parsenagObj);
console.log(parsenagObj instanceof Environmentalist);
console.log(Object.keys(parsenagObj));

// class Environmentalist{


//         constructor(name,location){
            
//             this.name = name ;
//             this.location= location;
//         }

//     surveyArea(){

//         console.log("Area survayed")
//         return 100;

//     }
//     showAlert(){

//         console.log("Planting More trees");

//     }
//     plantingTrees(){

//         console.log("10 Trees Planted");

//     }
// }

// const obj1 = new Environmentalist("nagendram","vizag");
// const obj2 = new Environmentalist();
// obj1.surveyArea();
// obj1.showAlert();
// obj1.plantingTrees();

// console.log(typeof obj1);
// console.log(obj1 instanceof Environmentalist);


// var countObjects = 0;

// class FunctionApp{

//     count;
//     constructor(){
//     countObjects++;

//     }
//     countObjects(){

//         console.log("count Objects="+countObjects);

//     }
//     doLogic2(){
//         console.log("logic2");

//     }
//     doLogic3(){
//         console.log("doLogic3");
//         console.log(this);
//         this.doLogic2();
//     }


// }



// const obj1 = new FunctionApp();
// const obj2 = new FunctionApp();
// const obj3 = new FunctionApp();
// obj1.countObjects();
// obj1.doLogic3();



function divisibleBy60(num){

    var found = true;
    var numStr = num.toString();

    for(let i=1020;i<=9999;i+=60){
            found = true;
        for(let j=0;j<4;j++){

            if(!numStr.includes(i.toString()[j])){

                found = false;
                break;
            }
        }
        if(found){
            console.log(i);
        }
           
    }
}
divisibleBy60(4320);

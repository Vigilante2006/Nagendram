class Car{
    engine = "";
    seats ="";
    airbags = "";
    price = "";
    constructor(engine,seats,airbags,price){
        this.engine = engine;
        this.seats = seats;
        this.airbags = airbags;
        this.price = price;

    }
    drive(){
        console.log("drive...")
    }
    build(){
        console.log("building car...")
    }
}
class sportsCar extends Car{
    speed = "";
    hp = "";
    nitro = "";

    constructor(engine,seats,airbags,price,speed,hp,nitro){
        //call base class constructor.
        super(engine,seats,airbags,price)
            this.speed = speed;
            this.hp = hp;
            this.nitro = nitro;
    }
    race(){
        console.log("raceing...")
    }
    //overridden logic on base class
    build(){
        console.log("building car with common tools...")
    }
            
}
class familyCar extends Car{
    childsafety = "";
    comfotlevel = "";

    constructor(engine,seats,airbags,price,speed,hp,nitro,childsafety,comfortlevel){
        super(engine,seats,airbags,price,speed,hp,nitro,)
        this.childsafety = childsafety;
        this.comfortlevel = comfortlevel;
    }
    drivesafe(){
        console.log("driveing Safe...")
    }

    build(){
        super.build();
        console.log("building better entertainment");
    }
}
class Budgetfamilycar extends familyCar{
    build(){
        super.build();
        console.log("reduceing number of seates")
    }
}
// var scar = new sportsCar("tata",7,4,500000,250,5000,true);
// scar.drive();//parent
// scar.race();//its own
// scar.build();
//scar:access all the properties from the parent and also methods.

// var fcar = new familyCar("tata",5,4,500000,4,true);
// fcar.drive();
// fcar.drivesafe()
// fcar.build();

const bfcar = new Budgetfamilycar()
bfcar.build();




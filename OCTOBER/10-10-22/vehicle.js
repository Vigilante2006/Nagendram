
class Vehicle{
    color;
    model;
    no_of_tyres;
    constructor(color,model,no_of_tyres){
        this.color=color;
        this.model = model
        this.no_of_tyres=no_of_tyres
    }
}
var bike = new Vehicle("red","Royal enfield",2)
console.log(bike);
console.log(bike.color)
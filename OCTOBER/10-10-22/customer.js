
//crateing a blueprint of customer for program to understand who is customer
class Customer{
    //properties
 name = "";
 age = "";
 address = "";
 use_id = "";
 phno = "";
 email = "";

 //assign values to the properties
 constructor(_name,_age,_address,_user_id,_phno,_email){
    this.name = _name;
    this.age = _age;
    this.address = _address;
    this.user_id = _user_id;
    this.phno = _phno;
    this.email = _email;
 }

 //methods
 placeOrder(){
    
    
    console.log("place order for "+this.name);
 }
 trackOrder(){

 }
 search(){

 }

}
//to create an object
//creating an object useing customer 
var customer1 = new Customer("John.Doe",25,"vizag","john123",8943672145,"johndoe@gmail.com");
customer1.placeOrder();

var customer2 = new Customer("John.Doe2",25,"vizag","john123",8943672145,"johndoe@gmail.com")
customer2.placeOrder();




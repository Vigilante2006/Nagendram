
const complexObject ={
    "name":"Nagendram",
    "surname":"mankena",
    "qualifications":{
        "name":"B.tech",
        "yearOfPassing":2016,
        "grade":"A"
    },
    "jobDetails":{
        "company":"facebook",
        "location":"LA",
        "salary":"2000000$"
    }
}
console.log(complexObject);
console.log(complexObject.name);
console.log(complexObject.jobDetails);


const cars = [
    {
        brand:"BMW",
        model:"A6"
    },{
        brand:"Audi",
        model:"x5"
    },{
        brand:"BMW",
        model:"A3"
    },{
        brand:"Audi",
        model:'X3'
    }
];
for(var car of cars){
    console.log(car.brand+" - "+car.model +" ");
}


var studentv=[{
    "RollNo":2,
    "name":"Ravi",
    "class":"10",
    "marks":90
},{
    RollNo:"6",
    name:"nagendram",
    class:10,
    marks:95
},{
    "RollNo":8,
    "name":"Rithwik",
    "class":10,
    "marks":92
},{
    "RollNo":7,
    "name":"aradhya",
    "class":10,
    "marks":92
}
];
let max=0;
let topper;
for(let i in studentv){
    if(studentv[i].marks>max){
        max=studentv[i].marks;
        topper=i;
    }
}
console.log(studentv[topper]);



let devices = {
    mobiles:[{
        "model":"iphone 13",
        "price":"$ 876"
    },{
        "model":"iphone 14",
        "price":"$ 980"
    }
],
    laptops:[{
        model:"mac 11",
        price:"$ 1234"
    },{
        "model":"macbook pro m1",
        "price":"$ 1289"
    },{
        model:"macbook pro 14",
        "price":"$ 1345"
    }
],
};

for(let product in devices.laptops){
    console.log(devices.laptops[product]);
}
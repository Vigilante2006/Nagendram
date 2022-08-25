//objects.
//why use objects ?
    //to represent an entity,prototype.
    //to store data where there are attributes and its value.
    //key & value pair.
    //how object store data.

// ["Ravi","Kumar",30,"vizag"],
// ["Marreied","B.tech","Male","21/06/1981"],
// ["employed","dockyard","MCD",30000],
// [true,false,"9032404542","y20152145"]

var fname = "fname";
const raviData = {
    fname :"Ravi",
    "lname":"kumar",
    "age":30,
    "location":"vizag",
    "maried":true,
    "education":"b.tech",
    "dob":"21/06/1981",
    "employment":{
        "company":"Dockyard",
        "dept":"Mcd",
        "salary":30000
    },
    "marks":[9,9.5,10,9.86,9.23]
};

 console.log(raviData.fname);
console.log(raviData.education);
 console.log(raviData["age"]);
console.log(raviData.employment.salary);
console.log(raviData["employment"].salary);
console.log(raviData["employment"]["salary"]);
console.log(raviData.marks[2]);
console.log(raviData);
console.log(raviData["marks"][3])


// const students = [
//         {"fname":"nagendram","lname":"mankena"},
//         {"fname":"Rithwik","lname":"kumar"},
//         {"fname":"Ravi","lname":"kumar"}

// ];
// console.log(students);

const project = [
    {pmanager:{fname:"Ravikumar",lname:"Kumar"}}
    // {"team leader":{"fname":"Rithwik","lname":"Kumar"}}
    // {"employee1":{"fname":"nagendram","lname":"mankena"}}
    // {"employee2":{"fname":"slise","lname":"gorremutchu"}}
   
];
console.log(project[pmanager][0])


const  students = [
    {
        "fname":"Ravi",
        "lname":"kumar"
    },
    {
        "fname":"nagendram",
        "lname":"mankena"
    },
    {
        "fname":"Anok",
        "lname":"gorremutchu"
    },
    {
        "fname":"Rithwik",
        "lname":"kumar"
    },
    {
        "fname":"Aradhya",
        "lname":"slice"
    }
];

const nameWithA = students.find((obj)=>obj.fname.startsWith("A"));
const R = students.filter((obj)=>obj.fname.startsWith("R"));
console.log(nameWithA);
console.log(R);
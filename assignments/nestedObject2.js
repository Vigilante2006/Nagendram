// const movie = [{
//     name: 'Spiderman',
//     genre: 'action',
//     collection: '100cr',
//     hit: function () {
//         return `${this.name}, is hit`;
//     },
//     flop: function () {
//         return `${this.name}, is flop`;
//     },
// },
// {
//     name: 'Batman',
//     genre: 'action',
//     collection: '120cr',
//     hit: function () {
//         return `${this.name}, is hit`;
//     },
//     flop: function () {
//         return `${this.name}, is flop`;
//     },
// },]
//     const cloneMovie = Object.assign({}, movie);
//     for ([key, value] of Object.entries(cloneMovie)){
//         console.log(`Movie ${value.hit()}`)
// }


// const movie1=[{
//     name : "RRR",
//     genre : "action",
//     collection : "1820cr",
//     hit : function(){
//         return `${this.name}, is hit`;
//     },
//     flop : function(){
//         return `${this.name}, is flop`;
//     }
// },
// {
//     name : "KGF2",
//     genre : "action",
//     collection : "1150cr",
//     hit : function(){
//         return `${this.name}, is hit`;
//     },
//     flop : function(){
//         return `${this.name}, is flop`;
//     },

// },]

//     const cloneMovie1 = Object.assign({}, movie1);
//     for([key, value] of Object.entries(cloneMovie1)){
//         console.log(`Movie ${value.hit()}`)
// }

const employeeDetails=[{
    name : "Ravikumar",
    fname : "Ravi",
    lname : "Kumar",
    age : 32,
    skilled : function(){
        return `${this.name}, got promotion`;
    },
    unskilled : function(){
        return `${this.name}, not get pramotion`;
    }
},
{
    name : "Nagendramma Mankena",
    fname : "Nagendram",
    lname : "Mankena",
    age : 28,
    skilled : function(){
        return `${this.name}, got promotion`;
    },
    unskilled : function(){
        return `${this.name}, not get pramotion`;
    }
},]
 const cloneemployeeDetails =Object.assign({},employeeDetails);
 for([key,value] of Object.entries(cloneemployeeDetails)){
    console.log(`employee ${value.skilled()}`);
 }


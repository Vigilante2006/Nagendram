
//nested Objects


const movie1 = {
    name : "RRR",
    genere : "action",
    theatres : {
        imax : "vizag",
        pvr : "Bapatla"
    },
    collection : "1150cr",
    hit : function(){
        return `${name}, is hit`;
    }, 
    flop : function(){
        return `${name}, is flop`;
    },

};
const {name, hit, theatres} = movie1;
console.log(hit());
const { imax , pvr } = theatres;
console.log("theater locations are",imax," and ",pvr);






// const movie = {
//         name: 'Spiderman',
//         genre: 'action',
//         theatres: {
//             imax: 'chennai',
//             pvr: 'mumbai'
//         },
//        collection: '100cr',
//         hit: function () {
//             return `${name}, is hit`;
//         },
//         flop: function () {
//             return `${name}, is flop`;
//          },
//     };
//     const { name , hit, theatres } = movie;
//     console.log(hit())
//     const { imax, pvr } = theatres;
//     console.log("theatres locations are", imax, 'and', pvr)

const employeeDetails={
    fname : "Ravi",
    last_name : "Kumar",
    age : 32,
    gender : "male",
    marital_status : "marieed",
    children  : "two",
    db : "20/06/1981",
    drinker : false,
    employement_Details : {
        j0b_location : "Vizac",
        company : "Dockyard",
        grade : "Skilled",
        dep : "MCD",
        salary : 30000,

    },
    id_proof :{
        aadhar : "xxxxxxxxxxx",
        ph_n: "1233445678",
        pan_num: "APUQ134",
        driveing_licanse : true ,
    } 
    

}
console.log(employeeDetails.fname)
console.log(employeeDetails.last_name);
console.log(employeeDetails.employement_Details.salary);
console.log(employeeDetails.id_proof.driveing_licanse);



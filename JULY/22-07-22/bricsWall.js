function calculateBrics(l,b,t){
     let lOfWall = 24;
     let hOfWall = 8;
     let thickness = 0.6;
    let valumeOfWall = lOfWall* hOfWall*thickness
    let volumeOfBrics = 24*12*8;
    let motor = 15;

    let noOfBrics = (((100-motor)/100)*valumeOfWall*(100*100*100)/volumeOfBrics)

    console.log(Math.ceil(noOfBrics));

}
calculateBrics();
//console.log(Math.round(10.2));



    


// let num=16;
// console.log(num<<3);

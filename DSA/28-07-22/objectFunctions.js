

const edTechObj = {
    "edTechName":"Relevel"
};

//Object.freeze(edTechObj);

//Object.seal(edTechObj);
//edTechObj["website"]="www.relevel.com";
//edTechObj.name="Unacademy";

console.log(edTechObj);
//Object.freeze
    //1.can't add,update or delete.
//Object.Seal
    //1.can't delete,add but can update.
//check if object is seald or not.
console.log(Object.isSealed(edTechObj));
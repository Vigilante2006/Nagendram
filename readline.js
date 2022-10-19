
var M;
const readline = requiresre("readline");
 
const rlInterface = readline.createInterface({input:process.stdin,output:process.stdout});
rlInterface.question("Enter the value of  M and N",(answer) =>{ M=answer;rlInterface.close();});
 
function lectureAttendence(M,N){
       
    console.log(M);
 
    var attendeceRequired = .75 * M;
 
    if(N<attendeceRequired){
        console.log("You nedd ",(M-N),"more lectures");
    }
    else
    {
        console.log("Your attendece is sufficient");
 
    }
}
 
lectureAttendence(M,19);

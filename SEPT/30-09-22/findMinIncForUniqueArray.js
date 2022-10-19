

function findMinIncForUniquearray(array){
    let incCounter = 0;
    let obj = {};
    for(let i=0;i<array.length;i++){
        if(obj.hasOwnProperty(array[i])){
            obj[array[i]]+=1;
        }else{
            obj[array[i]] = 1;
        }
    }
    let max = Math.max(...array)+array.length;
    let buffer = [];
    for(let i=0;i<max;i++){
        if(obj.hasOwnProperty(i) && obj[i]>1){
            buffer.push(i);
        }
        else if(buffer.length>0 && !obj.hasOwnProperty(i)){
            incCounter+=i-buffer.shift();
        }
    }
    console.log(incCounter);
}
//const input = [1,0,3,1,2,3];
const input = [1,5,5];
findMinIncForUniquearray(input)








var a = 5
var b=0==5 && a++
console.log(a,b)








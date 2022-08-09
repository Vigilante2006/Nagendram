var one;
var two = 'A'
switch(two){
    case 'A':{
        one+=10;
        break ;
    }
    case 'B':{
    one+='9';
        break;
    }
    case 'C':{
        one+='8';
        break;
    }
    default:
        one+='0';
    
}
console.log(one);
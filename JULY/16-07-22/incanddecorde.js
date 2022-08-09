/*function incAndDecOrder(x,y,z){
    
    //12 , 45, 87
    //90,32,21
    //


    if (x<y && y<z){
       
       
        console.log("increseing order");
    }else if(x>y && y>z) {

            console.log("decreasing order");
    } else {
        console.log("neither increasing nor decreasing");
    }
}*/

function incAndDecOrder(x,y,z){
    if(x<y && y<z){
        console.log("Increasing an order");
    }else if(x>y && y>z){
        console.log("Decreasing an oreder");
    }else {
        console.log("neither increasing nor decreasing");
    }
}
incAndDecOrder(12,34,78);
incAndDecOrder(98,65,43);
incAndDecOrder(12,56,4);

//incAndDecOrder(12,45,87);
//incAndDecOrder(90,32,21);
//incAndDecOrder(4,9,1);


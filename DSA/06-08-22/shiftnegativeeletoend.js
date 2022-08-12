

function shiftNegativeToEnd(array){

   
    let n=array.length;
    let tempArray = new Array[n];
    var j=0;
    for(let i=0;i<n;i++)
        if(array[i]>=0)
            tempArray[j]=array[i];
            j++;
        
        if(n==0 || n==1)
            return;
        
        for(let i=0;i<n;i++)
            if(array[i]<0)
                tempArray[j]=array[i];
                j++;
            
        
        for(let i=0;i<n;i++)
            array[i]=tempArray[j];
           // console.log(array[i]);
        
    

}
let array = [-5,3,-4,88,-9,-10,21,5,6];
shiftNegativeToEnd(array);
for(let i=0;i<array.length;i++)
    console.log(arr[i]+" ");

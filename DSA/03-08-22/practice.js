// function findMaxProfit(array){
//     let maxProfit = 0;
//     let sellingPrice = 0;
//     let buyingPrice = 0;
//     let changeBuyingPrice = true

//     for(let i=0;i<=array.length;i++){
//         sellingPrice = [i+1];
//         buyingPrice = [i];
        
//         if(changeBuyingPrice){
//         buyingPrice = [i];
//         }if(sellingPrice<buyingPrice){
//             changeBuyingPrice =true;
//             continue
//         }else{
//             let profit = sellingPrice-buyingPrice;
//             if(profit>maxProfit){
//                 maxProfit=profit;
//             }
//             changeBuyingPrice = true;
//         }
//     }
//     console.log(maxProfit);
// }

// findMaxProfit([100,180,260,310,40,535,695]);


// function findMinMax(array){
//     let min = Number.MAX_VALUE;
//     let max = Number.MIN_VALUE

//     for(let i=0;i<array.length;i++){
//         if(array[i]<min){
//             min=array[i];
//         }
//         if(array[i>max]){
//             max = array[i];
//         }
//     }
//     console.log("Min: "+min)
//     console.log("Max: "+max)
// }
// findMinMax([3,2,9,8]);

// function findMaxProfit(array){
//     let maxProfit=0;
//     let buyingPrice= 0;
//     let sellingPrice= 0;
//     let changeBuyingPrice = true
//     for(let i=0;i<array.length-1;i++){
//         sellingPrice=array[i+1];
//         buyingPrice=array[i];
//         if(changeBuyingPrice){
//             buyingPrice=array[i];
//         }if(sellingPrice<buyingPrice){
//             changeBuyingPrice = true;

//         }else{
//             let profit =sellingPrice-buyingPrice;
//             if(profit>maxProfit){
//                 maxProfit=profit;
//             }
//             changeBuyingPrice=false;
//         }
//     }
//     console.log(maxProfit);
// }
// findMaxProfit([70,110,160,380,200,510,540]);


function findMaxProfit(array){
    let maxProfit=0;
    let sellingPrice=0;
    let buyingPrice=0;
    let changeBuyingPrice=true;
    for(let i=0;i<array.length-1;i++){
        sellingPrice=array[i+1];
        buyingPrice=array[i];

        if(changeBuyingPrice){
            buyingPrice=array[i];

        }if(sellingPrice<buyingPrice){
            changeBuyingPrice=true;
            continue;
        }else{
            let profit=sellingPrice-buyingPrice;
            if(profit>maxProfit){
                maxProfit=profit;
            }
            changeBuyingPrice=false;
        }
    }
    console.log(maxProfit);
}
findMaxProfit([100,120,301,350,140,490]);




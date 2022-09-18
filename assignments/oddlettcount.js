

let oddLetter = (lett) =>{
    let lettArr = lett.split("");
    //console.log(lettArr);
    let lettLen = lettArr.length;
    let middle = (lettLen-1)/2;
    const newLett = lettArr.slice(middle).concat(lettArr.slice(0,middle));
    //console.log(newLett);
    const arr = [];
    lettArr.forEach(ele=>{
        arr.push(newLett.join(" "));
       // console.log(arr);
        newLett.pop();
        //console.log(arr);
        newLett.unshift(" ");
        //console.log(arr);
    
    });
    //console.log(arr);
    arr.reverse();
    //console.log(arr);
    return arr.join("\n");
    
} 
console.log(oddLetter("WELCOME"));


//1.
const  myNumbers = [1,2,3,4,5,6,7];
const myFunction = (arr)=>{
    return arr.map((x)=>x+3).filter((x)=>x<7);//[4,5,6]

}
console.log(myFunction(myNumbers));

//2.
const foo1 = [1,2,3];const[n1,m1]=foo1;
console.log(n1);//1
console.log(m1);
const foo = [[1,2],6,[3,4,5]];
const[n,m,l]=foo;
console.log(n);//[1,2]
console.log(m);
console.log(l);




let nnaturalnums = (n)=>{
    //return n*((n+1)/2);//O(1)
    // let sum =0; 
    // for(let i=0;i<=n;i++){//O(n)
    //     sum+=i;
    // }
    // console.log(sum);

    let sum=0;
    for(let i=1;i<=n;i++){
        for(let j=1;j<=i;j++){
            sum++;
        }
    }
    console.log(sum);
    
}
nnaturalnums(3);
nnaturalnums(5);

function searchIndex(nums){

    for(let i=0;i<nums.length;i++){
    if(nums[i]==target){
        return i;
    }
    else if(nums[i]>target){
        return i;
    }else if(i==nums.length-1){
        return i+1;
    }
}
}
searchIndex([1,2,3,5]);





// class Solution {
//     public:
//         int noofpath(vector<vector<int>>obs,int row,int col,  vector<vector<int>>&dp){
//             if(row>obs.size()-1 || col>obs[0].size()-1 || obs[row][col]==1) return 0;
            
//             if(row == obs.size()-1 
//     //this solution giving tle
//     //but i have done 
//     int findPath(int r, int c, vector<vector<int>>& grid, vector<vector<int>>& dp)
//         {
//             //boudary and obstacle condition
//             if(r>=grid.size() || c>=grid[0].size() || grid[r][c]==1) return 0;
            
//             //if we reach right bottom, we get 1 path and return it
//             if(r==grid.size()-1 && c==grid[0].size()-1) return 1;
            
//             //if path is already store in dp we return it
//             if(dp[r][c]!=-1) return dp[r][c];
            
//             //calculate the no. of path by moving down and right and return it
//             //and store it into the dp
//             return dp[r][c]= (findPath(r+1, c, grid, dp) + findPath(r, c+1, grid, dp));
//         }
    

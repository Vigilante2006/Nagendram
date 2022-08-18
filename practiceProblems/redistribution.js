const mod = 1000000007;
let currSum = 0;
function findAllPossibleSolutionsCount(currSum){
    if(currSum===n) return 1;
    if(currSum>n) return 0;

    if(dp[currSum]!==-1){
        return dp[currSum];
    }
    let possibleSolutionsCount = 0;
    for(let i=3;i<=n;i=i+2){
        possibleSolutionsCount +=findAllPossibleSolutionsCount(currSum+i)
    }
    dp[currSum] = possibleSolutionsCount % mod;
    return possibleSolutionsCount % mod;

}
var n = 9;
let dp = Array(n).fill(-1);
console.log(findAllPossibleSolutionsCount(currSum));
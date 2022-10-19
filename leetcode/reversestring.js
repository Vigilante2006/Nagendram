

let reverseString = (str)=>{
    let result  = [];
    for(let i=str.length-1;i>=0;i--){
        result += str[i];
    }
    console.log(result.split(""));
}
reverseString(["H","e","l","l","o"]);







const reverse = (str)=>{
    let left = 0,
    right = str.length-1;
    while(left<right){
        let temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
    }
    return str;
}
console.log(reverse(["H","e","l","l","o"]));
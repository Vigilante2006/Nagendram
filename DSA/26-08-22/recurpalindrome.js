

function checkpalindrome(str,i,j){
    //base conditions.
  //1.ceck if we are in center
    if(i==j || i>j){
        return true;
    }
    if(str[i]!=str[j]){
        return false;
    }
        return checkpalindrome(str,i+1,i-1);
}
const str ="naman"
console.log(checkpalindrome(str,0,str.length-1));


let s = "madam";

let reverseArray = (s, left, right) => {
  if (left >= right) {
    console.log("it's palindrome");
    return true;
  }

  if (s[left] == s[right]) {
    reverseArray(s, left + 1, right - 1);
  } else if (s[left] != s[right]) {
    console.log("it's not palindrome");
    return false;
  }
};

reverseArray(s, 0, s.length - 1);
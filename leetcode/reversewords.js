
function reverseWords(s){
    //step1:tokenize s into words
    const tokens = s.split(' ');
    console.log(tokens)
    //step2:reverse each word
    for(let i=0;i<tokens.length;i++){
        const characters = tokens[i].split('');
        characters.reverse();
        tokens[i]=characters.join('');
        
    }
    //step3:jointhe reversed word back to a new sentence
    return tokens.join(' ');
}
console.log(reverseWords("let's take leetcode contest"))
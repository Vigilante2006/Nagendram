
function subsequenceLength(array){
	if(arr.length == 0){
		return 0;
	}
	var len = 1;
	var maxlen = 1;
	for(let i=0;i<array.length;i++){
		if(array[i-1]<array[i]){
			len++;
		}else{
			len = 1;
		}
		maxlen = Math.max(len,maxlen);
	}
	return maxlen;
}
let arr = [1,2,5,4,3];
console.log(subsequenceLength(arr))



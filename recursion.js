const allowChars = ['a', 'b', 'c', 'A', 'B', 'C'];

function login(password) {
  return password === 'AcBcC'
}

function brute(maxLength=5) {

}
function allPossibleCombinations(arr, length, letterComb) {
    if(letterComb.length >= length) {
      return [];                
    }
    let resultArray = [];
    for(var i = 0; i < arr.length; i++) {
      resultArray.push(letterComb + arr[i]);
      resultArray = resultArray.concat(allPossibleCombinations(arr, length, letterComb + arr[i]));
    }
    return resultArray;
  }
  var array = ['a', 'b', 'c', 'A', 'B', 'C'];
  console.log(allPossibleCombinations(array, 2, ''));

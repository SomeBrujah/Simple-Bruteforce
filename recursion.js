const allowChars = ['a', 'b', 'c', 'A', 'B', 'C'];

function login(password) {
  return password === 'AcBcC'
}

function brute(maxLength = 5) {
 
 for (let i = 1; i <= maxLength; i++) {
  let combinations = genString(allowChars, i);
  for (let i = 0; i < combinations.length; i++) {
    if(login(combinations[i])) return combinations[i];
  }
 }

 return null;
}


function genString(charArr, length, stringVariant = '') {

  if (stringVariant.length >= length) return new Array();

  let collection = new Array();

  for(let i = 0; i < charArr.length; i++) {
    let word = stringVariant+ charArr[i];
    collection.push(word);
    collection = collection.concat(genString(charArr, length, stringVariant + charArr[i]));
  }

  return collection;
}

// console.log(genString(allowChars, 2));

console.log(brute());
const allowChars = ['a', 'b', 'c', 'A', 'B', 'C'];

function login(password) {
  return password === 'AcBC'
}

function brute(maxLength = 5) {

  for (let i = 1; i <= maxLength; i++) {
    let combinations = genString(allowChars, i);
    let rightPass = combinations[combinations.length - 1]
    if(login(rightPass)) {
      return rightPass;
    }
  }
  return null;
}


function genString(charArr, length, stringVariant = '') {

  if (stringVariant.length >= length) return new Array();

  let collection = [];

  for (let i = 0; i < charArr.length; i++) {
    let word = stringVariant + charArr[i];
    if (login(word)) {
      return word;
    }
    collection = collection.concat(genString(charArr, length, stringVariant + charArr[i]));
  }

  return collection;
}

// console.log(genString(allowChars, 2));
console.time();
console.log(brute(6));
console.timeEnd();
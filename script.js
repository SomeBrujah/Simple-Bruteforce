const allowChars = ['a', 'b', 'c', 'A', 'B', 'C'];

function login(password) {
    return password === 'abcCC';
}

function generateStrings(array, maxLength = 5) {
    let supposition = [];
    let randomLength = Math.floor(Math.random()*maxLength);
    for (let i = 0; i <= randomLength; i++) {
        supposition[i]=array[Math.floor(Math.random()*array.length)];
    }
    return supposition.join('');
}

function genStringRec(charArr, strLength) {
    let result = [];
    for (let i = 0; i < strLength; i++) {
        result.push(charArr[Math.floor(Math.random()*charArr.length)])
    }
    return result.join('');
}


function bruteRec(beginLength = 1, maxLength = 5) {
    if (beginLength > maxLength) return null;

    let suppositions = [];
    let supposePass = '';
    
    do {
        supposePass = genStringRec(allowChars, beginLength);
        if (!suppositions.includes(supposePass)) suppositions.push(supposePass);
        if (login(supposePass)) {
            
            console.group()
            console.log(`Number of symbols in password is: ${beginLength}`);
            console.log(`Number of itteration is: ${suppositions.length}`);
            console.log(`Password is: ${supposePass}`);
            console.groupEnd();
            return supposePass;
        }
        
    } while (suppositions.length < (Math.pow(6, beginLength)))
    console.log(suppositions);
    bruteRec(beginLength += 1);
}

bruteRec();
function brute() {
    let rightPass = '';
    do {
        rightPass = generateStrings(allowChars);
        login(rightPass);
        console.log(generateStrings(allowChars));
    } while (!login(rightPass));
    console.log(`This is right pass: ${rightPass}`);
}

// brute();

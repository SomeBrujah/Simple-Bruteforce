const allowChars = ['a', 'b', 'c', 'A', 'B', 'C'];

function login(password) {
    return password === 'abbCC';
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
            console.log(supposePass);
            return supposePass;
        }
        
    } while (suppositions.length < (Math.pow(6, beginLength)))
    console.log(suppositions);
    bruteRec(beginLength += 1);
}

bruteRec();

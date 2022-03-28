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

function brute() {
    let rightPass = '';
    do {
        rightPass = generateStrings(allowChars);
        login(rightPass);
        console.log(generateStrings(allowChars));
    } while (!login(rightPass));
    console.log(`This is right pass: ${rightPass}`);
}

brute();
const allowChars = ['a', 'b', 'c', 'A', 'B', 'C'];

function login(pass) {
    return pass === 'aa';
}

function* brute(maxLength, symbolsArr) {
    for (let beginLength = 1; beginLength <= maxLength; beginLength++) {
        const passwordArray = createPassArray(beginLength);

        for (let currentTry = 1; currentTry <= Math.pow(symbolsArr.length, beginLength); currentTry++) {
            yield suggestPassword = createStringFromArray(passwordArray, symbolsArr);
            increasePassArray(passwordArray, symbolsArr.length - 1);
        }
    }

    return null;
}

function createPassArray(length) {
    return new Array(length).fill(0);
}

function increasePassArray(arr, maxValue) {
    if (arr.every((el) => { return el === maxValue })) {
        return null;
    }
    for (let currIndex = arr.length - 1; currIndex >= 0; currIndex--) {
        if (arr[currIndex] < maxValue) {
            arr[currIndex]++
            break;
        }
        arr[currIndex] = 0;
    }
    return arr;
}

function createStringFromArray(numArr, charArr) {
    let string = '';
    for (let i = 0; i < numArr.length; i++) {
        string += charArr[numArr[i]];
    }
    return string;
}

const brutFunc = brute(2, allowChars);

function bruteForce() {
    for (let pass of brutFunc) {
        if (login(pass)) {
            console.log(`Password "${pass}" is true; \n`);
            break;
        } else {
            console.log(`Password "${pass}" is wrong; \n`);
        }
    }
}

bruteForce();
// Initial data
// Characters allowed in the password
const allowChars = ['a', 'b', 'c', 'A', 'B', 'C'];

// Login function to which we will try to guess the password
function login(password) {
    return password === "acbBC"
}

// Helping-function for formating number to n-numbers array number
function numberStrToNumberArr(num, signNum) {
    let stringNumber = num.toString().split('');
    if (stringNumber.length < signNum) {
        for (let i = 0; i <= signNum - stringNumber.length; i++) {
            stringNumber.unshift('0');
        }
    }
    for (let i = 0; i < stringNumber.length; i++) {
        stringNumber[i] = Number(stringNumber[i]);
    }

    return stringNumber;
}

// Function for generate password string
function genPass(symbolArr, strLength) {
    // create outer loop for each length combination;
    for (let i = 1; i <= strLength; i++) {
        // create container for generate suggestions;
        let suppositions = [];
        // create our suggestion template;
        let supposition = new Array(i).fill(0);
        // create count that define our combination;
        let count = 0;
        let steps = 0;
        // create loop for all combinations for current length of string;
        for (let j = 0; j < (Math.pow(symbolArr.length, supposition.length)); j++) {
            if (supposition.length === 1) { supposition = [j]; supposition = symbolArr[j]; suppositions.push(supposition); }
            else if(supposition.length === 2) {
                // increase our count
                if (steps === 5) {
                    supposition = numberStrToNumberArr(count, supposition.length);
                    suppositions.push(supposition)
                    count += 5;
                    steps = 0;
                } else {
                    supposition = numberStrToNumberArr(count, supposition.length);
                    // supposition[0] = symbolArr[supposition[0]];
                    // supposition[1] = symbolArr[supposition[1]];
                    suppositions.push(supposition)
                    count++;
                    steps++;
                }
            } else {

            }

        }

        console.log(`Combination for length - ${i}:`);
        suppositions.forEach((element, index) => console.log(`${index + 1}: ${element}`));
        console.log(`End combinations for lenght - ${i} \n\n`);
    }
}

// genPass TEST
genPass(allowChars, 2);
// console.log(numberStrToNumberArr(11, 2));

// Cycle part

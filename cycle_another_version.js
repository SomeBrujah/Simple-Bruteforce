// Initial data
// Characters allowed in the password
const allowChars = ['a', 'b', 'c', 'A', 'B', 'C'];

// Login function to which we will try to guess the password
function login(password) {
    return password === "acbC"
}

// Function for generate permitation
function genPass(arr, lenMax) {
    // Create statement for define lenght our combination and numbers of permutation
    const numberOfSymbols = arr.length;
    // Create template for our combination and fill it nulls
    const element = new Array(lenMax).fill(0);

    // If in our array with characters only symbol then we'll return this symbol as only combination
    if (numberOfSymbols === 1) return [element];

    // Create our container for all variations of our password
    const collection = new Array();

    // Function for increments our numbers within combinate template
    function increase(i) {
        if (element[i] === numberOfSymbols - 1) {
            element[i] = 0;
            increase(i - 1);
        }
        else {
            element[i]++
        }
    }

    // Use this loop for create all combinations for current length
    for (let i = 0; i < Math.pow(numberOfSymbols, lenMax); i++) {
        const combination = new Array();
        for (let j = 0; j < element.length; j++) {
            combination.push(arr[element[j]])
        }
        if (login(combination.join(''))) {
            console.log(`Right password is: ${combination.join('')}`);
            return combination.join('');
        }
        collection.push(combination);
        increase(element.length - 1);
    }
    return collection;
}

function brute(allowChars) {
    for (let i = 1; i <= 5; i++) {
        genPass(allowChars, i)
    }
}

brute(allowChars);
// TEST genPass();
// genPass(allowChars)
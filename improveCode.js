// Initial data
// Characters allowed in the password
const allowChars = ['a', 'b', 'c', 'A', 'B', 'C'];

// Login function to which we will try to guess the password
function login(password) {
    return password === "acbBC"
}

// Function for generate password string
function genPass(symbolArr, strLength) {
    // create outer loop for each length combination;
    for (let i = 1; i <= strLength; i++) {
        // create container for generate suggestions;
        let suppositions = [];
        // create our suggestion template;
        let supposition = new Array(i).fill(0);
        // create loop for all combinations for current length of string;
        for (let j = 0; j < (Math.pow(symbolArr.length, supposition.length)); j++) {
            if (supposition.length === 1) { supposition = [j]; supposition = allowChars[j]; suppositions.push(supposition); }
            else {
                // create loop for each number of our combination
                for (let i = 0; i < supposition.length; i++) {
                    supposition = supposition.map((elem)=>{ return elem+1})
                }
                suppositions.push(supposition)
            }

        }

        console.log(`Combination for length - ${i}:`);
        suppositions.forEach((element, index) => console.log(`${index + 1}: ${element}`));
        console.log(`End combinations for lenght - ${i} \n\n`);
    }
}

// genPass TEST
genPass(allowChars, 2);


// Cycle part

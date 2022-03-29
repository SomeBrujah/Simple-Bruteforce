// Initial data
// Characters allowed in the password
const allowChars = ['a', 'b', 'c', 'A', 'B', 'C'];

// Login function to which we will try to guess the password
function login(password) {
    return password === "acbC"
}

function genPassRec(charArr, passLenght) {
    const length = passLenght;
    const base = charArr.length;
    const template = new Array(length).fill(0);
    const container = new Array();
    for (let i = 0; i < Math.pow(base, length); i++) {
        for (let j = 0; j < length; j++) {
            if (template.every(el=>{return el===(base-1)})){
                console.log(template)
                return template;
            } else {
                template[j]++;
            }
        }
        console.log(`${i}: ${template}`)
    }
}

genPassRec(allowChars, 2)
const allowedChars = ['a', 'b', 'c', 'A', 'B', 'C'];

const login = function (password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (password === 'ab') {
                resolve(password);
            } else {
                reject(password)
            }
        }, Math.floor(Math.random() * 5) * 1000);
    });
}

function changeCombination(arr, maxValue) {
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

function* brute(chars, maxLength) {
    for (let currentLength = 1; currentLength <= maxLength; currentLength++) {
        const combination = new Array(currentLength).fill(0);
        let variation = '';
        for (let combNumber = 1; combNumber <= Math.pow(chars.length, currentLength); combNumber++) {
            yield variation = combination.map((currentValue) => {
                return chars[currentValue];
            }).join('');

            changeCombination(combination, chars.length - 1)
        }
    }
    return null;
}

const combinator = brute(allowedChars, 5);

class Queue {
    constructor(request, competition) {
        this.request = request;
        this.competition = competition;
        this.successfulOutcome = null;
    }

    start() {
        for (let i = 0; i < this.competition; i++) {
            this.add(this.request);
        }
    }

    add(request) {
        this.execute(request)
    }

    execute(request) {
        if (this.successfulOutcome === null) {
            request(combinator.next().value).then((result) => {
                console.log(`Password ${result} is correct`);
                this.successfulOutcome = result;
            }).catch((reason) => {
                if (this.successfulOutcome !== null) return;
                console.log(`Password ${reason} is wrong`);
                this.add(request);
            })
        } else {
            return this.successfulOutcome;
        }
    }
}

const queue = new Queue(login, 5);

queue.start();
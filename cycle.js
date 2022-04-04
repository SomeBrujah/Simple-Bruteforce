const allowedChars = ['a', 'b', 'c', 'A', 'B', 'C'];

const login = function (password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (password === 'AB') {
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

function numberToString(chars, numbers) {
    let result = '';

    for (let j = 0; j < numbers.length; j++) {
        result += chars[numbers[j]];
    }

    return result;
}

function* brute(chars, maxLength) {
    for (let currentLength = 1; currentLength <= maxLength; currentLength++) {
        const combination = new Array(currentLength).fill(0);

        let variation = '';

        for (let combNumber = 1; combNumber <= Math.pow(chars.length, currentLength); combNumber++) {
            yield variation = numberToString(chars, combination);

            changeCombination(combination, chars.length - 1)
        }
    }
    return null;
}

const combinator = brute(allowedChars, 2);


// В класс очереди передавать только размер конкуренции
// а уже в метод add, передавать массив 
class Queue {
    constructor(competition) {
        this.tasks = [];
        this.competition = competition;
        this.inProgress = 0;
    }

    add(request) {
        this.tasks.push(request);
        if (this.inProgress < this.competition) {
            this.execute(this.tasks.shift())
        }
    }

    execute(request) {
        this.inProgress++;
        request[0](request[1]).then((res) => {
            this.inProgress--
            this.onSuccess(res);
        }).catch((err) => {
            this.inProgress--
            this.onFailure(err, this.tasks.shift())
        })
    }

    onSuccess(result) {
        console.log(`Damn it! This is success: ${result}`)
        return result;
    }

    onFailure(reason, reqParam) {
        console.log(`Some going wrong: ${reason}`)
        if (this.tasks.length > 0) {
            this.execute(reqParam);
        }
    }
}

const queue = new Queue(5);
for (let i = 0; i < 31; i++) {
    queue.add([login, combinator.next().value]);
}
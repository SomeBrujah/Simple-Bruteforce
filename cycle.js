const allowedChars = ['a', 'b', 'c', 'A', 'B', 'C'];

const login = function (password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (password === 'ac') {
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
        this.execute();
    }

    execute() {
        if (this.tasks.length === 0) {
            return;
        }
        if (this.inProgress >= this.competition) {
            return;
        }

        let task = this.tasks.shift();
        this.inProgress++;
        task[0](task[1]).then((res) => {
            this.inProgress--;
            this.onSuccess && this.onSuccess(res);
        }).catch((err) => {
            this.inProgress--;
            this.onFailure && this.onFailure(err)
        })
    }

    addEventListener(event, callback) {
        this['on' + event] = callback;
    }


}

const queue = new Queue(5);
for (let i = 0; i < queue.competition; i++) {
    queue.add([login, combinator.next().value]);
}
queue.addEventListener('Success', (res) => {
    console.log(`Result: ${res}`);
    combinator.return(res);
})

queue.addEventListener('Failure', (err) => {
    let comb = combinator.next();
    if (comb.done) {
        return comb.value;
    }
    queue.add([login, comb.value]);
    console.log(`Error: ${err}`);
})

// setInterval(()=>{
//     console.log(queue.inProgress);
// }, 100)
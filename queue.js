// Объявляем объект - очередь
class Queue {
    constructor(concurrency = 20, source) {
        this.concurrency = concurrency;
        this.promises = [];
        this.source = source; // itterator with function-generator
        this.done = []; // Для результатв выполнения промисов
    }

    payload() {
        do {
            let value = this.source.next().value;
            if (value === undefined) break;
            this.add(value);
        } while (this.promises.length < this.concurrency)
    }

    start() {
        this.payload();
        this.execute();
    }

    execute() {
        do {
            this.then(this.promises.pop()(randomString(2)));
            this.payload();
        } while (this.promises.length !== 0);
    }

    add(promise) {
        this.promises.unshift(promise);
    }

    remove() {
        return this.promises.shift();
    }

    then(promise) {
        promise.then((result)=>{
            this.done.push(result);
            console.log(result);
        });
    }
}

// Function for creating frozen promises
function waitingPromise(msg) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(msg.toLocaleUpperCase())
        }, Math.floor(Math.random()*5)*1000)
    }
    )
}

// Generator random string
function randomString(length) {
    const charArr = ['a', 'b', 'c', 'd', 'f', '4', '5', 'z'];
    let result = new String('');
    const arrLength = charArr.length;

    for (let j = 0; j < length; j++) {
        result += charArr[Math.floor(Math.random() * arrLength)];
    }

    return result;
}

// Our function generator
function* promiseGenerator(length) {
    for (let k = 0; k < length; k++) {
        yield waitingPromise;
    }
}
const promiseSource = promiseGenerator(30);

const testQueue = new Queue(20, promiseSource);

console.time();

testQueue.start();

console.timeEnd();
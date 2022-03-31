function* generation(func) {
    let number = 0;
    for (let i = 0; i<100; i++) {
        yield number = i;
    }
    return number
}

const source = generation();


// Объявляем объект - очередь
class Queue {
    constructor(concurrency = 20, source) {
        this.concurrency = concurrency;
        this.promises = [];
        this.source = source; // itterator with function-generator
    }

    add(promise, source) {
        this.promises.push(promise);
    }

    then() {
        // ...
    }
}
let count = 1;
// Создаём условный промис
const funcT = function () {
    setTimeout(()=>{
        console.log(`Done promise for number ${count}`);
        count++
    }, Math.floor(Math.random()*10)*1000);
}

const testQueue = new Queue();

// Заполняем нашу очередь условными промисами
// for (let i = 0; i < 20; i++) {
//     testQueue.add(funcT);
// }

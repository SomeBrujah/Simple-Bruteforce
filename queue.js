// Create task emulation
function task() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('dasds')
        }, Math.floor(Math.random() * 5) * 1000)
    }
    )
}

// Create array with task
const tasksArr = new Array(10).fill(task);

// Create our class
class Queue {
    constructor(competition, tasks) {
        this.tasks = tasks;
        this.competition = competition;
        this.currQueue = 0;
    }

    start() {
        while (this.tasks.length > 0) {
            
        }
    }

    add(task) {
        this.execute(task);
    }

    execute(task) {
        task().then((result) => {
            console.log(result);
        })
    }
}

const test = new Queue(5, tasksArr);

test.start();

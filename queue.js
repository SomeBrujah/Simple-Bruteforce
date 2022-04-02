// Создаём функцию 
function task() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('dasds')
        }, Math.floor(Math.random() * 5) * 1000)
    }
    )
}

// Create array with task
const tasksArr = new Array(30).fill(task);

// Объявляем наш класс
class Queue {
    constructor(competition, tasks) {
        this.tasks = tasks;
        this.competition = competition;
    }

    // Отдаём на выполнение столько промисов, сколько указано очередью
    start() {
        for(let i = 0; i < this.competition; i++) {
            this.add(this.tasks.pop())
        }
        console.log(`!${this.competition} promises in queue.!`)
    }

    // Вспомогательная функция для отдачи промиса на выполнение
    add(task) {
        this.execute(task);
    }

    // Каждый из тех промисов который был отдан на выполнение
    // после его выполнения проверяет если задачи ещё есть - то отправляет на выполнение следующую задачу
    // Таким образом сохраняется очередь в заданое кол-во промисов так как каждый из промисов вызовет следующий
    // только после своего окончания
    execute(task) {
        task().then((result) => {
            console.log(result);
            if(this.tasks.length > 0) {
                this.add(this.tasks.pop())
            }
        })
    }
}

const test = new Queue(5, tasksArr);

test.start();
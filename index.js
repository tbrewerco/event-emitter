// import dependencies
import events from 'events';

// create class that extends eventemitter
class TaskQueue extends events.EventEmitter {
    constructor(concurrencyLimit) {
        super();

        // concurrency limit
        this.concurrency = concurrencyLimit;
        // store tasks in a queue
        this.queue = [];
        // track active tasks
        this.activeTasks = 0;

        // when complete, process next task
        this.on('taskCompleted', () => {
            this.activeTasks -= 1;
            this.processNextTask();
        });

    };

    // add tasks to queue
    addTask(task) {
        this.queue.push(task);
        this.processNextTask();
    };

    processNextTask() {
        if (this.activeTasks < this.concurrency && this.queue.length > 0) {
            const nextTask = this.queue.shift();
            this.activeTasks += 1;
            nextTask(() => this.emit('taskCompleted'));
        };
    };

    // this function could be used to trigger other events or perform other actions upon completion. as is, the function does nothing
    taskCompleted() { };

};

// create new taskQueue with concurrency limit
const taskQueue = new TaskQueue(5);

// create a sample task
const sampleTask = (id) => (callback) => {
    console.log('Starting sample task with id ' + id);
    setTimeout(() => {
        console.log('Completed task with id ' + id);
        callback();
    }, 1000)
}

// run sample task
for (let i = 0; i <= 10; i++) {
    taskQueue.addTask(sampleTask(i));
};
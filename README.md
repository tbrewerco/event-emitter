# Task Queue with Concurrency Control using EventEmitter

This repository demonstrates how to implement a simple event-driven task queue with concurrency control in Node.js using the EventEmitter class. The task queue allows you to efficiently manage and process tasks in a controlled and scalable manner.

## Features

- Event-driven architecture
- Concurrency control
- Customizable task processing function
- Easy horizontal scalability
- High throughput and efficient resource utilization

## Prerequisites

- [Node.js](https://nodejs.org/)

## Getting Started

1. Clone the repository.
2. Change to the project directory
3. Install the required dependencies: `npm install`.
4. Start the task queue: `node index.js`.
   - This command will start the task queu, processing the tasks with the configured concurrency level

## Customizing the Configuration

You can customize the concurrency level and the task processing function in the `queue.js` file.

- To modify the concurrency level, change the value of the `concurrency` variable.
- To change the task processing function, update the `processTask` function. 
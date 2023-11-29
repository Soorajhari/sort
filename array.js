class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return "No elements in Queue";
    }
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    console.log(str);
  }
}

let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.printQueue();

console.log(queue.size());

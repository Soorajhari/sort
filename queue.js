class queue {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class node {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enque(value) {
    let newnode = new queue(value);
    if (this.head == null) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
    this.size++;
  }
  isEmpty() {
    return this.size === 0;
  }

  dispaly() {
    let temp = this.head;
    if (temp == null) {
      console.log("empty");
      return;
    }
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  deque() {
    if (this.isEmpty()) {
      return null;
    }
    let item = this.head.value;
    this.head = this.head.next;
    this.size--;
    return item;
  }
  getSize() {
    return this.size;
  }
}

let nodei = new node();
nodei.enque(12);
nodei.enque(14);
nodei.enque(16);
nodei.enque(19);
// nodei.dispaly();
console.log(nodei.deque() + "Dequeue");
nodei.dispaly();

// class queue {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class node {
//   constructor() {
//     this.top = null;
//     this.rear = null;
//     this.size = 0;
//   }

//   enquee() {
//     let newnode = new queue();
//     if (this.top == null) {
//       this.top = newnode;
//       this.rear = newnode;
//     } else {
//       this.rear.next = newnode;
//       this.rear = newnode;
//     }
//     this.size++;
//   }
//   display() {
//     let temp = this.top;
//     while (!this.top) {
//       console.log(this.top.value);
//       temp = temp.next;
//     }
//   }
//   dequee(){

//   }
// }

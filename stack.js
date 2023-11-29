class stack {
  constructor() {
    this.item = [];
  }
  push(element) {
    this.item.push(element);
  }
  pop() {
    return this.item.pop();
  }
  peek() {
    return this.item[this.item.length - 1];
  }
  isEmpty() {
    return this.item.length == 0;
  }
  print() {
    console.log(this.item.join(" "));
  }
}

const stacki = new stack();
const stack2 = new stack();

function Undo() {
  stack2.push(stacki.pop());
}

function Redo() {
  stacki.push(stack2.pop());
}

console.log(stacki.isEmpty());
stacki.push(12);
stacki.push(32);
stacki.push(42);
stacki.push(52);
Undo();
Undo();
Redo();
stacki.print();
stack2.print();

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class stack {
//   constructor() {
//     this.top = null;
//     this.size = 0;
//   }

//   push(value) {
//     let newnode = new Node(value);
//     if (this.top == null) {
//       this.top = newnode;
//       this.size++;
//     } else {
//       newnode.next = this.top;
//       this.top = newnode;
//       this.size++;
//     }
//   }

//   pop() {
//     let item = this.top.value;
//     this.top = this.top.next;
//     this.size--;
//     return item;
//   }
//   print() {
//     let temp = this.top;
//     while (temp !== null) {
//       console.log(temp.value);
//       temp = temp.next;
//     }
//   }
// }

// let node = new stack();
// node.push(120);
// node.push(140);
// node.push(160);
// node.push(180);
// node.push(200);
// node.push(220);
// node.push(240);

// console.log(node.pop());
// console.log(node.pop());
// node.print();

// class stack {
//   constructor() {
//     this.arr = [];
//   }
//   push(element) {
//     this.arr.push(element);
//   }
//   pop() {
//     return this.arr.pop();
//   }
//   peek() {
//     return this.arr[arr.length - 1];
//   }
//   isempty() {
//     return this.arr[arr.length == 0];
//   }
//   print() {
//     console.log(this.arr.toString());
//   }
// }

// let medu = new stack();
// medu.push(20);
// medu.push(30);
// medu.push(40);
// medu.push(60);
// console.log(medu.pop());
// console.log()
// medu.print();

// class link {
//   constructor(value, next) {
//     this.next = next;
//     this.value = value;
//   }
// }
// class stack {
//   constructor() {
//     this.top = null;
//     this.size = 0;
//   }

//   push(value) {
//     let newnode = new link(value);
//     if (this.top == null) {
//       this.top = newnode;
//       this.size++;
//     } else {
//       newnode.next = this.top;
//       this.top = newnode;
//       this.size++;
//     }
//   }
//   pop() {
//     let item = this.top.value;
//     this.top = this.top.next;
//     this.size--;
//     return item;
//   }
//   print() {
//     let temp = this.top;
//     while (temp != null) {
//       console.log(temp.value);
//       temp = temp.next;
//     }
//   }
// }

// let newing = new stack();
// newing.push(23);
// newing.push(33);
// newing.push(43);
// newing.push(53);
// newing.pop();
// newing.print();

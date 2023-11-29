

class hashing {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    let i = 2;
    let index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [key, value];
    } else {
      while (this.table[index]) {
        index = index + (Math.pow(i, 2) % this.size);
        i++;
      }
      this.table[index] = [key, value];
    }
  }
  get(key) {
    let index = this.hash(key);
    while (this.table[index]) {
      if (this.table[index][0] == key) {
        return this.table[index][1];
      } else {
        index++;
      }
    }
    return null;
  }
  display() {
    console.table(this.table);
  }
}

let node = new hashing(50);
node.set("name", "sree");
node.set("place", "sooooraj");
node.set("age", "23");
node.set("wage", "3000");
node.display();

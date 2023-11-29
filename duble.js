class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  // Hash function 1
  hash1(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  hash2(key) {
    const prime = 7;
    return prime - (key % prime);
  }

  set(key, value) {
    let index = this.hash1(key);
    let step = this.hash2(key);
    let count = 0;
    while (this.table[index] && this.table[index].key !== key) {
      index = (index + step) % this.size;
      count++;
      if (count === this.size) {
        throw new Error("Table is full");
      }
    }
    this.table[index] = { key, value };
  }

  get(key) {
    let index = this.hash1(key);
    let step = this.hash2(key);
    let count = 0;
    while (this.table[index] && this.table[index].key !== key) {
      index = (index + step) % this.size;
      count++;
      if (count === this.size) {
        return null;
      }
    }
    if (this.table[index]) {
      return this.table[index].value;
    }
    return null;
  }

  remove(key) {
    let index = this.hash1(key);
    let step = this.hash2(key);
    let count = 0;
    while (this.table[index] && this.table[index].key !== key) {
      index = (index + step) % this.size;
      count++;
      if (count === this.size) {
        return false;
      }
    }
    if (this.table[index]) {
      delete this.table[index];
      return true;
    }
    return false;
  }

  // Print the contents of the table
  print() {
    for (let i = 0; i < this.size; i++) {
      console.log(`${i}: ${this.table[i] ? this.table[i].value : ""}`);
    }
  }
}

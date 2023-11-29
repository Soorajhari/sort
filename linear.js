class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.size;
    }
    return hash;
  }

  put(key, value) {
    let index = this.hash(key);
    let bucket = this.table[index];
    while (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
          return;
        }
      }
      index = (index + 1) % this.size;
      bucket = this.table[index];
    }
    this.table[index] = [[key, value]];
  }

  get(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    while (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
      index = (index + 1) % this.size;
      bucket = this.table[index];
    }
    return undefined;
  }
}

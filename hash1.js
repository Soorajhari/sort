class hashtable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
      // console.log(total)
    }
    return total % this.size;
  }
  // console.log(total)
  set(key, value) {
    let index = this.hash(key);
    console.log(index+'ddddd')
    let bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      let sameitem = bucket.find((item) => {
        item[0] === key;
      });
      if (sameitem) {
        sameitem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }
  get(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      let sameitem = bucket.find((item) => {
        item[0] == key;
      });
      if (sameitem) {
        return sameitem[1];
      }
    }
    return null;
  }
  remove(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      let sameitem = bucket.find((item) => item[0] == key);

      if (sameitem) {
        bucket.splice(bucket.indexOf(sameitem), 1);
      }
    }
  }
  display() {
    // console.table(this.table);
  }
}
const table = new hashtable(50);

table.set("name", "sree");
table.set("age", "12");
table.set("palce", "padanilam");
console.log(table.get("name"));

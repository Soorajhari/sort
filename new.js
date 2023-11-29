
function quicks(array) {
  if (array.length < 1) {
    return array;
  }

  let pivot = array[array.length - 1];
  let left = [];
  let right = [];

  for (i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quicks(left), pivot, ...quicks(right)];
}

let newones = [23, 45, 6, 67, 89, 876];

console.log(quicks(newones));


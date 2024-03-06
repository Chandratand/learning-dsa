const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(numbers.slice(0, numbers.length / 2));
console.log(numbers.slice(numbers.length / 2, numbers.length));

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const middleIndex = Math.floor(array.length / 2);
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex);

  console.log(left);
  console.log(right);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  console.log(left);
  console.log(right);
}

const answer = mergeSort(numbers);
console.log(answer);

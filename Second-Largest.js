const numbers = [10, 50, 30, 80, 70];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    secondLargest = largest;
    largest = numbers[i];
  } else if (numbers[i] > secondLargest) {
    secondLargest = numbers[i];
  }
}

console.log(secondLargest);
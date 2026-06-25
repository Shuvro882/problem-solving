const numbers = [1, 2, 2, 3, 4, 4, 5];

let unique = [];

for (let i = 0; i < numbers.length; i++) {
  if (!unique.includes(numbers[i])) {
    unique.push(numbers[i]);
  }
}

console.log(unique);
const number = 29;

let isPrime = true;

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log("Prime Number");
} else {
  console.log("Not Prime Number");
}
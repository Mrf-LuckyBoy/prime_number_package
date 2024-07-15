// src/function.ts
function isPrime(num) {
  if (num == 1 || num == 0) {
    return { message: ` ${num} is not a prime number`, isPrime: false };
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return { message: ` ${num} is not a prime number`, isPrime: false };
    }
  }
  return { message: ` ${num} is a prime number`, isPrime: true };
}
function findPrimeInLength({ start, end }) {
  let tempstart = start;
  let res = [];
  for (start; start <= end; start++) {
    if (isPrime(start).isPrime) {
      res.push(start);
    }
  }
  if (res.length == 0) {
    return {
      message: `prime number between ${tempstart} and ${end} is ${res.length}`,
      primeList: res
    };
  } else {
    return {
      message: `prime number between ${tempstart} and ${end} is ${res.length}`,
      primeList: res
    };
  }
}
export {
  findPrimeInLength,
  isPrime
};
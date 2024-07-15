# better-prime-number
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> This is a lib made to study and experiment with creating packages in NPM. 
:)

## Usage
How to use dependencies.

### commonJs
```js
const { isPrime , findPrimeInLength }  = require('better-prime-number');
console.log(isPrime(5))
console.log(findPrimeInLength({start:2, end: 100}))
```



### ESmodules
```js
import { isPrime , findPrimeInLength } from 'better-prime-number';
console.log(isPrime(5))
console.log(findPrimeInLength({start:2, end: 100}))
```

### Result
```bash
{ message: ' 5 is a prime number', isPrime: true }
{
  message: 'prime number between 2 and 100 is 25',
  primeList: [
     2,  3,  5,  7, 11, 13, 17, 19,
    23, 29, 31, 37, 41, 43, 47, 53,
    59, 61, 67, 71, 73, 79, 83, 89,
    97
  ]
}
```

## Features

- check prime number
- find prime number between length 

## Installation
Install the dependencies.
```sh
npm i better-prime-number
```


## License

MIT



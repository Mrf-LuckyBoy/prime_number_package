import { FindInLength } from "./types";

function isPrime(num: number){
    if(num==1 || num==0){
        return {message: ` ${num} is not a prime number`, isPrime: false};
    }
    if(num<0){
        return {message: `prime number can't be minus`};
    }
    for (let i = 2; i < num ;i++) {
        if(num % i == 0){
            return {message: ` ${num} is not a prime number`, isPrime: false};
        }
    }
    return {message: ` ${num} is a prime number`, isPrime: true};
}

function findPrimeInLength({start, end}: FindInLength){
    let tempstart = start;
    let res = [];
    if(start<0 || end<0){
        return {message: `prime number can't be minus`};
    }
    if(start>end){
        let temp = start;
        start = end;
        end = temp
    }
    for (start;start <= end; start++){
        if(isPrime(start).isPrime){
            res.push(start)
        }
    }
    if(res.length==0){
        return {message: `prime number between ${tempstart} and ${end} is ${res.length}`,
        primeList: res
        }
    }else{
        return {message: `prime number between ${tempstart} and ${end} is ${res.length}`,
        primeList: res
        }
    }
}

export {
    isPrime,findPrimeInLength
}


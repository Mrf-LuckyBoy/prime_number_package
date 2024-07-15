"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  findPrimeInLength: () => findPrimeInLength,
  isPrime: () => isPrime
});
module.exports = __toCommonJS(src_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  findPrimeInLength,
  isPrime
});

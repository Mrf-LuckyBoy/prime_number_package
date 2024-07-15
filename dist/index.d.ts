type FindInLength = {
    start: number;
    end: number;
};

declare function isPrime(num: number): {
    message: string;
    isPrime: boolean;
} | {
    message: string;
    isPrime?: undefined;
};
declare function findPrimeInLength({ start, end }: FindInLength): {
    message: string;
    primeList?: undefined;
} | {
    message: string;
    primeList: number[];
};

export { type FindInLength, findPrimeInLength, isPrime };

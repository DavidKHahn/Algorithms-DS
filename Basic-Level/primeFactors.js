function primeFactors(n) {
    var factors = [],
        divisor = 2;
    while (n > 2) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n = n/divisor;
        } else {
            return factors;
        }
    }
}

const returnIntoString = (n) => primeFactors(n).join()

console.log(returnIntoString(69))

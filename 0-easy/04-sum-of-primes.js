/**
 * SUM OF PRIMES
 * https://www.codeeval.com/open_challenges/4/
 *
 * Write a program which determines the sum of the first 1000 prime numbers.
 *
 * IN: N/A
 * OUT: Print to stdout the sum of the first 1000 prime numbers. (3682913)
 *
 */

class SumOfPrimes {
  constructor () {}
  
  isPrime(integer) {
    var numberToCheck = integer,
        divisor = 3;
    if (numberToCheck == 2) return true; // in order to start divisor at 3
    if (numberToCheck < 2 || numberToCheck % 2 == 0) return false;
    while(divisor * divisor <= numberToCheck) {
      if (numberToCheck % divisor == 0) {
        return false;
      }
      divisor = divisor + 2;
    }
    return true;
  }

  sumFirstThousandPrimes() {
    var primeCount = 0,
        sumOfPrimes = 0,
        currentNumber = 2; // 2 is the first prime number
    while (primeCount < 1000) {
      if (this.isPrime(currentNumber)) {
        sumOfPrimes += currentNumber;
        primeCount++;
      }
      currentNumber++;
    }
    console.log('Sum of first thousand prime numbers is:', sumOfPrimes);
  }
}

let SumOfPrimesInstance = new SumOfPrimes();

SumOfPrimesInstance.sumFirstThousandPrimes();


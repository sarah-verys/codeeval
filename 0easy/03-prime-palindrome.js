/* *
 * PRIME PALINDROME
 * https://www.codeeval.com/open_challenges/3/
 *
 * Write a program which determines the largest prime palindrome less than 1000.
 *
 * IN: N/A
 * OUT: Print to stdout the largest prime palindrome less than 1000. (929)
 */
class CodeEval {

  constructor () {
    // Empty...
  }

  isPrime (integer) {
    if (integer < 2) return false; // A prime number has only two factors; 1 is neither prime nor composite; negatives are not prime
    let number = integer,
        isPrime = true;
    for (let i = 2; i*i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
      }
    }
    return isPrime
  }

  isPalindrome (integer) {
    if (integer < 0) return false; // Negatives are not palindromes
    if (integer < 10) return true; // Single digits are palindromes
    let number = integer,
        numberReversed = 0,
        remainder = 0;
    while (number > 0) {
      remainder = number % 10; // Reference the rightmost digit (ten's spot) of the number 
      numberReversed = numberReversed * 10 + remainder; // Add it to the ten's spot of the reversed number
      number = Math.floor(number / 10); // Pop off the rightmost digit (ten's spot) of the number
    }
    return integer == numberReversed;
  }

  printPrimePalindrome (start) {
    if (isNaN(start)) throw `Invalid limit: ${start} (${typeof start})`;
    let largestPrimePalindrome = 0,
        limit = Number.parseInt(start);
    for (let i = limit; !largestPrimePalindrome && i > 2; i--) {
      if (this.isPrime(i) && this.isPalindrome(i)) {
        largestPrimePalindrome = i;
      }
    }
    console.log(`The largest prime palindrome of ${limit} is: ${largestPrimePalindrome}.`);
  }
}

let CodeEvalInstance = new CodeEval();
// Print Prime Palindrome
CodeEvalInstance.printPrimePalindrome(1000);

module.exports = CodeEval;

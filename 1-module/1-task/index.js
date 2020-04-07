/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */

function factorial(n) {
  let factNumber = 1;
  for(let i = 1; i <= n; i++){
      factNumber *= i;
  }
  return factNumber;
}
console.log(factorial(3));
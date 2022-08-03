/*
Find a pair of Prime Number whose sum in equal to N
input = 5
output = (2,3)
*/

// Generate all prime numbers less than n.
function SieveOfEratosthenes(n, isPrime) {
  // Initialize all entries of boolean
  // array as true. A value in isPrime[i]
  // will finally be false if i is Not a
  // prime, else true bool isPrime[n+1];
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i <= n; i++) isPrime[i] = true;

  for (let p = 2; p * p <= n; p++) {
    // If isPrime[p] is not changed,
    // then it is a prime
    if (isPrime[p] == true) {
      // Update all multiples of p
      for (let i = p * p; i <= n; i += p) isPrime[i] = false;
    }
  }
  return false;
}

// Prints a prime pair with given sum
function findPrimePair(n) {
  // Generating primes using Sieve
  let isPrime = new Array(n + 1);
  for (let i = 0; i < n + 1; i++) {
    isPrime[i] = false;
  }
  SieveOfEratosthenes(n, isPrime);

  // Traversing all numbers to find first
  // pair
  for (let i = 0; i < n; i++) {
    if (isPrime[i] && isPrime[n - i]) {
      console.log(i + " " + (n - i));
      return;
    }
  }
}

// Driver code
let n = 74;
findPrimePair(n);
findPrimePair(5);

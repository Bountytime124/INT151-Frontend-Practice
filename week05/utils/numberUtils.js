export function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

export function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

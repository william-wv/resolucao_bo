// Dado um número inteiro positivo, retorne se ele é primo.

const numPrimo = (n: number): boolean => {
  if (n == 1) {
    return true;
  } else if (n == 0) {
    return false;
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
};

console.log("o numero " + 10 + " é primo?", numPrimo(10));
console.log("o numero " + 1 + " é primo?", numPrimo(1));
console.log("o numero " + 5 + " é primo?", numPrimo(5));
console.log("o numero " + 0 + " é primo?", numPrimo(0));

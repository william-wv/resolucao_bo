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

console.log("o numero " + 4 + " é primo?", numPrimo(4));
console.log("o numero " + 11 + " é primo?", numPrimo(11));
console.log("o numero " + 121 + " é primo?", numPrimo(121));
console.log("o numero " + 999 + " é primo?", numPrimo(999));
console.log("o numero " + 997 + " é primo?", numPrimo(997));


// ados dois números inteiros positivos, A e B, retorne o primeiro múltiplo de A depois de B.

const multiplos = (n1: number, n2: number) => {
    
    while (n1 <= n2) {
        n1 += n1; 
    }
    return n1;
}


console.log(multiplos(4, 20)); 
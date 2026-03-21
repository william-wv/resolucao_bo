// Dados dois números inteiros positivos, A e B, retorne o primeiro múltiplo de A depois de B.

const multiplos = (a: number, b: number): number => {
  
    const resto = b % a; 
    console.log(resto +"-") // 0 e 1
    
    // 2. quanto falta para chegar no próximo múltiplo de 'A'
    const quantoFalta = a - resto; 
     console.log(quantoFalta + "--") // 2 e 2
    
    // 3. o que falta ao nosso número 'B' atual
    const proximoMultiplo = b + quantoFalta; 


    return proximoMultiplo;
}



console.log(multiplos(5, 13)); 

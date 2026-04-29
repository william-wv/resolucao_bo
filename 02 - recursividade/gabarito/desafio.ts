class PalindromoChecker {
    private texto: string;

    constructor(texto: string) {
    
        this.texto = texto.toLowerCase();
    }

    public ehPalindromo(): boolean {
   
        return this.aux(0, this.texto.length - 1);
    }

    private aux(inicio: number, fim: number): boolean {
        // Caso base 1: Os índices se cruzaram ou chegaram no meio da palavra.
        if (inicio >= fim) {
            return true;
        }

        // Caso base 2: As letras das pontas que estamos olhando agora são diferentes.

        if (this.texto[inicio] !== this.texto[fim]) {
            return false;
        }

        // Passo recursivo: as letras bateram. 
        // Chamamos a função de novo andando 1 passo para a direita (inicio + 1)
        // e 1 passo para a esquerda (fim - 1) para checar o próximo par.
        return this.aux(inicio + 1, fim - 1);
    }
}



const teste1 = new PalindromoChecker("arara");
console.log("arara é palíndromo?", teste1.ehPalindromo()); 

const teste2 = new PalindromoChecker("ovo");
console.log("ovo é palíndromo?", teste2.ehPalindromo());

const teste3 = new PalindromoChecker("javascript");
console.log("javascript é palíndromo?", teste3.ehPalindromo()); 
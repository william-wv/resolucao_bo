class Numeros {
    n: number;

    constructor(n: number) {
        this.n = n;
    }

    primeirosPrimos(): number[] {
        const listaPrimos: number[] = [];
        let candidato = 0; 

        while (listaPrimos.length < this.n) {
            let nPrimo = true; 
        
            if(candidato == 0 || candidato == 1){
                nPrimo = false
            }
            
            for (let i = 2; i < candidato; i++) {
                if (candidato % i === 0) {
                    nPrimo = false; 
                    break; 
                }
            }
            if (nPrimo) {
                listaPrimos.push(candidato);
            }
            candidato++; 
        }
        return listaPrimos;
    }
}

const gerador = new Numeros(25); 
console.log(gerador.primeirosPrimos());
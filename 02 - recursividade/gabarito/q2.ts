// CONTAGEM PROGRESSIVA – Dado um inteiro positivo n, realize a contagem progressiva de 1 até n.


export default class q2 {
    private n : number;

    constructor(n:number) {
        this.n = n
    }

    public contagemp() : string {
        return this.auxcontagemp(this.n)
    }

    private auxcontagemp(contagem:number) : string{

        if(contagem === 0) {
            return "" 
        }

        return this.auxcontagemp(contagem - 1) + contagem +"\n" ;

    }
}


const obj = new q2(3);
console.log(obj.contagemp());
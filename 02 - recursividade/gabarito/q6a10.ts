/*
    6. FATORIAL – Dado um inteiro n, retorne n!.

    7. POTÊNCIA – Dados a base e um expoente positivo, retorne base/expoente. Assuma o valor de n como base.

    8. FIBONACCI – Dado um inteiro positivo n, retorne o n-ésimo termo da série de Fibonacci. Saiba que
        os dois primeiros termos desta série são 1 e 1 e os demais são gerados a partir da soma dos
        anteriores: 1 1 2 3 5 8 13 21...

    9. TRIBONACCI  –  Este  exercício  é  uma  mera  progressão  do  anterior.  Dado  um  inteiro  positivo n, 
        imprima o n-ésimo termo da série de Tribonacci. Saiba que os três primeiros termos desta série são 
        1, 1 e 2; e os demais são gerados a partir da soma dos anteriores: 1 1 2 4 7 13 24 44...

    10. TETRANACCI – Este exercício é uma mera progressão do anterior (que é uma mera progressão do 
        anterior... e isso é recursividade). Dado um inteiro positivo n, imprima o n-ésimo termo da série de 
        Tetranacci.  Saiba  que  os  quatro  primeiros  termos  desta  série  são  1,  1,  2  e  4;  e  os  demais  são 
        gerados a partir da soma dos anteriores: 1 1 2 4 8 15 29 56...
*/

//Use a mesma classe para os exercícios 7, 8, 9 e 10.

export default class q6a10 {
  private n: number;

  constructor(n: number) {
    this.n = n;
  }

  public ex6(): number {
    return this.auxex6(this.n);
  }

  private auxex6(contador: number): number {
    if (contador <= 1) {
      return 1;
    }

    return contador * this.auxex6(contador - 1);
  }

  public ex7(): number {
    return this.auxex7(this.n, 4);
  }

  private auxex7(contador: number, expoente: number): number {
    if (expoente <= 0) {
      return 1;
    }

    return contador * this.auxex7(contador, expoente - 1);
  }

  public ex8(): number {
    return this.auxex8(this.n);
  }

  private auxex8(contador: number): number {
    if (contador <= 2 ) {
      return 1;
    }

    return this.auxex8(contador - 1) + this.auxex8(contador - 2);
  }

  public ex9() : number {
    return this.auxex9(this.n)
  }

  private auxex9(cont:number) :number{
    if (cont <= 2 ) {
        return 1 
    }
    if (cont == 3 ) {
        return 2
    }

    return this.auxex9(cont - 1) + this.auxex9(cont - 2) + this.auxex9(cont - 3)
  }

  public ex10():number {
    return this.auxex10(this.n);
  }

  private auxex10(c:number): number {
    if(c <= 2) return 1;
    
    if(c == 3) return 2;

    if(c == 4) return 4;
    
    return this.auxex10(c - 1) + this.auxex10(c - 2)+ this.auxex10(c - 3)+ this.auxex10(c - 4);
  }
}

const obj = new q6a10(8);

// 1 1 2 3 5 8 13

// console.log(obj.ex6());
// console.log(obj.ex7());
// console.log(obj.ex8());
// console.log(obj.ex9()); 
// console.log(obj.ex10());
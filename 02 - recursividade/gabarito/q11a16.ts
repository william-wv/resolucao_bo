/*

- Exercício 11
    PRIMEIRA OCORRÊNCIA – Dado um inteiro e uma matriz unidimensional de 20 inteiros (convenção 
    para os próximos exercícios), não ordenados, retorne a posição da primeira ocorrência do inteiro na 
    matriz. Caso não haja ocorrência, retorne -1.

- Exercício 12
    PRIMEIRA  OCORRÊNCIA  ORDENADO  –  Idem  ao  anterior,  mas  suponha  que  a  matriz 
    unidimensional esteja ordenada. Preze pela eficiência.

- Exercício 13
    MAIOR  ELEMENTO  –  Considere  a  mesma  matriz  unidimensional,  não  ordenada.  Retorne 
    recursivamente o maior elemento.

- Exercício 14
    SOMA  DOS  ELEMENTOS  –  Considere  a  mesma  matriz  unidimensional,  não  ordenada.  Retorne 
    recursivamente soma dos elementos.

- Exercício 15
    NÚMERO DE OCORRÊNCIAS – Considere a mesma matriz unidimensional, não ordenada. Dado um 
    inteiro, retorne recursivamente quantas ocorrências deste há na matriz.

- Exercício 16
    ESTÁ ORDENADO – Considere a mesma matriz unidimensional, não ordenada. Retorne se a matriz 
    unidimensional está em ordem crescente. Verifique recursivamente

*/

export default class q11a16 {
  private list: number[];

  constructor(list: number[]) {
    this.list = list;
  }

  public ex11(alvo: number): number {
    return this.aux11(alvo, 0);
  }

  private aux11(alvo: number, indice: number): number {
    if (indice >= this.list.length) {
      return -1;
    }

    if (this.list[indice] === alvo) {
      return indice;
    }

    return this.aux11(alvo, indice + 1);
  }

  public ex12(alvo: number): number {
    return this.aux12(alvo, 0);
  }

  private aux12(alvo: number, i: number): number {
    if (i > this.list.length) return -1;

    if (this.list[i] === alvo) return i;

    return this.aux12(alvo, i + 1);
  }

  public ex13(): number {
    return this.aux13(0);
  }

  private aux13(index: number): number {
    if (index === this.list.length - 1) return this.list[index];

    const maiorDoResto = this.aux13(index + 1);

    return this.list[index] > maiorDoResto ? this.list[index] : maiorDoResto;
  }

  public ex14(): number {
    return this.aux14(0);
  }

  private aux14(index: number): number {
    if (index >= this.list.length) {
      return 0;
    }

    return this.list[index] + this.aux14(index + 1);
  }

  public ex15(acha:number) :number{
    return this.auxex15(0,acha)

  }

  private auxex15(index:number, x:number):number{
    if (index >= this.list.length) {
      return 0;
    }

    let acha:number = 0
    if(this.list[index] === x) acha++

    return acha + this.auxex15(index+1 , x)
  }

  public ex16(): boolean {
    return this.auxex16(0);
  }

  private auxex16(i: number): boolean {
    if (i >= this.list.length - 1) {
      return true;
    }

    if (this.list[i] > this.list[i + 1]) {
      return false;
    }

    return this.auxex16(i + 1);
  }
}
/* ex 11
const obj = new q11a16([1,6,2,8,10])
console.log(obj.ex11(10))
*/

/* ex12
const obj = new q11a16([1,2,3,4,5])
console.log(obj.ex12(5))
*/

/* ex 13
const obj = new q11a16([1, 6, 2, 8, 10]);
console.log(obj.ex13())
*/

/*
const obj = new q11a16([1, 2, 1, 3, 4]);
console.log(obj.ex14());
*/

/*
const obj = new q11a16([1, 0, 0, 11, 0]);
console.log(obj.ex15(1));
*/

const obj = new q11a16([1, 2, 3, 4, 5]);
console.log(obj.ex16());
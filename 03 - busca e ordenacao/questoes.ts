export default class questoes {
  private list: number[];

  constructor(list: number[]) {
    this.list = list;
  }

  public ex1(): number[] {
    /* 
    1. ORDENA TRÊS – Modele uma classe que tenha três atributos inteiros (recebidos pelo construtor).
        Implemente um método que ordene esses três valores inteiros. 
        Três estruturas condicionais (todas sem o bloco de caso-contrário) são suficientes. 
        Não use métodos pré-definidos de ordenação.
*/
    let aux: number;

    let a: number = this.list[0];
    let b: number = this.list[1];
    let c: number = this.list[2];

    if (a > b) {
      aux = a;
      a = b;
      b = aux;
    }

    if (a > c) {
      aux = a;
      a = c;
      c = aux;
    }

    if (b > c) {
      aux = b;
      b = c;
      c = aux;
    }

    return [a, b, c];
  }

  public ex2(): number {
    /*
    2. MAIOR DE TRÊS – Na mesma classe do exercício anterior, 
        implemente um método que encontre o maior dos três valores. 
        Duas estruturas condicionais (todas sem o bloco de caso-contrário) são suficientes. 
        Não use método pré-definido para retornar o maior valor.
*/

    let a: number = this.list[0];
    let b: number = this.list[1];
    let c: number = this.list[2];

    let aux: number = a;

    if (aux <= b) {
      aux = b;
    }

    if (aux <= c) {
      aux = c;
    }

    return aux;
  }

  public ex3(): Array<Object> {
    /*
3. BARALHO – Com o uso do baralho, aplique os algoritmos de ordenação Selection Sort, Bubble Sort e
    Insertion Sort aos seguintes arranjos. Obtenha o número de comparações e o número de trocas feitas
    em cada um dos casos. Use cartas de 1 a 10 de um mesmo naipe (considere que o ás é o 1).
        (a) Primeiro arranjo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1.
        (b) Segundo arranjo: 10, 1, 9, 2, 8, 3, 7, 4, 6, 5.
        (c) Terceiro arranjo: 4, 5, 6, 1, 2, 3, 7, 8, 9, 10.
*/
    const PA: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const SA: number[] = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];
    const TA: number[] = [4, 5, 6, 1, 2, 3, 7, 8, 9, 10];

    // --- BUBBLE SORT ---
    function bubbleSort(arr: number[]) {
      let clone = [...arr],
        comparacoes = 0,
        trocas = 0;
      for (let i = 0; i < clone.length; i++) {
        for (let j = 0; j < clone.length - 1 - i; j++) {
          comparacoes++;
          if (clone[j] > clone[j + 1]) {
            [clone[j], clone[j + 1]] = [clone[j + 1], clone[j]];
            trocas++;
          }
        }
      }
      return { comparacoes, trocas };
    }

    // --- SELECTION SORT ---
    function selectionSort(arr: number[]) {
      let clone = [...arr],
        comparacoes = 0,
        trocas = 0;
      for (let i = 0; i < clone.length; i++) {
        let min = i;
        for (let j = i + 1; j < clone.length; j++) {
          comparacoes++;
          if (clone[j] < clone[min]) min = j;
        }
        if (min !== i) {
          [clone[i], clone[min]] = [clone[min], clone[i]];
          trocas++;
        }
      }
      return { comparacoes, trocas };
    }

    // --- INSERTION SORT ---
    function insertionSort(arr: number[]) {
      let clone = [...arr],
        comparacoes = 0,
        trocas = 0;
      for (let i = 1; i < clone.length; i++) {
        let atual = clone[i];
        let j = i - 1;
        // A comparação acontece aqui no while
        while (j >= 0) {
          comparacoes++;
          if (clone[j] > atual) {
            clone[j + 1] = clone[j];
            trocas++;
            j--;
          } else {
            break;
          }
        }
        clone[j + 1] = atual;
      }
      return { comparacoes, trocas };
    }

    return [
      {
        arranjo_A: {
          bubble: bubbleSort(PA),
          selection: selectionSort(PA),
          insertion: insertionSort(PA),
        },
        arranjo_B: {
          bubble: bubbleSort(SA),
          selection: selectionSort(SA),
          insertion: insertionSort(SA),
        },
        arranjo_C: {
          bubble: bubbleSort(TA),
          selection: selectionSort(TA),
          insertion: insertionSort(TA),
        },
      },
    ];
  }

  public ex4(): boolean {
    /*
4. CRESCENTE – Modele uma classe que tenha como atributo uma uma matriz unidimensional de 20
    inteiros (recebida pelo construtor). Implemente um método iterativo que retorne se essa matriz está
    em ordem crescente. 
    Abandone a verificação tão logo se perceba o contrário.
*/

    for (let i = 0; i < this.list.length - 1; i++) {
      if (this.list[i] > this.list[i + 1]) return false;
    }
    return true;
  }

  public ex5(): number[] {
    /*
5.  BUBBLE MELHORADO – Na mesma classe do exercício anterior, implemente um aperfeiçoamento
     do Bubble Sort em que o método seja interrompido caso não ocorram trocas durante uma iteração do
     laço mais externo.
*/
    for (let i = 0; i < this.list.length - 1; i++) {
      let trocou: boolean = false;
      for (let j = 0; j < this.list.length - 1 - i; j++) {
        if (this.list[j] > this.list[j + 1]) {
          let aux: number = this.list[j];
          this.list[j] = this.list[j + 1];
          this.list[j + 1] = aux;
          trocou = true;
        }
      }

      if (!trocou) {
        break;
      }
    }
    return this.list;
  }

  public ex6() {
    /*
6. EMBARALHAR – Na mesma classe do Exercício 4, implemente um método iterativo que embaralhe a
    matriz unidimensional.
*/
    for(let i = 0; i < this.list.length ;i++) {
      
    }
  }

  public ex7(): number[] {
    let i = 0;
    while (i < this.list.length) {

      if(i == 0 || this.list[i] >= this.list[i - 1]) {
        i++;
      } else {
        [this.list[i], this.list[i - 1]] = [this.list[i - 1], this.list[i]];
        i--;
      }

    }
    return this.list;
  }

  public ex15(grid: number[][]): boolean {
    /*
    15. SUDOKU – Dado um grid 9x9 com uma solução de Sudoku, verifique se é válida.
        Para cada célula [i][j], verificar se o valor (1-9) não repete na linha, coluna e região 3x3.
        Usa busca sequencial com early exit — interrompe assim que encontrar violação.
    */

    // Busca sequencial em dados desordenados.
    // Para cada elemento na posição k, verifica se o mesmo valor
    // aparece em alguma posição m > k (evita comparar o mesmo par duas vezes).2
    // Retorna true (early exit) na primeira duplicata encontrada.
    function temDuplicata(arr: number[]): boolean {
      for (let k = 0; k < arr.length; k++) {
        for (let m = k + 1; m < arr.length; m++) {
          if (arr[k] === arr[m]) return true; // violação encontrada: para imediatamente
        }
      }
      return false;
    }

    // Percorre todas as 81 células do grid (9 linhas x 9 colunas)
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {

        // Linha: todos os 9 elementos da linha i
        const linha: number[] = grid[i];

        // Coluna: percorre as 9 linhas sempre na coluna j
        const coluna: number[] = [];
        for (let k = 0; k < 9; k++) coluna.push(grid[k][j]);

        // Região 3x3: Math.floor(i/3)*3 arredonda para baixo ao múltiplo de 3
        // mais próximo — isso dá o índice da primeira linha do bloco.
       2 // Ex: i=4 → Math.floor(4/3)*3 = 1*3 = 3  (bloco começa na linha 3)
        //     i=7 → Math.floor(7/3)*3 = 2*3 = 6  (bloco começa na linha 6)
        const regiao: number[] = [];
        const linhaBase = Math.floor(i / 3) * 3;
        const colunaBase = Math.floor(j / 3) * 3;
        for (let k = linhaBase; k < linhaBase + 3; k++)
          for (let m = colunaBase; m < colunaBase + 3; m++)
            regiao.push(grid[k][m]);

        // Se qualquer uma das três restrições for violada, a solução é inválida.
        // O || avalia da esquerda para a direita e para no primeiro true (short-circuit).
        if (temDuplicata(linha) || temDuplicata(coluna) || temDuplicata(regiao))
          return false;
      }
    }

    return true;
  }
}

# Questões sobre Recursividade

---

## Q1 – MENSAGEM

A função abaixo exibe uma mensagem `n` vezes usando recursão:

```ts
private auxmensagem(contador: number): string {
  if (contador === 0) return "";
  return "mensagem\n" + this.auxmensagem(contador - 1);
}
```

**1.** Qual é o caso base dessa função? O que acontece se `contador` for 0?

**2.** Qual será a saída de `new q1(3).mensagem()`? Escreva exatamente o que é impresso.

**3.** O que aconteceria se o caso base fosse `contador < 0` em vez de `contador === 0`? Haveria alguma diferença de comportamento para entradas positivas?

**4.** Reescreva `auxmensagem` de forma que a mensagem apareça na ordem inversa (do 1 ao n, não do n ao 1 — observe a ordem das chamadas recursivas).

---

## Q2 – CONTAGEM PROGRESSIVA

```ts
private auxcontagemp(contagem: number): string {
  if (contagem === 0) return "";
  return this.auxcontagemp(contagem - 1) + contagem + "\n";
}
```

**5.** Por que a chamada recursiva aparece *antes* de `contagem` na expressão de retorno? O que mudaria se a ordem fosse invertida (`contagem + "\n" + this.auxcontagemp(contagem - 1)`)?

**6.** Qual será a saída de `new q2(5).contagemp()`?

**7.** Implemente uma versão `contagemRegressiva(n)` que conta de `n` até `1` usando recursão.

---

## Q6 – FATORIAL

```ts
private auxex6(contador: number): number {
  if (contador <= 1) return 1;
  return contador * this.auxex6(contador - 1);
}
```

**8.** Calcule manualmente as chamadas recursivas de `auxex6(4)`, mostrando a pilha de execução passo a passo.

**9.** O que retorna `auxex6(0)`? E `auxex6(1)`? Por que o caso base cobre ambos?

**10.** Qual é a complexidade de tempo do fatorial recursivo em função de `n`?

---

## Q7 – POTÊNCIA

```ts
private auxex7(contador: number, expoente: number): number {
  if (expoente <= 0) return 1;
  return contador * this.auxex7(contador, expoente - 1);
}
```

**11.** O expoente está fixo em `4` no método público `ex7()`. Modifique a classe para que o expoente também seja configurável via construtor.

**12.** Qual o resultado de `auxex7(3, 3)`? Mostre o passo a passo.

**13.** Qual o caso base e por que ele retorna `1`?

---

## Q8 – FIBONACCI

```ts
private auxex8(contador: number): number {
  if (contador <= 2) return 1;
  return this.auxex8(contador - 1) + this.auxex8(contador - 2);
}
```

**14.** Quais são os primeiros 7 termos da série de Fibonacci? Liste-os.

**15.** Qual o resultado de `auxex8(6)`?

**16.** Essa implementação recalcula subproblemas múltiplas vezes. Explique por que isso é ineficiente e sugira uma estratégia para melhorar (não precisa implementar).

**17.** Quantas chamadas recursivas são feitas para `auxex8(5)`? Trace a árvore de chamadas.

---

## Q9 – TRIBONACCI

```ts
private auxex9(cont: number): number {
  if (cont <= 2) return 1;
  if (cont === 3) return 2;
  return this.auxex9(cont - 1) + this.auxex9(cont - 2) + this.auxex9(cont - 3);
}
```

**18.** Qual é a diferença entre Fibonacci e Tribonacci em termos das chamadas recursivas?

**19.** Quais são os primeiros 7 termos da série de Tribonacci?

**20.** Qual o resultado de `auxex9(7)`?

---

## Q10 – TETRANACCI

**21.** A série de Tetranacci começa com `1, 1, 2, 4`. Quantos casos base são necessários para implementá-la? Por quê?

**22.** Qual o resultado de `auxex10(6)`?

**23.** Compare os casos base de Fibonacci, Tribonacci e Tetranacci. Que padrão você observa?

---

## Q11 – PRIMEIRA OCORRÊNCIA (não ordenado)

```ts
private aux11(alvo: number, indice: number): number {
  if (indice >= this.list.length) return -1;
  if (this.list[indice] === alvo) return indice;
  return this.aux11(alvo, indice + 1);
}
```

**24.** Dado o array `[1, 6, 2, 8, 10]`, qual o resultado de `ex11(8)`?

**25.** O que retorna `ex11(99)` para qualquer array que não contém `99`?

**26.** Qual a complexidade de tempo no pior caso para essa busca?

---

## Q12 – PRIMEIRA OCORRÊNCIA (ordenado)

**27.** O enunciado pede que se "preze pela eficiência" para array ordenado. A implementação atual em `ex12` faz busca linear. Como você implementaria uma busca binária recursiva para melhorar a eficiência?

**28.** Qual a diferença de complexidade entre a busca linear (`ex11`) e uma busca binária recursiva (`ex12` otimizado)?

---

## Q13 – MAIOR ELEMENTO

```ts
private aux13(index: number): number {
  if (index === this.list.length - 1) return this.list[index];
  const maiorDoResto = this.aux13(index + 1);
  return this.list[index] > maiorDoResto ? this.list[index] : maiorDoResto;
}
```

**29.** Dado o array `[3, 7, 1, 9, 2]`, qual o resultado de `ex13()`? Trace as chamadas recursivas.

**30.** Por que o caso base é `index === this.list.length - 1` e não `index >= this.list.length`?

**31.** Adapte a função para retornar o **menor** elemento em vez do maior.

---

## Q14 – SOMA DOS ELEMENTOS

```ts
private aux14(index: number): number {
  if (index >= this.list.length) return 0;
  return this.list[index] + this.aux14(index + 1);
}
```

**32.** Dado `[1, 2, 1, 3, 4]`, qual o resultado de `ex14()`?

**33.** Por que o caso base retorna `0` (e não `1` ou outro valor)?

**34.** Reescreva `aux14` para calcular o **produto** dos elementos em vez da soma.

---

## Q15 – NÚMERO DE OCORRÊNCIAS

```ts
private auxex15(index: number, x: number): number {
  if (index >= this.list.length) return 0;
  let acha: number = 0;
  if (this.list[index] === x) acha++;
  return acha + this.auxex15(index + 1, x);
}
```

**35.** Dado `[1, 0, 0, 11, 0]`, qual o resultado de `ex15(0)`?

**36.** A variável local `acha` dentro da recursão é necessária? Reescreva de forma mais concisa sem ela.

---

## Q16 – ESTÁ ORDENADO

```ts
private auxex16(i: number): boolean {
  if (i >= this.list.length - 1) return true;
  if (this.list[i] > this.list[i + 1]) return false;
  return this.auxex16(i + 1);
}
```

**37.** Dado `[1, 2, 3, 4, 5]`, qual o resultado de `ex16()`?

**38.** Dado `[1, 3, 2, 4, 5]`, qual o resultado de `ex16()`? Em qual índice a recursão para?

**39.** Adapte a função para verificar se o array está em ordem **decrescente**.

**40.** Por que o caso base usa `i >= this.list.length - 1` e não `i >= this.list.length`?

---

## DESAFIO – PALÍNDROMO

```ts
private aux(inicio: number, fim: number): boolean {
  if (inicio >= fim) return true;
  if (this.texto[inicio] !== this.texto[fim]) return false;
  return this.aux(inicio + 1, fim - 1);
}
```

**41.** Para a palavra `"arara"`, trace todas as chamadas recursivas de `aux`, mostrando os valores de `inicio` e `fim` em cada passo.

**42.** Por que o caso base é `inicio >= fim` (e não apenas `inicio === fim`)?

**43.** O construtor converte o texto para minúsculas. Por que isso é importante para a verificação de palíndromo?

**44.** A palavra `"racecar"` é um palíndromo? Verifique usando a lógica da função.

**45.** Adapte a classe para ignorar também espaços, permitindo verificar frases como `"a man a plan a canal panama"`.

---

## Questões Gerais sobre Recursividade

**46.** O que é um **caso base** em recursão? O que acontece se uma função recursiva não tiver caso base?

**47.** O que é uma **pilha de chamadas (call stack)**? Como a recursão a utiliza?

**48.** Qual a diferença entre recursão **direta** e recursão **indireta**?

**49.** Em todas as implementações acima, os métodos públicos chamam métodos auxiliares privados. Por que isso é uma boa prática de design?

**50.** Em quais dos exercícios acima a recursão poderia ser facilmente substituída por um laço `for` ou `while`? Em quais seria mais difícil? Justifique.

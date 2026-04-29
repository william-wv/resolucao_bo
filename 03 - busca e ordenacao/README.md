# ED2 - Metodos de Busca e Ordenacao

Conteudo do Prof. Dr. Eleandro Maschio - UTFPR Campus Guarapuava.

## Conceitos Fundamentais

**Ordenacao** e o processo de arranjar dados em ordem (crescente ou decrescente).
**Busca** e o processo de encontrar um dado especifico dentro de um conjunto.

A ordenacao existe para **facilitar a busca**. Dados ordenados permitem algoritmos de busca muito mais rapidos.

**Chave de ordenacao**: a parte do dado que voce usa para comparar. Exemplos:
- CPF numa lista de funcionarios
- Nota num ranking de alunos
- Data numa lista de transacoes bancarias

---

## Algoritmos de Ordenacao

### 1. Selection Sort (Selecao)

**Ideia**: percorre o array, encontra o menor elemento e coloca na posicao correta.

**Passo a passo** com `[4, 3, 5, 1, 6, 2]`:
```
Passo 1: encontra o menor (1), troca com posicao 0  -> [1, 3, 5, 4, 6, 2]
Passo 2: encontra o menor restante (2), troca com 1 -> [1, 2, 5, 4, 6, 3]
Passo 3: encontra o menor restante (3), troca com 2 -> [1, 2, 3, 4, 6, 5]
Passo 4: 4 ja esta no lugar                         -> [1, 2, 3, 4, 6, 5]
Passo 5: encontra o menor restante (5), troca com 4 -> [1, 2, 3, 4, 5, 6]
```

**Implementacao em TypeScript:**
```typescript
selectionSort(dados: number[]): void {
    for (let i = 0; i < dados.length - 1; i++) {
        let menor = i;
        for (let j = i + 1; j < dados.length; j++) {
            if (dados[j] < dados[menor])
                menor = j;
        }
        if (i !== menor) {
            const aux = dados[i];
            dados[i] = dados[menor];
            dados[menor] = aux;
        }
    }
}
```

**Caracteristicas:**
- Complexidade: O(n^2)
- Faz no maximo n-1 trocas (bom quando trocar e caro)
- Nao e estavel (pode mudar a ordem de elementos iguais)

---

### 2. Bubble Sort (Troca)

**Ideia**: compara pares adjacentes e troca se estiverem fora de ordem. A cada passada, o maior "borbulha" para o final.

**Passo a passo** com `[5, 2, 4, 6, 1, 3]`:
```
Passada 1: compara 5-2 (troca), 5-4 (troca), 5-6 (ok), 6-1 (troca), 6-3 (troca)
           -> [2, 4, 5, 1, 3, 6]   (6 ja esta no final)
Passada 2: -> [2, 4, 1, 3, 5, 6]   (5 no lugar)
Passada 3: -> [2, 1, 3, 4, 5, 6]   (4 no lugar)
Passada 4: -> [1, 2, 3, 4, 5, 6]   (pronto!)
```

**Implementacao em TypeScript:**
```typescript
bubbleSort(dados: number[]): void {
    for (let i = 0; i < dados.length - 1; i++) {
        for (let j = 0; j < dados.length - i - 1; j++) {
            if (dados[j] > dados[j + 1]) {
                const aux = dados[j];
                dados[j] = dados[j + 1];
                dados[j + 1] = aux;
            }
        }
    }
}
```

**Versao melhorada** (para o Exercicio 5 — interrompe se nenhuma troca ocorreu):
```typescript
bubbleSortMelhorado(dados: number[]): void {
    for (let i = 0; i < dados.length - 1; i++) {
        let trocou = false;
        for (let j = 0; j < dados.length - i - 1; j++) {
            if (dados[j] > dados[j + 1]) {
                const aux = dados[j];
                dados[j] = dados[j + 1];
                dados[j + 1] = aux;
                trocou = true;  
            }
        }
        if (!trocou) break;
    }
}
```

**Caracteristicas:**
- Complexidade: O(n^2)
- Estavel (mantem a ordem de elementos iguais)
- Versao melhorada: se o array ja esta ordenado, faz apenas 1 passada -> O(n)

---

### 3. Insertion Sort (Insercao)

**Ideia**: funciona como ordenar cartas na mao. Pega cada carta e insere na posicao correta entre as que ja estao ordenadas.

**Passo a passo** com `[5, 2, 4, 6, 1, 3]`:
```
Inicio:   [5] | 2, 4, 6, 1, 3    (5 sozinho ja esta "ordenado")
Passo 1:  pega 2, insere antes do 5     -> [2, 5] | 4, 6, 1, 3
Passo 2:  pega 4, insere entre 2 e 5    -> [2, 4, 5] | 6, 1, 3
Passo 3:  pega 6, ja esta no lugar      -> [2, 4, 5, 6] | 1, 3
Passo 4:  pega 1, insere no inicio      -> [1, 2, 4, 5, 6] | 3
Passo 5:  pega 3, insere entre 2 e 4    -> [1, 2, 3, 4, 5, 6]
```

**Implementacao sem array auxiliar (in-place):**
```typescript
insertionSort(dados: number[]): void {
    for (let i = 1; i < dados.length; i++) {
        const atual = dados[i];
        let j = i - 1;
        while (j >= 0 && dados[j] > atual) {
            dados[j + 1] = dados[j];
            j--;
        }
        dados[j + 1] = atual;
    }
}
```

**Implementacao com array auxiliar:**
```typescript
insertionSortAux(dados: number[]): number[] {
    const novo: number[] = [];
    for (let i = 0; i < dados.length; i++) {
        let j = novo.length;
        while (j > 0 && dados[i] < novo[j - 1]) {
            j--;
        }
        novo.splice(j, 0, dados[i]);
    }
    return novo;
}
```

**Caracteristicas:**
- Complexidade: O(n^2)
- Estavel
- Muito eficiente para arrays pequenos ou quase ordenados

---

### 4. Shell Sort

**Ideia**: e um Insertion Sort turbinado. Em vez de comparar elementos adjacentes (distancia 1), compara elementos distantes. A distancia (gap) vai diminuindo ate chegar em 1.

**Como funciona** com gap = TAM/2:
```
Array: [9, 8, 7, 6, 5, 4, 3, 2, 1]  (TAM = 9)
Gap 4: compara elementos com distancia 4 (insertion sort com passo 4)
Gap 2: compara com distancia 2
Gap 1: insertion sort normal, mas o array ja esta quase ordenado!
```

**Implementacao em TypeScript:**
```typescript
shellSort(dados: number[]): void {
    let h = Math.floor(dados.length / 2);
    while (h > 0) {
        for (let i = h; i < dados.length; i++) {
            const atual = dados[i];
            let j = i;
            while (j >= h && dados[j - h] > atual) {
                dados[j] = dados[j - h];
                j -= h;
            }
            dados[j] = atual;
        }
        h = Math.floor(h / 2);
    }
}
```

**Caracteristicas:**
- E o algoritmo O(n^2) mais rapido na pratica
- A complexidade exata depende da sequencia de gaps escolhida
- Nao e estavel

---

### 5. Merge Sort (Divisao e Conquista)

**Ideia**: divide o array ao meio recursivamente ate ter arrays de 1 elemento, depois vai juntando (merge) de forma ordenada.

**Passo a passo** com `[6, 1, 3, 8, 7, 2, 5, 4]`:
```
DIVIDIR:
[6,1,3,8,7,2,5,4]
[6,1,3,8]           [7,2,5,4]
[6,1]    [3,8]      [7,2]    [5,4]
[6] [1]  [3] [8]    [7] [2]  [5] [4]

CONQUISTAR + COMBINAR (de baixo para cima):
[1,6]    [3,8]      [2,7]    [4,5]
[1,3,6,8]           [2,4,5,7]
[1,2,3,4,5,6,7,8]
```

**Implementacao em TypeScript:**
```typescript
mergeSort(dados: number[], inicio: number, fim: number): void {
    if (inicio < fim) {
        const meio = Math.floor((inicio + fim) / 2);
        this.mergeSort(dados, inicio, meio);
        this.mergeSort(dados, meio + 1, fim);
        this.merge(dados, inicio, meio, fim);
    }
}

merge(dados: number[], inicio: number, meio: number, fim: number): void {
    const esquerda = dados.slice(inicio, meio + 1);
    const direita = dados.slice(meio + 1, fim + 1);

    let i = 0, j = 0, k = inicio;
    while (i < esquerda.length && j < direita.length) {
        if (esquerda[i] <= direita[j]) {
            dados[k++] = esquerda[i++];
        } else {
            dados[k++] = direita[j++];
        }
    }
    while (i < esquerda.length) dados[k++] = esquerda[i++];
    while (j < direita.length) dados[k++] = direita[j++];
}
```

**Caracteristicas:**
- Complexidade: O(n log n) sempre (melhor, medio e pior caso)
- Precisa de memoria extra O(n) para o merge
- Estavel
- A **divisao e trivial** (corta no meio), o **esforco esta na combinacao** (merge)

---

### 6. Quick Sort (Divisao e Conquista)

**Ideia**: escolhe um pivo, coloca todos os menores a esquerda e os maiores a direita, depois repete recursivamente em cada lado.

**Passo a passo** com `[2, 9, 7, 4, 5, 6, 3, 1, 8, 0]` (pivo = elemento do meio):
```
Pivo = 5
Menores que 5: [2, 4, 3, 1, 0]    Pivo: [5]    Maiores: [9, 7, 6, 8]
Repete recursivamente em cada lado...
Resultado: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

**Escolha do pivo** (muito importante!):
- Primeiro/ultimo elemento: ruim se dados ja estao ordenados (gera particoes vazias)
- Elemento do meio: boa opcao geral
- Mediana de tres: melhor opcao
- Aleatorio: evita pior caso

**Implementacao em TypeScript:**
```typescript
quickSort(dados: number[], inicio: number, fim: number): void {
    let i = inicio;
    let j = fim;
    const pivo = dados[Math.floor((inicio + fim) / 2)];

    while (i <= j) {
        while (dados[i] < pivo) i++;
        while (dados[j] > pivo) j--;
        if (i <= j) {
            const aux = dados[i];
            dados[i] = dados[j];
            dados[j] = aux;
            i++;
            j--;
        }
    }

    if (j > inicio) this.quickSort(dados, inicio, j);
    if (i < fim) this.quickSort(dados, i, fim);
}
```

**Caracteristicas:**
- Complexidade media: O(n log n), pior caso: O(n^2) — raro com boa escolha de pivo
- In-place (memoria extra: O(log n) pela pilha de recursao)
- Nao e estavel
- O **esforco esta na divisao** (particionamento), a **combinacao e trivial**

### Quick Sort vs Merge Sort

| Aspecto | Quick Sort | Merge Sort |
|---------|-----------|------------|
| Onde esta o trabalho | Na DIVISAO (particionar) | Na COMBINACAO (merge) |
| Memoria extra | O(log n) | O(n) |
| Pior caso | O(n^2) | O(n log n) |
| Caso medio | O(n log n) | O(n log n) |
| Estavel? | Nao | Sim |

---

## Algoritmos de Busca

### 1. Busca Sequencial (Dados Desordenados)

Percorre elemento por elemento do inicio ao fim.

```typescript
buscaSequencial(dados: number[], chave: number): number {
    for (let i = 0; i < dados.length; i++) {
        if (dados[i] === chave) return i;
    }
    return -1;
}
```

- Melhor caso: 1 comparacao (achou de primeira)
- Pior caso: n comparacoes (ultimo elemento ou nao existe)
- Media: n/2 comparacoes

### 2. Busca Sequencial (Dados Ordenados)

Igual a anterior, mas pode parar mais cedo: se encontrar um valor **maior** que o procurado, ja sabe que nao existe.

```typescript
buscaSequencialOrdenada(dados: number[], chave: number): number {
    for (let i = 0; i < dados.length; i++) {
        if (dados[i] === chave) return i;
        if (dados[i] > chave) return -1;
    }
    return -1;
}
```

### 3. Busca Binaria

**So funciona em dados ordenados.** Usa dividir para conquistar: olha o meio, decide se vai para esquerda ou direita.

**Exemplo**: procurando 31 em `[3, 7, 8, 12, 16, 22, 27, 31, 45]`:
```
Tentativa 1: meio = indice 4 -> valor 16. 31 > 16, vai para direita [22, 27, 31, 45]
Tentativa 2: meio = indice 6 -> valor 27. 31 > 27, vai para direita [31, 45]
Tentativa 3: meio = indice 7 -> valor 31. Encontrou! Retorna 7.
```
Apenas 3 comparacoes em vez de 8 (sequencial). Melhora de 62,5%.

```typescript
buscaBinaria(dados: number[], chave: number): number {
    let inicio = 0;
    let fim = dados.length - 1;

    while (inicio <= fim) {
        const meio = Math.floor((inicio + fim) / 2);
        if (dados[meio] === chave) return meio;
        if (dados[meio] > chave) {
            fim = meio - 1;
        } else {
            inicio = meio + 1;
        }
    }
    return -1;
}
```

- Melhor caso: 1 comparacao (achou no meio)
- Pior caso: log2(n) comparacoes
- Para 100 elementos: max 7 comparacoes vs 100 da sequencial
- Para 100.000 elementos: max 17 comparacoes vs 100.000 da sequencial

### 4. Busca por Interpolacao

Variacao da binaria que **estima** a posicao em vez de sempre ir ao meio. Como procurar um nome no dicionario: se procura "Wagner", abre perto do final.

```typescript
buscaInterpolacao(dados: number[], chave: number): number {
    let inicio = 0;
    let fim = dados.length - 1;

    while (inicio <= fim && chave >= dados[inicio] && chave <= dados[fim]) {
        const meio = inicio + Math.floor(
            ((fim - inicio) * (chave - dados[inicio])) / (dados[fim] - dados[inicio])
        );
        if (dados[meio] === chave) return meio;
        if (dados[meio] < chave) inicio = meio + 1;
        else fim = meio - 1;
    }
    return -1;
}
```

- Com dados uniformemente distribuidos: O(log2(log2(n)))
- Com dados nao uniformes: pode degradar ate O(n)

---

## Tabela Comparativa Final

### Ordenacao

| Algoritmo         | Melhor        | Medio        |  Pior     | Memoria  | Estavel |
|-------------------|---------------|--------------|-----------|----------|---------|
| Selection Sort    | O(n^2)        | O(n^2)       | O(n^2)    | O(1)     | Nao     |
| Bubble Sort       | O(n)*         | O(n^2)       | O(n^2)    | O(1)     | Sim     |
| Insertion Sort    | O(n)**        | O(n^2)       | O(n^2)    | O(1)     | Sim     |
| Shell Sort        | O(n log n)    | depende      | O(n^2)    | O(1)     | Nao     |
| Merge Sort        | O(n log n)    | O(n log n)   | O(n log n)| O(n)     | Sim     |
| Quick Sort        | O(n log n)    | O(n log n)   | O(n^2)    | O(log n) | Nao     |

\* com versao melhorada, em array ja ordenado
\** em array ja ordenado

### Busca

| Algoritmo             | Requisito                   | Melhor | Pior         |
|-----------------------|-----------------------------|--------|--------------|
| Sequencial            | Nenhum                      | O(1)   | O(n)         |
| Sequencial Ordenada   | Dados ordenados             | O(1)   | O(n)         |
| Binaria               | Dados ordenados             | O(1)   | O(log n)     |
| Interpolacao          | Dados ordenados + uniformes | O(1)   | O(log log n) |

---

## Guia dos Exercicios

### Exercicio 1 — ORDENA TRES
Ordenar 3 numeros usando apenas `if` (sem `else`). Dica: 3 comparacoes com troca resolvem.
```
if (a > b) troca(a, b)
if (a > c) troca(a, c)
if (b > c) troca(b, c)
```

### Exercicio 2 — MAIOR DE TRES
Encontrar o maior de 3 valores usando 2 condicionais sem `else`. Dica:
```
maior = a
if (b > maior) maior = b
if (c > maior) maior = c
```

### Exercicio 3 — BARALHO
Aplicar Selection Sort, Bubble Sort e Insertion Sort manualmente (teste de mesa) nos arranjos dados. Contar comparacoes e trocas para cada um.

### Exercicio 4 — CRESCENTE
Classe com array de 20 inteiros. Metodo que verifica se esta em ordem crescente, retornando `false` assim que encontrar um elemento fora de ordem.
```typescript
isCrescente(): boolean {
    for (let i = 0; i < this.dados.length - 1; i++) {
        if (this.dados[i] > this.dados[i + 1]) return false;
    }
    return true;
}
```

### Exercicio 5 — BUBBLE MELHORADO
Bubble Sort que para se nenhuma troca ocorreu numa passada (ver implementacao acima na secao Bubble Sort).

### Exercicio 6 — EMBARALHAR
Metodo que embaralha o array. Algoritmo de Fisher-Yates: percorre do final ao inicio, troca cada elemento com uma posicao aleatoria.
```typescript
embaralhar(): void {
    for (let i = this.dados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.dados[i], this.dados[j]] = [this.dados[j], this.dados[i]];
    }
}
```

### Exercicio 7 — GNOME SORT
O gnomo olha o vaso atual e o anterior: se estao em ordem, avanca; se nao, troca e volta. Condicoes limite: sem anterior = avanca; sem proximo = acabou.
```typescript
gnomeSort(): void {
    let i = 0;
    while (i < this.dados.length) {
        if (i === 0 || this.dados[i] >= this.dados[i - 1]) {
            i++;
        } else {
            [this.dados[i], this.dados[i - 1]] = [this.dados[i - 1], this.dados[i]];
            i--;
        }
    }
}
```

### Exercicio 8 — SELECTION RECURSIVO
Selection Sort usando recursao em vez de laco externo. A cada chamada, encontra o menor e coloca na posicao `inicio`, depois chama recursivamente para `inicio + 1`.

### Exercicio 9 — EXTREMIDADE MAIS PROXIMA
Busca sequencial otimizada que comeca pela extremidade mais proxima do valor buscado. Requer dados ordenados (use um sort antes). Compara `chave` com `dados[0]` e `dados[n-1]` para decidir se busca do inicio ou do fim.

### Exercicio 10 — MEGA SENA
Classe que recebe 6-20 numeros do cartao e 6 numeros do sorteio. Ordena ambos e compara para contar acertos. Retorna "sena", "quina", "quadra" ou "nao premiado".

### Exercicio 11 — ENIGMA SORT
O codigo embaralha o array aleatoriamente e verifica se ficou ordenado. Repete ate ordenar. E o **Bogosort** — O(n * n!) de complexidade media. Extremamente ineficiente, exemplo didatico do que NAO fazer.

### Exercicio 12 — BINGO
Classe que gera cartela 5x5 com numeros de 1-50 sem repeticao. Cada coluna tem 5 numeros de uma faixa (B:1-10, I:11-20, N:21-30, G:31-40, O:41-50). toString() formata a saida.

### Exercicio 13 — PESQUISA (teorico)
Sim, ha diferenca pratica. Em dados ordenados voce pode usar busca binaria O(log n) em vez de sequencial O(n). Isso afeta a implementacao porque voce precisa manter os dados ordenados ao inserir novos elementos.

### Exercicio 14 — BUSCA BINARIA (calculo)
Calcular comparacoes no pior caso:
- 100 elementos: log2(100) = 7 comparacoes (vs 100 sequencial = 93% ganho)
- 1.000 elementos: log2(1000) = 10 (vs 1000 = 99% ganho)
- 10.000 elementos: log2(10000) = 14 (vs 10000 = 99,86% ganho)
- 100.000 elementos: log2(100000) = 17 (vs 100000 = 99,98% ganho)

### Exercicio 15 — SUDOKU
Validar solucao 9x9: para cada celula, verificar se o valor (1-9) nao repete na linha, coluna e regiao 3x3. Interromper assim que encontrar violacao.

---

## Desafio — Problema GnR

Classe `Draw` que gerencia sorteio de ingressos:
- Construtor recebe array de nomes (inscricoes)
- `getInvalid()`: retorna nomes que aparecem mais de uma vez, em ordem alfabetica
- `getValid()`: retorna nomes que aparecem exatamente uma vez, em ordem alfabetica
- `getWinner()`: sorteia um vencedor entre os validos (resultado fixo apos primeiro sorteio)

**Regra chave**: quem se inscreve mais de uma vez e **excluido** (invalido), nao apenas a inscricao duplicada.

Implementacao deve ser em TypeScript.

# Guia Facil - Ordenacao e Busca

## O que e ordenar?

Pensa numa pilha de provas. Voce quer colocar em ordem de nota, do menor pro maior.
Cada algoritmo e um jeito diferente de fazer isso.

---

## Os 6 jeitos de ordenar

### Selection Sort - "Acha o menor"

Imagina que voce tem cartas na mesa viradas pra cima.
1. Olha todas, acha a menor, pega pra mao
2. Das que sobraram, acha a menor, pega pra mao
3. Repete ate acabar

```
[4, 3, 5, 1, 6, 2]
 Acha o 1, troca com o 4 -> [1, 3, 5, 4, 6, 2]
 Acha o 2, troca com o 3 -> [1, 2, 5, 4, 6, 3]
 Acha o 3, troca com o 5 -> [1, 2, 3, 4, 6, 5]
 4 ja ta certo           -> [1, 2, 3, 4, 6, 5]
 Acha o 5, troca com o 6 -> [1, 2, 3, 4, 5, 6]
```

Codigo: dois `for` encaixados. O de fora marca a posicao, o de dentro acha o menor.

---

### Bubble Sort - "Borbulha o maior"

Compara de dois em dois (vizinhos). Se o da esquerda e maior, troca.
Faz isso varias vezes. A cada rodada, o maior vai pro final (como bolha subindo).

```
[5, 2, 4, 6, 1, 3]
 Compara 5 e 2 -> troca -> [2, 5, 4, 6, 1, 3]
 Compara 5 e 4 -> troca -> [2, 4, 5, 6, 1, 3]
 Compara 5 e 6 -> ok
 Compara 6 e 1 -> troca -> [2, 4, 5, 1, 6, 3]  (na verdade ja tinha trocado antes)
 ...e assim vai ate ordenar tudo
```

Codigo: dois `for` encaixados. Dentro, compara `dados[j]` com `dados[j+1]`.

**Versao melhorada**: se numa rodada inteira nao trocou nada, ja ta ordenado. Para mais cedo.

---

### Insertion Sort - "Cartas na mao"

Pensa que voce ta pegando cartas uma por uma.
Cada carta nova, voce encaixa no lugar certo entre as que ja tem na mao.

```
Mao: [5]          Pega o 2, encaixa antes do 5 -> [2, 5]
Mao: [2, 5]       Pega o 4, encaixa no meio    -> [2, 4, 5]
Mao: [2, 4, 5]    Pega o 6, ja ta no lugar     -> [2, 4, 5, 6]
Mao: [2, 4, 5, 6] Pega o 1, encaixa no inicio  -> [1, 2, 4, 5, 6]
...
```

Codigo: `for` de fora pega cada elemento. `while` de dentro empurra os maiores pra direita pra abrir espaco.

---

### Shell Sort - "Insertion Sort com pulos"

E o Insertion Sort, mas em vez de comparar vizinhos (distancia 1), compara elementos mais distantes.

Comeca com distancia grande (metade do array) e vai diminuindo ate distancia 1.
Quando chega em 1, e um Insertion Sort normal, mas o array ja ta quase ordenado, entao e rapido.

```
Array com 8 elementos:
Gap 4: compara posicoes 0-4, 1-5, 2-6, 3-7
Gap 2: compara posicoes 0-2, 1-3, 2-4...
Gap 1: insertion sort normal (mas ja ta quase pronto)
```

---

### Merge Sort - "Divide, ordena, junta"

1. Corta o array no meio
2. Corta cada metade no meio
3. Repete ate ter pedacos de 1 elemento (1 elemento ja ta ordenado)
4. Vai juntando os pedacos em ordem

```
[6, 1, 3, 8, 7, 2, 5, 4]

DIVIDE:
[6,1,3,8]        [7,2,5,4]
[6,1]  [3,8]     [7,2]  [5,4]
[6][1] [3][8]    [7][2] [5][4]

JUNTA EM ORDEM:
[1,6]  [3,8]     [2,7]  [4,5]
[1,3,6,8]        [2,4,5,7]
[1,2,3,4,5,6,7,8]
```

Precisa de um array extra pra fazer a juncao (merge).

---

### Quick Sort - "Escolhe um pivo e separa"

1. Escolhe um elemento (o pivo)
2. Joga tudo menor que ele pra esquerda, tudo maior pra direita
3. Repete em cada lado

```
[2, 9, 7, 4, 5, 6, 3, 1, 8, 0]   pivo = 5

Esquerda (< 5): [2, 4, 3, 1, 0]
Pivo: 5
Direita (> 5):  [9, 7, 6, 8]

Agora repete em cada lado ate ordenar tudo.
```

A escolha do pivo importa muito:
- Pior escolha: primeiro ou ultimo elemento de dados ja ordenados
- Boa escolha: elemento do meio

---

## Comparacao rapida

```
SIMPLES (mais lentos, O(n^2)):
  Selection Sort -> acha o menor e troca
  Bubble Sort    -> borbulha o maior pro final
  Insertion Sort -> encaixa no lugar certo
  Shell Sort     -> insertion sort com pulos (o mais rapido dos simples)

AVANCADOS (mais rapidos, O(n log n)):
  Merge Sort -> divide, ordena, junta (precisa de memoria extra)
  Quick Sort -> escolhe pivo, separa em dois lados (o mais rapido na pratica)
```

---

## Busca

### Busca Sequencial - "Um por um"

Olha cada elemento do inicio ao fim ate achar (ou nao).

- Em dados **desordenados**: tem que olhar tudo
- Em dados **ordenados**: pode parar quando achar um maior (ex: procurando 5 e achou 7, nao precisa continuar)

### Busca Binaria - "Abre no meio"

So funciona com dados ordenados.

1. Olha o elemento do meio
2. Se e o que procura, achou
3. Se o que procura e menor, repete na metade esquerda
4. Se e maior, repete na metade direita

E tipo adivinhar um numero de 1 a 100:
- "E 50?" "Mais"
- "E 75?" "Menos"
- "E 62?" "Mais"
- "E 68?" "Acertou!"

Com 100 elementos, no maximo 7 tentativas (em vez de 100).
Com 100.000 elementos, no maximo 17 tentativas.

### Busca por Interpolacao

Igual a binaria, mas em vez de sempre ir pro meio, **chuta** onde o numero pode estar.

Procurando "Wagner" no dicionario? Abre perto do final, nao no meio.
Funciona bem se os numeros estao bem espalhados. Se nao estao, pode ser pior que a sequencial.

---

## Resumo dos Exercicios

| # | Nome | O que fazer |
|---|------|-------------|
| 1 | Ordena Tres | Ordenar 3 numeros so com `if` (sem `else`) |
| 2 | Maior de Tres | Achar o maior de 3 numeros com 2 `if` sem `else` |
| 3 | Baralho | Fazer teste de mesa (na mao) com Selection, Bubble e Insertion Sort |
| 4 | Crescente | Metodo que checa se array ta em ordem crescente |
| 5 | Bubble Melhorado | Bubble Sort que para se nao trocou nada numa rodada |
| 6 | Embaralhar | Metodo que embaralha o array aleatoriamente |
| 7 | Gnome Sort | Novo algoritmo: avanca se ta em ordem, troca e volta se nao ta |
| 8 | Selection Recursivo | Selection Sort mas usando funcao que chama ela mesma |
| 9 | Extremidade Proxima | Busca que comeca pelo lado mais perto do valor |
| 10 | Mega Sena | Comparar cartao com sorteio e dizer se ganhou |
| 11 | Enigma Sort | Descobrir que o codigo e um Bogosort (embaralha ate ordenar) |
| 12 | Bingo | Gerar cartela de bingo 5x5 sem numeros repetidos |
| 13 | Pesquisa | Pergunta teorica: faz diferenca pesquisar em dados ordenados? SIM |
| 14 | Busca Binaria | Calcular quantas comparacoes pra 100, 1000, 10000 e 100000 elementos |
| 15 | Sudoku | Verificar se uma solucao de Sudoku e valida |

## Desafio - GnR

Classe `Draw` pra sortear ingressos:
- Recebe lista de nomes
- Se alguem se inscreveu mais de 1 vez, e **invalido** (excluido do sorteio)
- `getValid()` retorna os validos em ordem alfabetica
- `getInvalid()` retorna os invalidos em ordem alfabetica
- `getWinner()` sorteia um vencedor (so muda na primeira vez que chama)

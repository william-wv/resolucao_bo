"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var questoes = /** @class */ (function () {
    function questoes(list) {
        this.list = list;
    }
    questoes.prototype.ex1 = function () {
        /*
        1. ORDENA TRÊS – Modele uma classe que tenha três atributos inteiros (recebidos pelo construtor).
            Implemente um método que ordene esses três valores inteiros.
            Três estruturas condicionais (todas sem o bloco de caso-contrário) são suficientes.
            Não use métodos pré-definidos de ordenação.
    */
        var aux;
        var a = this.list[0];
        var b = this.list[1];
        var c = this.list[2];
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
    };
    questoes.prototype.ex2 = function () {
        /*
        2. MAIOR DE TRÊS – Na mesma classe do exercício anterior,
            implemente um método que encontre o maior dos três valores.
            Duas estruturas condicionais (todas sem o bloco de caso-contrário) são suficientes.
            Não use método pré-definido para retornar o maior valor.
    */
        var a = this.list[0];
        var b = this.list[1];
        var c = this.list[2];
        var aux = a;
        if (aux <= b) {
            aux = b;
        }
        if (aux <= c) {
            aux = c;
        }
        return aux;
    };
    questoes.prototype.ex3 = function () {
        /*
    3. BARALHO – Com o uso do baralho, aplique os algoritmos de ordenação Selection Sort, Bubble Sort e
        Insertion Sort aos seguintes arranjos. Obtenha o número de comparações e o número de trocas feitas
        em cada um dos casos. Use cartas de 1 a 10 de um mesmo naipe (considere que o ás é o 1).
            (a) Primeiro arranjo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1.
            (b) Segundo arranjo: 10, 1, 9, 2, 8, 3, 7, 4, 6, 5.
            (c) Terceiro arranjo: 4, 5, 6, 1, 2, 3, 7, 8, 9, 10.
    */
        var PA = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        var SA = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];
        var TA = [4, 5, 6, 1, 2, 3, 7, 8, 9, 10];
        // --- BUBBLE SORT ---
        function bubbleSort(arr) {
            var _a;
            var clone = __spreadArray([], arr, true), comparacoes = 0, trocas = 0;
            for (var i = 0; i < clone.length; i++) {
                for (var j = 0; j < clone.length - 1 - i; j++) {
                    comparacoes++;
                    if (clone[j] > clone[j + 1]) {
                        _a = [clone[j + 1], clone[j]], clone[j] = _a[0], clone[j + 1] = _a[1];
                        trocas++;
                    }
                }
            }
            return { comparacoes: comparacoes, trocas: trocas };
        }
        // --- SELECTION SORT ---
        function selectionSort(arr) {
            var _a;
            var clone = __spreadArray([], arr, true), comparacoes = 0, trocas = 0;
            for (var i = 0; i < clone.length; i++) {
                var min = i;
                for (var j = i + 1; j < clone.length; j++) {
                    comparacoes++;
                    if (clone[j] < clone[min])
                        min = j;
                }
                if (min !== i) {
                    _a = [clone[min], clone[i]], clone[i] = _a[0], clone[min] = _a[1];
                    trocas++;
                }
            }
            return { comparacoes: comparacoes, trocas: trocas };
        }
        // --- INSERTION SORT ---
        function insertionSort(arr) {
            var clone = __spreadArray([], arr, true), comparacoes = 0, trocas = 0;
            for (var i = 1; i < clone.length; i++) {
                var atual = clone[i];
                var j = i - 1;
                // A comparação acontece aqui no while
                while (j >= 0) {
                    comparacoes++;
                    if (clone[j] > atual) {
                        clone[j + 1] = clone[j];
                        trocas++;
                        j--;
                    }
                    else {
                        break;
                    }
                }
                clone[j + 1] = atual;
            }
            return { comparacoes: comparacoes, trocas: trocas };
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
    };
    questoes.prototype.ex4 = function () {
        /*
    4. CRESCENTE – Modele uma classe que tenha como atributo uma uma matriz unidimensional de 20
        inteiros (recebida pelo construtor). Implemente um método iterativo que retorne se essa matriz está
        em ordem crescente.
        Abandone a verificação tão logo se perceba o contrário.
    */
        for (var i = 0; i < this.list.length - 1; i++) {
            if (this.list[i] > this.list[i + 1])
                return false;
        }
        return true;
    };
    questoes.prototype.ex5 = function () {
        /*
    5.  BUBBLE MELHORADO – Na mesma classe do exercício anterior, implemente um aperfeiçoamento
         do Bubble Sort em que o método seja interrompido caso não ocorram trocas durante uma iteração do
         laço mais externo.
    */
        for (var i = 0; i < this.list.length - 1; i++) {
            var trocou = false;
            for (var j = 0; j < this.list.length - 1 - i; j++) {
                if (this.list[j] > this.list[j + 1]) {
                    var aux = this.list[j];
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
    };
    questoes.prototype.ex6 = function () {
        /*
    6. EMBARALHAR – Na mesma classe do Exercício 4, implemente um método iterativo que embaralhe a
        matriz unidimensional.
    */
    };
    questoes.prototype.ex7 = function () {
        var _a;
        var i = 0;
        while (i < this.list.length) {
            if (i == 0 || this.list[i] >= this.list[i - 1]) {
                i++;
            }
            else {
                _a = [this.list[i - 1], this.list[i]], this.list[i] = _a[0], this.list[i - 1] = _a[1];
                i--;
            }
        }
        return this.list;
    };
    return questoes;
}());
exports.default = questoes;

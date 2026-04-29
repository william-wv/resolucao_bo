var Numeros = /** @class */ (function () {
    function Numeros(n) {
        this.n = n;
    }
    Numeros.prototype.primeirosPrimos = function () {
        var listaPrimos = [];
        var candidato = 0;
        while (listaPrimos.length < this.n) {
            var nPrimo = true;
            if (candidato == 0 || candidato == 1) {
                nPrimo = false;
            }
            for (var i = 2; i < candidato; i++) {
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
    };
    return Numeros;
}());
var gerador = new Numeros(25);
console.log(gerador.primeirosPrimos());

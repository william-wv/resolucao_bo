// william w v
var Clock = /** @class */ (function () {
    function Clock(d1, d2, d3, d4) {
        this.d = [d1, d2, d3, d4];
    }
    Clock.prototype.closestToMidnight = function () {
        var maxTime = -1;
        var result = "";
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                for (var k = 0; k < 4; k++) {
                    for (var l = 0; l < 4; l++) {
                        // verificação para não repetir o mesmo index
                        if (i !== j &&
                            i !== k &&
                            i !== l &&
                            j !== k &&
                            j !== l &&
                            k !== l) {
                            var hours = this.d[i] * 10 + this.d[j];
                            var minutes = this.d[k] * 10 + this.d[l];
                            if (hours < 24 && minutes < 60) {
                                var totalMinutes = hours * 60 + minutes;
                                if (totalMinutes > maxTime) {
                                    maxTime = totalMinutes;
                                    result = "".concat(this.d[i]).concat(this.d[j], ":").concat(this.d[k]).concat(this.d[l]);
                                }
                            }
                        }
                    }
                }
            }
        }
        if (maxTime === -1) {
            return "Par\u00E2metros fornecidos: ".concat(this.d[0], ", ").concat(this.d[1], ", ").concat(this.d[2], ", ").concat(this.d[3], "\nN\u00E3o ser\u00E3o fornecidos, pois n\u00E3o proporcionam uma resposta v\u00E1lida.");
        }
        return "Par\u00E2metros fornecidos: ".concat(this.d[0], ", ").concat(this.d[1], ", ").concat(this.d[2], ", ").concat(this.d[3], "\nRetorno: \"").concat(result, "\"");
    };
    return Clock;
}());
// Testes baseados nos seus exemplos:
var result1 = new Clock(8, 9, 5, 1);
console.log(result1.closestToMidnight() + "\n - - - - - ");
var result2 = new Clock(0, 0, 0, 2);
console.log(result2.closestToMidnight() + "\n - - - - - ");
var result3 = new Clock(2, 1, 6, 6);
console.log(result3.closestToMidnight() + "\n - - - - - ");
var result4 = new Clock(1, 9, 5, 2);
console.log(result4.closestToMidnight() + "\n - - - - - ");
var result5 = new Clock(3, 4, 5, 6);
console.log(result5.closestToMidnight() + "\n - - - - - ");
var result6 = new Clock(0, 0, 0, 1);
console.log(result6.closestToMidnight() + "\n - - - - - ");

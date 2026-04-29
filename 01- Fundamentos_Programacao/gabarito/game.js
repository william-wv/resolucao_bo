var Game = /** @class */ (function () {
    function Game(user1, user2) {
        this.user1 = user1;
        this.user2 = user2;
    }
    Game.prototype.RockPaperScissors = function () {
        var options = ["pedra", "papel", "tesoura"];
        // 1. Validação (usando 'options' no plural, antes de tudo)
        if (!options.includes(this.user1) || !options.includes(this.user2)) {
            return "Dados inválidos, tente novamente com 'pedra', 'papel' ou 'tesoura'.";
        }
        // 2. Empate
        if (this.user1 === this.user2) {
            return "Empate !!";
        }
        // 3. Vitórias do User 1
        if (this.user1 == "pedra" && this.user2 == "tesoura") {
            return "User 1 Ganhou com " + this.user1;
        }
        else if (this.user1 == "papel" && this.user2 == "pedra") {
            return "User 1 Ganhou com " + this.user1;
        }
        else if (this.user1 == "tesoura" && this.user2 == "papel") {
            return "User 1 Ganhou com " + this.user1;
        }
        // 4. Se passou pela validação, não empatou e o User 1 não ganhou...
        else {
            return "User 2 venceu com " + this.user2 + "!";
        }
    };
    return Game;
}());
var game1 = new Game("pedra", "papel");
console.log("1. - - - - \n" + game1.RockPaperScissors() + "\n- - - -");
var game2 = new Game("tesoura", "papel");
console.log("2. - - - - \n" + game2.RockPaperScissors() + "\n- - - -");
var game3 = new Game("tesoura", "tesoura");
console.log("3. - - - - \n" + game3.RockPaperScissors() + "\n- - - -");
var game4 = new Game("tesoura", "tisoura");
console.log("4. - - - - \n" + game4.RockPaperScissors() + "\n- - - -");

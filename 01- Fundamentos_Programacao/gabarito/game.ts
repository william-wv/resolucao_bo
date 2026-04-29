class Game {
  user1: string;
  user2: string;

  constructor(user1: string, user2: string) {
    this.user1 = user1;
    this.user2 = user2;
  }

  RockPaperScissors() {
    const options: string[] = ["pedra", "papel", "tesoura"];

    if (!options.includes(this.user1) || !options.includes(this.user2)) {
      return "Dados inválidos, tente novamente com 'pedra', 'papel' ou 'tesoura'.";
    } 
    
    if (this.user1 === this.user2){
      return "Empate !!";
    } 

    if (this.user1 == "pedra" && this.user2 == "tesoura") {
      return "User 1 Ganhou com " + this.user1;
    } 
    else if (this.user1 == "papel" && this.user2 == "pedra") {
      return "User 1 Ganhou com " + this.user1;
    } 
    else if (this.user1 == "tesoura" && this.user2 == "papel") {
      return "User 1 Ganhou com " + this.user1;
    } 
    else {
      return "User 2 venceu com " + this.user2 + "!";
    }
  }
}

const game1 = new Game("pedra","papel");
console.log("1. - - - - \n" + game1.RockPaperScissors() + "\n- - - -");

const game2 = new Game("tesoura","papel");
console.log("2. - - - - \n" + game2.RockPaperScissors() + "\n- - - -");

const game3 = new Game("tesoura","tesoura");
console.log("3. - - - - \n" + game3.RockPaperScissors() + "\n- - - -");

const game4 = new Game("tesoura","tisoura");
console.log("4. - - - - \n" + game4.RockPaperScissors() + "\n- - - -");
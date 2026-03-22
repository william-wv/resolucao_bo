// william w v

class Clock {
  private d: number[];

  constructor(d1: number, d2: number, d3: number, d4: number) {
    this.d = [d1, d2, d3, d4];
  }

  public closestToMidnight(): string {
    let maxTime = -1;
    let result = "";

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        for (let k = 0; k < 4; k++) {
          for (let l = 0; l < 4; l++) {
            if (
              i !== j &&
              i !== k &&
              i !== l &&
              j !== k &&
              j !== l &&
              k !== l
            ) {
              const hours = this.d[i] * 10 + this.d[j];
              const minutes = this.d[k] * 10 + this.d[l];

              if (hours < 24 && minutes < 60) {
                const totalMinutes = hours * 60 + minutes;

                if (totalMinutes > maxTime) {
                  maxTime = totalMinutes;
                  result = `${this.d[i]}${this.d[j]}:${this.d[k]}${this.d[l]}`;
                }
              }
            }
          }
        }
      }
    }

    if (maxTime === -1) {
      return `Parâmetros fornecidos: ${this.d[0]}, ${this.d[1]}, ${this.d[2]}, ${this.d[3]}\nNão serão fornecidos, pois não proporcionam uma resposta válida.`;
    }
    return `Parâmetros fornecidos: ${this.d[0]}, ${this.d[1]}, ${this.d[2]}, ${this.d[3]}\nRetorno: "${result}"`;
  }
}

// Testes baseados nos seus exemplos:
const result1 = new Clock(8, 9, 5, 1);
console.log(result1.closestToMidnight() + "\n - - - - - ");

const result2 = new Clock(0, 0, 0, 2);
console.log(result2.closestToMidnight() + "\n - - - - - ");

const result3 = new Clock(2, 1, 6, 6);
console.log(result3.closestToMidnight() + "\n - - - - - ");

const result4 = new Clock(1, 9, 5, 2);
console.log(result4.closestToMidnight() + "\n - - - - - ");

const result5 = new Clock(3, 4, 5, 6);
console.log(result5.closestToMidnight() + "\n - - - - - ");

const result6 = new Clock(0, 0, 0, 0);
console.log(result6.closestToMidnight() + "\n - - - - - ");

// MENSAGEM – Implemente um método que exiba n vezes uma mensagem na tela


export default class q1 { 
  private n: number ;

  constructor(n: number) {
    this.n = n;
  }

  public mensagem(): string {
    return this.auxmensagem(this.n);
  }

  private auxmensagem(contador: number): string {
    if(contador === 0) {  
        return ""
    }
    
    return "mensagem\n" + this.auxmensagem(contador - 1);
  }
}

const obj = new q1(3);
console.log(obj.mensagem());
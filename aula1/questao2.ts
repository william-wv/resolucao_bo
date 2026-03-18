/* 3.
    Dados três números inteiros, que representam a data de validade de um produto (dia, mês e ano,
respectivamente), retorne se ele já está vencido. A data atual deve estar fixada no código. Não
utilize biblioteca com funcionalidades predefinidas para datas.
*/

const diaValidade:number = 12;
const mesValidade:number = 2;
const anoValidade:number = 2024;


const dataValidade = (dia:number , mes:number, ano:number) => {
    if(ano >= anoValidade && mes >= mesValidade && dia > diaValidade) {
        console.log("O produto esta vencido")
    } else {
        console.log("O produto não esta vencido")
    }
}

dataValidade(11,2,2024)
/* 3.
    Dados três números inteiros, que representam a data de validade de um produto (dia, mês e ano,
respectivamente), retorne se ele já está vencido. A data atual deve estar fixada no código. Não
utilize biblioteca com funcionalidades predefinidas para datas.
*/

const dataValidade = (dia: number, mes: number, ano: number) => {
 if (ano < 2026 || 
    (ano === 2026 && mes < 3) || 
    (ano === 2026 && mes === 3 && dia < 18)) {
      console.log("O produto esta vencido");
  } else {
    console.log("O produto não esta vencido");
  }
};

dataValidade(1, 1, 2023);
console.log("- - -")
dataValidade(1, 11, 2023);
console.log("- - -")
dataValidade(25, 2, 2026);
console.log("- - -")
dataValidade(1, 11, 2026);
console.log("- - -")
dataValidade(1, 3, 2027);

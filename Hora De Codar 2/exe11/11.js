let valor1 = parseInt(prompt("Digite o primeiro valor: "));
let valor2 = parseInt(prompt("Digite o segundo valor: "));
let operacao = parseInt(prompt("Digite a operação (1: Adição, 2: Subtração, 3: Divisão, 4: Multiplicação"));

let resultado;

if (operacao === 1) {
   resultado = valor1 + valor2;
}
else if (operacao ===2) {
   resultado = valor1 - valor2;
}
else if (operacao ===3) {
   resultado = valor1 / valor2;
}
else if (operacao ===4) {
   resultado = valor1 * valor2;
}
else {
   alert("Operação inválida.");
   resultado = null;
}
if (resultado !== null ) {
   alert("O resultado da operação é: " + resultado);
}

let list = []; // Array para armazenar os números informados
let sum = 0; // Variável para armazenar a soma dos números menores que 72

// Ler 6 números do usuário
for (let i = 0; i < 6; i++) {

let num = parseInt(prompt(`Informe o número ${i + 1}:`));
list.push(num); // Adicionar o número ao array

// Somar se o número for menor que 72
if (num < 72) {
sum += num;
}
}

// Mostrar a soma e os números informados
console.log("A soma dos números menores que 72 é:", sum);
console.log("Os números informados foram:", list);



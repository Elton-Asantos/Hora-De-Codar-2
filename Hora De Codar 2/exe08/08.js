var list = [] // Array para armazenar os números informados pelo usuário
var result = [] // Array para armazenar os números válidos (entre 0 e 10)
var sum = 0 // Variável para armazenar a soma dos números válidos

// Loop para solicitar 4 números ao usuário e adicioná-los à lista
for (i = 0; i < 4; i++) {
  var num = parseInt(prompt('informe um número')) // Lê o número inserido pelo usuário e o converte para inteiro
  list.push(num) // Adiciona o número à lista
}

// Loop para iterar sobre a lista de números e adicionar os válidos (entre 0 e 10) ao array result
for (var i of list) {
  if (i > 0 && i < 10) {
    result.push(i) // Adiciona o número válido ao array result
  }
}

// Loop para calcular a soma dos números válidos
for (var i of result) {
  sum += i // Adiciona o número válido à soma
}

// Calcula a média dos números válidos
let average = sum / result.length

// Verifica se a média é maior que 5 e exibe a mensagem correspondente
if (average > 5) {
  alert('Você passou no teste')
} else {
  alert('tente novamente')
}
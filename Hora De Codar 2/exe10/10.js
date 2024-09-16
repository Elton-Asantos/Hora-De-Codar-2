      // Entrada da altura e do gênero
      let altura = parseFloat(prompt('Digite a altura (em metros): ')) // Pede a altura e converte para número decimal
      let genero = parseInt(
        prompt('Digite o gênero (1: feminino, 2: masculino): ')
      ) // Pede o gênero e converte para número inteiro

      // Cálculo do peso ideal
      let pesoIdeal // Declara a variável que armazenará o peso ideal
      if (genero === 1) {
        // Verifica se o gênero é 1 (feminino)
        // Mulher
        pesoIdeal = 62.1 * altura - 44.7 // Calcula o peso ideal para mulheres


      } else if (genero === 2) {
        // Verifica se o gênero é 2 (masculino)
        // Homem
        pesoIdeal = 72.7 * altura - 58 // Calcula o peso ideal para homens


      } else {
        // Se o gênero não for 1 ou 2, é inválido
        // Gênero inválido
        alert(
          'Gênero inválido. Por favor, digite 1 para feminino ou 2 para masculino.') // Exibe uma mensagem de erro
        pesoIdeal = null // Define o peso ideal como nulo para indicar erro
      }

      // Saída
      if (pesoIdeal !== null) {
        // Verifica se o peso ideal foi calculado (não é nulo)
        console.log('O peso ideal é: ' + pesoIdeal.toFixed(2) + ' kg') // Exibe o peso ideal formatado com duas casas decimais
      }
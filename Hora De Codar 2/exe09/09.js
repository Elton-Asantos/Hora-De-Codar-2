let anoNascimento = parseInt(prompt('Digite o ano de nascimento: '))
      let idadeMinima = 17
      let idade = 2024 - anoNascimento

      if (idade >= idadeMinima) {
        alert('Você Já pode votar este ano ')
      } else {
        alert('Você não pode votar este ano')
      }
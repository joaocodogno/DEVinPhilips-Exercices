const verifica_idade = document.querySelector('#ex2')

verifica_idade.addEventListener('click', () => {
    var idade = prompt("Digite a idade desejada")
    
    if (idade >= 0 && idade <= 15)
        alert.log('jovem')

    else if (idade > 15 && idade <= 65)
        alert('adulto')

    else if (idade >= 65)
        alert('idoso')

    else
        alert('Valor digitado inválido')
})
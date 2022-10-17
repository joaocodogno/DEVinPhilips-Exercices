const calculadora = document.querySelector('#ex6')

calculadora.addEventListener('click', () => {
    var menu = parseInt(prompt("Digite a opção desejada (ex: 1):"))
    var num1 = parseFloat(prompt("Digite o primeiro valor"))
    var num2 = parseFloat(prompt("Digite o segundo valor valor"))
    var result = 0

    switch (menu) {
        case 1:
            result = num1 + num2
            alert(`O Resultado da soma é: ${result}`)
            break;
    
        case 2:
            result = num1 - num2
            alert(`O resultado da subtração é: ${result}`)
            break;
    
        case 3:
            result = num1 * num2
            alert(`O resultado da multiplicação é: ${result}`)
            break;
    
        case 4: 
            result = num1 / num2
            alert(`O resultado da divisão é: ${result}`)
            break;
    
        default:
            alert("O valor digitado é inválido")
    }
})


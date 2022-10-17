const somar_numeros = document.querySelector('#ex4')

somar_numeros.addEventListener('click', () => {
    var result = 0
    while (num != -1){
        var num = parseFloat(prompt('Digite um número:'))
        result += num
    }
    alert(`A soma é: ${result}`)
})
const tabuada = document.querySelector('#ex3')
var result

tabuada.addEventListener('click', () => {
var num = prompt('Digite um valor para exibir sua tabuada')
    for (var i = 1; i <= 10; i++) {
        result += `${num} x ${i} = ${num * i}\n`
    }
    alert(result)
})
const calculadora_PA = document.querySelector('#ex9')

calculadora_PA.addEventListener('click', () => {
    var inicio = parseFloat(prompt('Digite um número de início'))
    var raiz = parseFloat(prompt('Digita um valor para raiz'))
    var pa = []

    for (var i = 0; i <10; i++) {
        pa[i] = inicio
        inicio += raiz
    }
    alert(pa)
})

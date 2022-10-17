const pares_e_impares = document.querySelector('#ex5')

pares_e_impares.addEventListener('click', () => {
    var num = parseInt(prompt('Digite um número'))
    var cont = 1
    var result_par = 0
    var result_impar = 0

    while (cont < num) {
        var resto = cont % 2
        if (resto === 0) {
            result_par += 1 
        } else {
            result_impar += 1
        }
        cont += 1
    }
    alert(`Número de pares entre 0 e ${num}: ${result_par} | Número de impares entre 0 e ${num}: ${result_impar}`)
})
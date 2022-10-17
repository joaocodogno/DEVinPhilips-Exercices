const estacao = document.querySelector('#ex7')

estacao.addEventListener('click', () => {
    var data = new Date()
    var dia = data.getDate()
    var mes = data.getMonth() + 1

    if((dia >= 22 && mes === 3) || mes === 4 || mes === 5 || (dia <= 21 && mes === 6)) {
        alert ('Outono')
    } else if ((dia >= 22 && mes === 6) || mes === 7 || mes === 8 || (dia <= 21 && mes === 9)) {
        alert ('Inverno')
    } else if ((dia >= 22 && mes === 9) || mes === 10 || mes === 11 || (dia <= 21 && mes === 12)) {
        alert ('Primavera')
    } else {
        alert ('Verão')
    }
})
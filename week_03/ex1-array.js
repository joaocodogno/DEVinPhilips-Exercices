const ex1 = document.querySelector('#ex1')

ex1.addEventListener('click', () => {
    function procuraMinMax (arr) {
        let menor = 0
        let maior = 0

        if (!arr.some(Number)) {
            console.log('Não é possível encontrar')
            return
        }

        for (i = 0; i < arr.length; i++) {
            if (arr[i] < menor) {
                menor = arr[i]
            }
        }
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > maior) {
                maior = arr[j]
            }
        }
        text = `O menor valor é: ${menor}\nO maior valor é: ${maior}`
        return text
    }
    procuraMinMax(['a', 'b', 'c', 2, 5, 3, 7, -1, 8, 4])
    console.log(text)
})
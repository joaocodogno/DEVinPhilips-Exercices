const ex1 = document.querySelector('#ex1')

ex1.addEventListener('click', () => {
    function procuraMinMax (arr) {
  
        if (!arr?.some(Number)) { // o ? teste primeiro se é  não é um array
            text = 'Não é possível encontrar'
            return text
        }
    
        let min = arr[0]
        let max = arr[0]
    
        for (i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i]
            }
            if (arr[i] > max) {
                max = arr[i]
            }
        }
        text = `O menor valor é: ${min}\nO maior valor é: ${max}`
        return text
    }
    procuraMinMax([1, 2, 3])
    console.log(text)
})
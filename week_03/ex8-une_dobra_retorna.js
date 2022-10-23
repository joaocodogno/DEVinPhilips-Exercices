const ex8 = document.querySelector('#ex8')

ex8.addEventListener('click', () => {
    const uneDrobaRetorna = (arr, ...rest) => {
        const result = rest.map(num => num*2)
        return [...arr, ...result]
    }
    const resultado = uneDrobaRetorna([1, 2, 3], 2, 4)
    console.log(resultado)
})
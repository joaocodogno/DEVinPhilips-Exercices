const ex3 = document.querySelector('#ex3')

ex3.addEventListener('click', () => {
  const concatenaArray = (arr1, arr2) => {
    return [...arr1, ...arr2]
  }
  const resultado = concatenaArray([1, 2, 3], [4, 5, 6])
  console.log(resultado)
})
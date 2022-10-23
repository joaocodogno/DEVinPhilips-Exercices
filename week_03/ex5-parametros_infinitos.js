const ex5 = document.querySelector('#ex5')

ex5.addEventListener('click', () => {
  const sumParameters = (...rest) => {
    let sum = 0
    rest.forEach(num => sum += num)
    return sum
  }

  const resultado = sumParameters(1, 2, 3, 4)
  console.log(resultado)
})
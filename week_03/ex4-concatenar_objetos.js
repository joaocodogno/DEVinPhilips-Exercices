const ex4 = document.querySelector('#ex4')

ex4.addEventListener('click', () => { 
  const concatenaObjetos = (obj1, obj2) => {
    return {...obj1, ...obj2}
  }
  const resultado = concatenaObjetos({ 'a': 1, 'b': 2, 'c': 3 } , { 'd': 4, 'e': 5, 'f': 6 })
  console.log(resultado)
})
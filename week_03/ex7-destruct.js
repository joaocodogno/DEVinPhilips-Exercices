const ex7 = document.querySelector('#ex7')

ex7.addEventListener('click', () => {
  const criaVariaveis = (obj) => {
    const {nome, idade, profissao} = obj
    text = `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`
    return text
  }

  const resultado = criaVariaveis({ nome: 'João', idade: 27, profissao: 'Analista de Processos' })
  console.log(resultado)
})
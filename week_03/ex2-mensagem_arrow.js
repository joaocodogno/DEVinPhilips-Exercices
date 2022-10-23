const ex2 = document.querySelector('#ex2')

ex2.addEventListener('click', () => {
    const mensagemOla = name => {
        return `Olá ${name}`
        
    }    
    console.log(mensagemOla('João'))
})
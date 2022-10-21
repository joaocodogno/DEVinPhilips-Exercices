const mensagemArrow = document.querySelector('#ex2')

mensagemArrow.addEventListener('click', () => {
    const mensagemOla = nome => {
        console.log(`Olá ${nome}`)
        return
    }    
    console.log(mensagemOla('João'))
})
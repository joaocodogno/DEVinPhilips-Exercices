async function mediaIdade (nome) {
    try {
        const resultado = await fetch (`https://api.agify.io/?country_id=BR&name=${nome}`)
        const pessoa = await resultado.json()
        console.log(`Nome: ${pessoa.name} | Média Idade: ${pessoa.age}`)   
    } catch (error) {
        console.error(error)
    }
}

mediaIdade('joao')
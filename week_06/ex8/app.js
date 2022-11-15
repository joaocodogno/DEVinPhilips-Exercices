async function buscaUsuarios (qtd) {
    try {
        const resultado = await fetch (`https://randomuser.me/api/?results=5`)
        const {results} = await resultado.json()

        const lista = document.getElementById('lista')

        results.forEach(user => {
            const li = document.createElement('li')

            const nome = document.createElement('p')
            nome.innerText = `${user.name.title}, ${user.name.first} ${user.name.last}`

            const email = document.createElement('p')
            email.innerText = user.email

            const endereco = document.createElement('p')
            endereco.innerText = `${user.location.street.name} - ${user.location.street.number} - ${user.location.city} - ${user.location.country}`

            const foto = document.createElement('img')
            foto.src = user.picture.large

            li.appendChild(foto)
            li.appendChild(nome)
            li.appendChild(email)
            li.appendChild(endereco)
            lista.appendChild(li)
        })
    } catch (error) {
        console.error(error)
    }
}


// function submitForm(event) {
//     event.preventDefault()
//     const qtd = event.target.quantidade.value
    buscaUsuarios()
// }

// const form = document.getElementById('form')
// form.addEventListener('submit', submitForm)




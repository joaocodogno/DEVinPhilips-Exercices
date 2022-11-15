// function horaAtual () {
//     const date = new Date().toLocaleTimeString()
//     console.log(date)
// }

// const interval = setInterval(horaAtual, 2000)


const timer = () => {
    const interval = setInterval(function () {
        const dataAtual = new Date().toLocaleTimeString()
        console.log(dataAtual)
    }, 2000)

    setTimeout(() => {
        clearInterval(interval)
    }, 10000)
}

timer()
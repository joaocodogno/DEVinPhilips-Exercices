async function precoBitcoin () {
    try {
        const response = await fetch ('https://api.coincap.io/v2/assets/bitcoin')
        const preco = await response.json()
        console.log('O preço do Bitcoin', preco.data.symbol, ' em dólares hoje é $', preco.data.priceUsd)
    } catch (error) {
        console.error(error)
    }
}

precoBitcoin()
const numeros_primos = document.querySelector("#ex8")

numeros_primos.addEventListener('click', () => {
    var cont = 0

    for (let n = 0; n <= 1000; n++) {
        var primo = true
        for (var i = 2; i < n; i++) {
            if (n % i === 0) {
                primo = false
            }
        }
        if (primo) {
            cont ++
            console.log(n)
        }
    }
})
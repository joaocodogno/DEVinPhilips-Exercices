const ex6 = document.querySelector('#ex6')

ex6.addEventListener('click', () => {
    const palindrome = (str) => {
        if (typeof str !== 'string') {
            console.log('Texto inválido!')
            return
        }
        
        for(var i = 0; i < str.length / 2; i++) {
            if (str[i] !== str[str.length - i - 1]) {
                return false
            }
        }
        return true;
    }

    console.log(palindrome('ana'))
})
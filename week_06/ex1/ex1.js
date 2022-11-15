// function sleep (valor) {
//   const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve (valor)
//     }, 3000)
//   })
//   .then((result) => {
//     console.log(result)
//   })
// }

// sleep('olá')




function sleep (param, tempo = 3000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(param), tempo)
  })
}

sleep('teste').then(function(resultado) {
  console.log(resultado)
})
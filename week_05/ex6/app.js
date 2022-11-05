import Juros from './Juros.js';


const teste = new Juros(10000, 7, 24)
const simples = teste.calcularJurosSimples()
const composto = teste.calcularJurosComposto()
console.log(teste)
console.log(simples)
console.log(composto)

const teste2 = new Juros(10000, 15, 10)
const simples2 = teste2.calcularJurosSimples()
const composto2 = teste2.calcularJurosComposto()
console.log(teste2)
console.log(simples2)
console.log(composto2)
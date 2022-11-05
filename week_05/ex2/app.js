import Fatura from './Fatura.js';

const fatura1 = new Fatura(3213, 'Válvula', 12, 2.75)
console.log(fatura1)
console.log(fatura1.obterValorTotal())
console.log(fatura1.valorTotal)
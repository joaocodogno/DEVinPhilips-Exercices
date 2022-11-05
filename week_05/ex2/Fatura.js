export default class Fatura {
  constructor (id, descricao, quantia, preco) {
    this.id = id
    this.descricao = descricao
    this.quantia = quantia > 0 ? quantia : 0
    this.preco = preco > 0 ? preco : 0
  }

  obterValorTotal() {
    const total = this.quantia * this.preco
    return `Valor total da fatura é de R$${total}`
  }

  get valorTotal() {
    const total = this.quantia * this.preco
    return `Valor total da fatura é de R$${total}`
  }
}
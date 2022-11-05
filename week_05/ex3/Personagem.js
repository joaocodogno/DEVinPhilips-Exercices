export default class Personagem {
  constructor (nome) {
    this.nome = nome
    this.percentualVida = 100
  }

  sofreuDano (dano) {
    this.percentualVida -= dano
    if (this.percentualVida < 0) {
      this.percentualVida = 0
    }
  }

  usouKitMedico () {
    if (this.percentualVida > 91 && this.percentualVida <= 100) {
      this.percentualVida = 100
    } else {
      this.percentualVida += 10
    }
  }
}


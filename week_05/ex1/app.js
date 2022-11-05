class Funcionario {

  constructor(cpf, nomeCompleto, salario) {
    this.cpf = cpf
    this.nomeCompleto = nomeCompleto
    this.salario = salario
  }
  promover (percent) {
    this.salario *= 1+(percent/100)
  }
}

const joao = new Funcionario('433.399.388-14', 'Joao', 100)
console.log(joao)
joao.promover(20)
console.log(joao.salario)





// COM SET - meio sem sentido nesse exercícios pois parece que esta atribuindo enquanto a ideia é executar algo

// class Funcionario {

//   constructor(cpf, nomeCompleto, salario) {
//     this.cpf = cpf
//     this.nomeCompleto = nomeCompleto
//     this.salario = salario
//   }
//   set promover (percent) {
//     this.salario *= 1+(percent/100)
//   }
// }

// const joao = new Funcionario('433.399.388-14', 'Joao', 100)
// console.log(joao)
// joao.promover = 20
// console.log(joao.salario)

class Usuario {
  constructor(nome, email, senha) {
      this.nome = nome;
      this.email = email;
      this.senha = senha;
  }

  autenticar(emailInformado, senhaInformada) {
      return (this.email === emailInformado && this.senha === senhaInformada);
  }
}

const u1 = new Usuario ("Joao", "joaocodogno@hotmail.com", 'senha')

const submit = (event) =>{
  event.preventDefault();
  const email = event.target.email.value
  const senha = event.target.senha.value

  if(u1.autenticar(email, senha)) {
    alert ('Login realizado')
  } else {
    alert ('Email ou senha incorretos')
  }
}

const form = document.getElementById('form')
form.addEventListener('submit', submit)
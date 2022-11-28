# DEVinKnowledge

Projeto desenvolvido como parte da avaliação do primeiro módulo do curso DevInPhilips, ministrado pelo Lab365 do SENAI/SC em parceria com Philips e ACATE

### Funcionalidades
O projeto consiste em um formulário de criação/edição e uma área de visualização

O usuário pode utilizar o formulário para criar dicas que são do mundo da tecnologia da informação, através dos campos Título, Linguagem (linguagem de programação), Categoria (front-end, back-end, full-stack e softskill), Descrição da Dica e por fim pode adicionar uma URL que direciona para um vídeo no youtube.
O formulario ainda possui dois botões, um de cadastrar a dica e outro de limpar os campos do formulário

Na área de visualização, quando uma dica é cadastrada, ela aparece em forma de um card com todos os dados inseridos pelo usuário.

Ainda na área de visualização, há a possibilidade de filtrar as dicas através de suas categorias (por meio dos cards de categoria) ou através da barra de pesquisa que busca pelo nome da dica.

Existe um contador para cada tipo de dica cadastrada.

Existe um botão para pesquisar pelo nome da dica e um botão para limpar o campo de busca por nome da dica e atualizar a visualização das dicas com todas as dicas cadastradas.

Nos cards de dicas cadastrada, existe a possibilidade de excluí-las através do X localizado no canto superior direito de cada dica, e também de editá-las através do botão editar localizado no canto inferior direito de cada dica.

Ao clicar em editar, as informações da dica é carregada no formulário para o usuário realizar a edição da mesma, o botão 'Cadastrar' é alterado para 'Editar' para indicar ao usuário que ele está editando uma dica e não cadastrando uma nova.

Além disso, há recursos de User Interface (UI) na aplicação como alteração de cores quando passa por cima de um botão ou um campo de digitação.

Há ainda um certo grau de responsividade da tela quando aumentada ou diminuida.

Como recurso adicional ao solicitado no projeto, foi adicionado um pop-up (inicializado ao clicar em +infos no canto superior direito da aplicação) que contém um texto explicando o funcionamento da aplicação. Para fechar o pop-up basta clicar no botão Ok, no botão X ou em qualquer parte da tela que não seja o próprio pop-up.


### Competências desenvolvidas
#### Fundamentos da Programação Web:
- Arquitetura cliente-servidor, introdução ao HTML e CSS
- HTML e CSS: HTML5 (elementos semânticos) e CSS (seletores, principais estilos, layouts e flexbox)
- Organização: Kanban Board com Trello e Versionamento com GitHub
#### JavaScript:
- Variáveis e tipos de dados, Operadores (aritméticos, lógicos e relacionais) e Manipulação do DOM (utilização de seletores);
- Objetos, Array, Funções, Arrow Functions, Funções de Arrays (forEach, filter, find), LocalStorage;
- Estrutura de controle de fluxo (condicional e repetição), Eventos, ES6+, Escopo(let, var e const);
#### Outras Competências Desenvolvidas ao Longo do Módulo
Não foi utilizado no projeto mas foi desenvolvido ao decorrer deste módulo as competências:
- Funções de Array (map, reduce, every), Operadores Rest e Spread, Classes, Módulos (export e import), Funções Assíncronas (Promisses, Async e Await), Interval, Timeout, Fetch, JSON
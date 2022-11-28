const buttonRegister = document.getElementById('buttonRegister')

const STORAGE_KEY = 'DEVINKNOWLEDGE'
let clues = []
const categories = [
  {
    id: 1,
    name: 'SoftSkills',
  },
  {
    id: 2,
    name: 'FrontEnd',
  },
  {
    id: 3,
    name: 'BackEnd',
  },
  {
    id: 4,
    name: 'FullStack',
  },
]







//FUNÇÕES DE RENDERIZAÇÃO NA TELA


function renderCategories() {
  const select = document.getElementById('category');

  categories.forEach(function (category) {
    const option = document.createElement('option');
    option.innerText = category.name;
    option.value = category.id;
    select.appendChild(option);
  });
}

function renderClues(arrayClues = clues) {
  const list = document.getElementById('list');
  list.innerHTML = '';

  arrayClues.forEach((clue) => {
    const divTop = document.createElement('div')
    divTop.classList.add('top')

    const divBotton = document.createElement('div')
    divBotton.classList.add('botton')
    
    const li = document.createElement('li');
    li.classList.add('clue');

    const categoryName = document.createElement('p');
    categoryName.innerText = obtainCategoryName(clue.category);
    categoryName.classList.add('clue-category');
    divTop.appendChild(categoryName);

    const title = document.createElement('h2');
    title.innerText = clue.title;
    title.classList.add('clue-title');
    divTop.appendChild(title);

    const iconDelete = document.createElement('div')
    iconDelete.innerHTML = ''
    iconDelete.classList.add('delete-clue')
    divTop.appendChild(iconDelete)
    iconDelete.addEventListener('click', () => deleteClue(clue.id))

    li.appendChild(divTop)

    const language = document.createElement('h4')
    language.innerText = clue.language
    language.classList.add('clue-language')
    li.appendChild(language)

    const description = document.createElement('p');
    description.innerText = clue.description;
    description.classList.add('clue-description');
    li.appendChild(description);

    const video = document.createElement('a');
    if(clue.video) {
      video.href = clue.video;
      video.target = '_blank'
      video.classList.add('clue-video');
    } else {
      video.innerText = ''
    }
    divBotton.appendChild(video);

    const edit = document.createElement('button')
    edit.innerText = ''
    edit.classList.add('button-edit')
    divBotton.appendChild(edit)
    edit.addEventListener('click', () => renderClueInForm(clue.id))
    
    li.appendChild(divBotton)

    list.appendChild(li);
  });
}

function renderCounter() {
  const list = document.getElementById('cards')
  list.innerHTML = ''

  categories.forEach((category) => {
    const totalCategory = obtainTotal(category.id)
    const li = document.createElement('li')
    li.classList.add('card')

    li.addEventListener('click', () => filterByCategory(category.id))

    const title = document.createElement('h2')
    title.innerText = category.name
    title.classList.add('card-title')
    li.appendChild(title)

    const total = document.createElement('p')
    total.innerText = totalCategory
    total.classList.add('card-counter')
    li.appendChild(total)

    list.appendChild(li)
  });
}

function renderClueInForm(id) {
  const clueToBeEdit = clues.find((clue) => clue.id === id)

  if(clueToBeEdit) {
    const form = document.getElementById('form')
    form.title.value = clueToBeEdit.title
    form.language.value = clueToBeEdit.language
    form.category.value = clueToBeEdit.category
    form.description.value = clueToBeEdit.description
    form.video.value = clueToBeEdit.video

    itemSendoEditado = clueToBeEdit

    buttonRegister.innerText = 'Editar'
  }
  console.log(itemSendoEditado)
  
}









//FUNÇÃO DE CARREGAR DADOS QUANDO ABRE PÁGINA


function loadInitialData() {
  clues = obtainCluesLS()
  renderCategories()
  renderClues()
  renderCounter()
  itemSendoEditado = null
}










//FUNÇÕES DE MANIPULAÇÃO DA LISTA DE DICAS


function addClue(event) {
  event.preventDefault()

  if(itemSendoEditado) {
    itemSendoEditado.title = event.target.title.value
    itemSendoEditado.language = event.target.language.value
    itemSendoEditado.category = parseInt(event.target.category.value)
    itemSendoEditado.description = event.target.description.value
    itemSendoEditado.video = event.target.video.value
    itemSendoEditado = null
    alert('Dica editada com sucesso')
  } else {
    const clue = {
      id: new Date().getTime(),
      title: event.target.title.value,
      language: event.target.language.value,
      category: parseInt(event.target.category.value),
      description: event.target.description.value,
      video: event.target.video.value
    }
    clues.push(clue)
    alert('Dica cadastrada com sucesso')
  }

  document.getElementById('form').reset()
  buttonRegister.innerText = 'Cadastrar'
  
  saveCluesLS(clues)
  renderClues()
  renderCounter()
}

function editClue() {
  console.log('editar')
}

function deleteClue (id) {
  clues = clues.filter((clue) => clue.id !== id)
  const execute = confirm('Deseja realmente deletar esta dica?')
  if(execute) {
    saveCluesLS(clues)
    renderClues()
    renderCounter()
  }
}







//FUNÇÕES AUXILIARES


function obtainTotal(id) {
  const filteredClues = filterClues(id);
  return filteredClues.length;
}

function obtainCategoryName(id) {
  const category = categories.find((category) => category.id === id)
  return category.name
}

function obtainIndex(id) {
  const index = clues.findIndex((clue) => {
    return clue.id === id
  })
  return index
}

const saveCluesLS = (arrayClues) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arrayClues));
};

const obtainCluesLS = () => {
  const cluesLS = localStorage.getItem(STORAGE_KEY);
  return cluesLS ? JSON.parse(cluesLS) : [];
};








//FULÇÕES DE FILTROS DA LISTA DE DICAS


const filterByTitle = () => {
  const titleSearch = document.getElementById('inputSearch').value
  const filteredClues = clues.filter((clue) => {
    return clue.title.toLowerCase().includes(titleSearch.toLowerCase())
  })

  renderClues(filteredClues)
}

const filterClues = (id) => {
  const filteredClues = clues.filter((clue) => clue.category === id);
  return filteredClues;
};

function filterByCategory(id) {
  const filteredList = filterClues(id);
  renderClues(filteredList);
}

const cleanFilters = () => {
  const titleSearch = document.getElementById('inputSearch')
  titleSearch.innerText = ''
  renderClues(clues)
}







//EVENTOS


window.addEventListener('load', loadInitialData);

const form = document.getElementById('form');
form.addEventListener('submit', addClue);

const buttonSearch = document.getElementById('buttonSearch')
buttonSearch.addEventListener('click', filterByTitle)

const buttonClean = document.getElementById('buttonClean')
buttonClean.addEventListener('click', cleanFilters)
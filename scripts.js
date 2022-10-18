//selectors

const nextSection = document.getElementById('dr_rafael__section');
const checkbox = document.getElementById('checkbox');
const checkbox2 = document.getElementById('checkbox2');
const box1 = document.querySelectorAll('.box1');
const box3 = document.querySelectorAll('.box3');
const box6 = document.querySelectorAll('.box6');
const avista = document.querySelectorAll('.avista');
const aprazo = document.querySelectorAll('.aprazo');
const avistaEconomize = document.querySelectorAll('.avista__economize');
const aprazoEconomize = document.querySelectorAll('.aprazo__economize');

//functions

const arrowClicked = () => {
  nextSection.scrollIntoView();
};

const btnComprarClicked = () => {
  alert('Adicionou ao carrinho com sucesso! 😁');
};

const checkboxClicked = (event) => {
  checkbox.src = checkbox.src.includes('checked')
    ? './assets/check-icon-mobile.png'
    : './assets/check-icon-mobile-checked.png';
  checkbox2.src = checkbox2.src.includes('checked')
    ? './assets/check-icon-mobile.png'
    : './assets/check-icon-mobile-checked.png';
};

function verifyActive(item, content, contentActived) {
  const iconItem = item.querySelector('.icon');
  const iconItemActive = document.querySelectorAll('.icon');

  iconItemActive.forEach((item) => (item.innerHTML = '+'));

  if (contentActived) {
    contentActived.style.height = 0;
    contentActived.classList.remove('active');
  }

  if (content !== contentActived) {
    iconItem.innerHTML = '-';
    content.classList.add('active');
    content.style.height = content.scrollHeight + 10 + 'px';
  }
}

//event listeners

checkbox.addEventListener('click', (event) => checkboxClicked(event));
checkbox2.addEventListener('click', (event) => checkboxClicked(event));

// accordion

const accordionItem = document.querySelectorAll('.accordion_item');

accordionItem.forEach((item) => {
  const accordionHeaderItem = item.querySelector('.accordion_header');

  accordionHeaderItem.addEventListener('click', () => {
    const accordionContentItem = item.querySelector('.accordion_content');

    const itemActived = document.querySelector('.active');

    verifyActive(item, accordionContentItem, itemActived);
  });
});

// handling number of boxes selection

const setSelected = (numberOfBoxes) => {
  const selecionados = document.querySelectorAll('.selected');

  selecionados.forEach((item) => item.classList.remove('selected'));

  switch (numberOfBoxes) {
    case 1:
      box1.forEach((item) => item.classList.add('selected'));
      avista.forEach((item) => (item.innerText = 'R$194,00 por caixa'));
      avistaEconomize.forEach((item) => (item.innerText = ''));
      aprazo.forEach((item) => (item.innerText = 'R$21,75'));
      aprazoEconomize.forEach((item) => (item.innerText = 'R$194,00 à vista'));
      break;
    case 3:
      box3.forEach((item) => item.classList.add('selected'));
      avista.forEach((item) => (item.innerText = 'R$148,60  por caixa'));
      avistaEconomize.forEach((item) => (item.innerText = 'Economize R$136,20'));
      aprazo.forEach((item) => (item.innerText = 'R$49,99'));
      aprazoEconomize.forEach((item) => (item.innerText = 'R$445,80 à vista'));
      break;
    case 6:
      box6.forEach((item) => item.classList.add('selected'));
      avista.forEach((item) => (item.innerText = 'R$118,90 por caixa'));
      avistaEconomize.forEach((item) => (item.innerText = 'Economize R$450,60'));
      aprazo.forEach((item) => (item.innerText = 'R$79,99'));
      aprazoEconomize.forEach((item) => (item.innerText = 'R$713,40 à vista'));
      break;
    default:
      box3.forEach((item) => item.classList.add('selected'));
      avista.forEach((item) => (item.innerText = 'R$148,60 por caixa'));
      avistaEconomize.forEach((item) => (item.innerText = 'Economize R$136,20'));
      aprazo.forEach((item) => (item.innerText = 'R$49,99'));
      aprazoEconomize.forEach((item) => (item.innerText = 'R$445,80 à vista'));
      break;
  }
};

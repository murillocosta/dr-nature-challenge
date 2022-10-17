//selectors

const nextSection = document.getElementById('dr_rafael__section');
const checkbox = document.getElementById('checkbox');
const checkbox2 = document.getElementById('checkbox2');

//functions

const arrowClicked = () => {
  nextSection.scrollIntoView();
};

const btnComprarClicked = () => {
  alert('Item adicionado ao carrinho com sucesso! 😁');
};

const checkboxClicked = (event) => {
  checkbox.src = checkbox.src.includes('checked')
    ? './assets/check-icon-mobile.png'
    : './assets/check-icon-mobile-checked.png';
  checkbox2.src = checkbox2.src.includes('checked')
    ? './assets/check-icon-mobile.png'
    : './assets/check-icon-mobile-checked.png';
};

//event listeners

checkbox.addEventListener('click', (event) => checkboxClicked(event));
checkbox2.addEventListener('click', (event) => checkboxClicked(event));

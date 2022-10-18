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

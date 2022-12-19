const btnList = document.querySelector('.placement__list');
const btnTile = document.querySelector('.placement__tile');
const lists = document.querySelectorAll('.placement-list')
const cards = document.querySelectorAll('.card')

if(btnList) {
  btnList.addEventListener('click', (e) => {
    lists.forEach(list => {
      list.style.gridTemplateColumns = '1fr';
    });
    cards.forEach(card => {
      card.classList.add('card-horizontal');
    });
  });
  btnTile.addEventListener('click', (e) => {
    lists.forEach(list => {
      list.style.gridTemplateColumns = 'repeat(4, 1fr)';
    });
    cards.forEach(card => {
      card.classList.remove('card-horizontal');
    });
  });
}


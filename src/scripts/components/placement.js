const placementLists = document.querySelectorAll('.placement-list');
placementLists.forEach(placementList => {
  const btnPlacmentList = document.querySelector('.placement__list');
  const btnPlacementTile = document.querySelector('.placement__tile');
  const cards = placementList.querySelectorAll('.card');
  btnPlacmentList.addEventListener('click', (e) => {
    btnPlacmentList.classList.add('placement__list--active');
    btnPlacementTile.classList.remove('placement__tile--active');
    placementLists.forEach(list => {
      list.style.gridTemplateColumns = '1fr';
    });
    cards.forEach(card => {
      card.classList.add('card-horizontal');
    });
  });
  btnPlacementTile.addEventListener('click', (e) => {
    btnPlacmentList.classList.remove('placement__list--active');
    btnPlacementTile.classList.add('placement__tile--active');
    placementLists.forEach(list => {
      list.style.gridTemplateColumns = 'repeat(4, 24%)';
    });
    cards.forEach(card => {
      card.classList.remove('card-horizontal');
    });
  });
});

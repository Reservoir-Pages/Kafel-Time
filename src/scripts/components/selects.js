import Choices from "choices.js";
const selects = document.querySelectorAll('.select');
selects.forEach(select => {
  new Choices(select, {
    allowHTML: true,
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
    shouldSort: false,
  });
});
// Удаление тектовой метки из "label" не трогая дочерние элементы
if(window.innerWidth < 769) {
  const catalogTilesSortLabels = document.querySelectorAll('.no-text-label');
  catalogTilesSortLabels.forEach(catalogTilesSortLabel => {
    catalogTilesSortLabel.firstChild.remove();
  });
};


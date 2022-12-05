import Choices from "choices.js";

// Custom select - Header
const choices = new Choices(document.querySelector('.select-region'), {
  searchEnabled: false,
  itemSelectText: '',
  position: 'bottom',
  shouldSort: false,
});
// Custom select - Product
if (document.querySelector('.products-list__select')) {
  const choicesSort = new Choices(document.querySelector('.products-list__select'), {
  searchEnabled: false,
  itemSelectText: '',
  position: 'bottom',
  shouldSort: false,
});
}
// Custom select - Brands
if (document.querySelector('.brands-page__region')) {
  const choices2 = new Choices(document.querySelector('.brands-page__region'), {
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
    shouldSort: false,
  });
}
// Custom select - Cart
const choicesOptions = document.querySelectorAll('.select-options');
choicesOptions.forEach(choice => {
  const choices = new Choices(choice, {
    searchEnabled: false,
    position: 'bottom',
    itemSelectText: '',
    shouldSort: false,
  });
});
// Custom select - Reviews
const choicesArray = document.querySelectorAll('.reviews__select');
choicesArray.forEach(element => {
  const choice = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
    shouldSort: false,
  });
});

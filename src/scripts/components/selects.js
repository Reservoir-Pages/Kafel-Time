import Choices from "choices.js";
// Custom select - Header
const choices = new Choices(document.querySelector('.select-region'), {
  allowHTML: true,
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


// Custom select - catalog-brand-page
if (document.querySelector('.catalog-brand-list__select')) {
  const choicesBrandSort = new Choices(document.querySelector('.catalog-brand-list__select'), {
    allowHTML: true,
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
    shouldSort: false,
  });
};
// Custom select - catalog-collections-page
if (document.querySelector('.catalog-collections-list__select')) {
  const choicesBrandSort = new Choices(document.querySelector('.catalog-collections-list__select'), {
    allowHTML: true,
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
    shouldSort: false,
  });
};
// Custom select - catalog-tiles-page
if (document.querySelector('.catalog-tiles-list__select')) {
  const choicesBrandSort = new Choices(document.querySelector('.catalog-tiles-list__select'), {
    allowHTML: true,
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
    shouldSort: false,
  });
};
// Custom select - catalog-plumbing-page
if (document.querySelector('.catalog-plumbing-list__select')) {
  const choicesBrandSort = new Choices(document.querySelector('.catalog-plumbing-list__select'), {
    allowHTML: true,
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
    shouldSort: false,
  });
};


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
// if (document.querySelector('.select-options')) {
  const choicesOptions = document.querySelectorAll('.select-options');
  choicesOptions.forEach(choice => {
  const choices = new Choices(choice, {
    allowHTML: true,
    searchEnabled: false,
    position: 'bottom',
    itemSelectText: '',
    shouldSort: false,
  });
});
// }

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

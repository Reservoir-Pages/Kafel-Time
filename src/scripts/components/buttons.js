// Hold button
const holdBtns = document.querySelectorAll('.hold-btn');
holdBtns.forEach(holdBtn => {
  holdBtn.addEventListener('click', (e) => {
    if (!holdBtn.classList.contains('alphabet__btn--disabled')) {
      holdBtn.classList.toggle('hold-btn--active');
    };
  });
});
// More button
const moreBtns = document.querySelectorAll('.more-btn');
moreBtns.forEach(btn => {
  const parentHiddenElements = btn.closest('.hiding');
  const currentHiddenElements = parentHiddenElements.querySelectorAll('.is-hidden');
  if (btn.closest('.card__color') !== null) {
    btn.textContent = `+${currentHiddenElements.length}`;
  }
  btn.addEventListener('click', (e) => {
    if (btn.closest('.card__color') !== null) {
      btn.textContent = '';
      btn.classList.remove('more-btn', 'color-btn');
    } else {
      btn.classList.add('is-hidden');
    }
    currentHiddenElements.forEach(hiddenElement => {
      hiddenElement.classList.remove('is-hidden');
    });
  });
});
// Переключение цветов
const colorValue = document.querySelector('.specifications-desrcription__wrapper .specifications-desrcription__value');
const colorBtns = document.querySelectorAll('.specifications-desrcription__color');
colorBtns.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    if (index === 0) {
      colorValue.textContent = 'Белый';
    };
    if (index === 1) {
      colorValue.textContent = 'Черный';
    };
    colorBtns.forEach(btn => {
      btn.classList.remove('specifications-desrcription__color--active');
    });
    btn.classList.add('specifications-desrcription__color--active');
  });
});
// Кнопка "Избранное"
const favoriteIcons = document.querySelectorAll('.favorite-icon');
favoriteIcons.forEach(favoriteIcon => {
    favoriteIcon.addEventListener('click', (e) => {
      favoriteIcon.classList.toggle('favorite-icon--active');
    });
});
// Кнопка "Показать все"
const horizontalFilters = document.querySelectorAll('.filters-horizontal__item');
horizontalFilters.forEach(horizontalFilter => {
  const viewAllBtn = horizontalFilter.querySelector('.filters-horizontal__item-all');
  if(viewAllBtn) {
    viewAllBtn.addEventListener('click', (e) => {
      horizontalFilter.querySelector('.swiper-wrapper').classList.toggle('view-all');
    });
  };
});
// Кнопка "Развернуть"/"Свернуть"
const openBtns = document.querySelectorAll('.catalog-brand__btn-open');
openBtns.forEach(openBtn => {
  const openingBlock = document.querySelector('.catalog-brand__description');
  openBtn.addEventListener('click', (e) => {
    openBtn.textContent = (openBtn.textContent === 'Свернуть') ? 'Развернуть' : 'Свернуть';
    openingBlock.classList.toggle('catalog-brand__description--open');
  });
});
// Кнопка "Dropdown"
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  const dropdownBtn = dropdown.querySelector('.dropdown-btn');
  const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
  dropdownBtn.addEventListener('click', (e) => {
    dropdown.classList.toggle('dropdown--open');
  });
});

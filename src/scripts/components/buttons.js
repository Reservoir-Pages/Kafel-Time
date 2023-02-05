// Hold button
const holdBtns = document.querySelectorAll('.hold-btn');
holdBtns.forEach(holdBtn => {
  holdBtn.addEventListener('click', (e) => {
    holdBtn.classList.toggle('hold-btn--active');
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

// Switch button
const switchBtns = document.querySelectorAll('.switch-button');
switchBtns.forEach(brandsBtn => {
  brandsBtn.addEventListener('click', (e) => {
    switchBtns.forEach(brandsBtn => {
      brandsBtn.classList.remove('switch-button--active');
    });
    brandsBtn.classList.add('switch-button--active');
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

// Кнопка избранное
const favoriteIcons = document.querySelectorAll('.favorite-icon');
favoriteIcons.forEach(favoriteIcon => {
    favoriteIcon.addEventListener('click', (e) => {
      favoriteIcon.classList.toggle('favorite-icon--active');
    });
});

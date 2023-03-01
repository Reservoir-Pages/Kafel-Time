// При клике открываем/закрываем каталог
const menuBtns = document.querySelectorAll('.catalog__btn');
menuBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    btn.classList.toggle('catalog__btn--active');
    if (btn.classList.contains('catalog__btn--active') && window.innerWidth < 769) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'visible';
    };
    // Элементам сантехники и плитки при клике добавляем/убираем класс 'is-active' - показываем/скрываем окно информации
    const catalogMenuItems = document.querySelectorAll('.catalog__item');
    catalogMenuItems.forEach(menuItem => {
      menuItem.classList.remove('is-active');

      if (!menuItem.classList.contains('catalog__item--grey') && menuItem !== catalogMenuItems[0]) {
        menuItem.addEventListener('click', (e) => {
          const link = menuItem.querySelector('.catalog__link');
          if(window.innerWidth < 1024 && e.target === link) {
            e.preventDefault();
            document.documentElement.scrollIntoView(true);
            menuItem.classList.toggle('is-active');
          };
        });
      };
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.catalog')) {
      menuBtns.forEach(btn => {
        if(window.innerWidth > 1023) {
          btn.classList.remove('catalog__btn--active');
        };
      });
    };
  });
});

// Обрабатываем элементы сантехники
const plumbingItems = document.querySelectorAll('.catalog__item--plumbing');
plumbingItems.forEach(plumbingItem => {
  if(window.innerWidth < 1024) {
    // Кнопки "еще" убрать
    const moreBtns = plumbingItem.querySelectorAll('.product-info__more-btn');
    moreBtns.forEach(moreBtn => {
      moreBtn.style.display = 'none';
    });
    // Скрытые элементы показать
    const hiddenItems = plumbingItem.querySelectorAll('.is-hidden');
    hiddenItems.forEach(hiddenItem => {
      hiddenItem.classList.remove('is-hidden');
    });
    // Проходим по спискам в пунктах сантехники
    const plumbingLists = plumbingItem.querySelectorAll('.product-info__list');
    plumbingLists.forEach(plumbingList => {
      // Если в списке больше одного пункта, проходим по пунктам
      const productListItems = plumbingList.querySelectorAll('.product-info__item');
      if(productListItems.length > 1) {
        productListItems.forEach((productListItem, index) => {
          if(index === 0) {
            productListItem.classList.add('product-info__list-title');
            productListItems[0].addEventListener('click', (e) => {
              e.preventDefault();
              productListItems[0].classList.toggle('product-info__list-title--active');
            });
          };
        });
      };
    });
  };
});



// window.addEventListener('resize', (e) => {
// });
// document.addEventListener('click', (e) => {
//   console.log('Нажал на:', e.target);
// });

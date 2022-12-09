// Collection produts button
const collectionBtns = document.querySelectorAll('.collection__products-header__btn');
collectionBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const currentCollectionBtn = e.currentTarget;
    collectionBtns.forEach(btn => {
      if (btn !== currentCollectionBtn) {
        btn.classList.remove('collection__products-header__btn--active');
      }
    });
    currentCollectionBtn.classList.add('collection__products-header__btn--active');
  });
});

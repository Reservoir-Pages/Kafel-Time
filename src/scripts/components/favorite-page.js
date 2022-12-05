// Filter button
const favoriteBtns = document.querySelectorAll('.favorite-filters__btn');
favoriteBtns.forEach(favoriteBtn => {
  favoriteBtn.addEventListener('click', (e) => {
    const currentFavoriteBtn = e.currentTarget;

    console.log(currentFavoriteBtn);

    favoriteBtns.forEach(favoriteBtn => {
      if (favoriteBtn !== currentFavoriteBtn) {
        favoriteBtn.classList.remove('favorite-filters__btn--active');
      }
    });
    currentFavoriteBtn.classList.add('favorite-filters__btn--active');
  });
});


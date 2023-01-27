// Filter button
const brandsBtns = document.querySelectorAll('.brands-page__item');
brandsBtns.forEach(brandsBtn => {
  brandsBtn.addEventListener('click', (e) => {
    const currentbrandsBtn = e.currentTarget;

    console.log(currentbrandsBtn);

    brandsBtns.forEach(brandsBtn => {
      if (brandsBtn !== currentbrandsBtn) {
        brandsBtn.classList.remove('brands-page__item--active');
      }
    });
    currentbrandsBtn.classList.add('brands-page__item--active');
  });
});
// Alphabet button
const alphabetBtns = document.querySelectorAll('.alphabet__btn');
alphabetBtns.forEach(alphabetBtn => {
  alphabetBtn.addEventListener('click', (e) => {
    const currentAlphabetBtn = e.currentTarget;
    alphabetBtns.forEach(alphabetBtn => {
      if (alphabetBtn === currentAlphabetBtn) {
        // alphabetBtn.classList.remove('alphabet__btn--active');
        alphabetBtn.classList.toggle('alphabet__btn--active');
      }
    });
    // currentAlphabetBtn.classList.add('alphabet__btn--active');
  });
});

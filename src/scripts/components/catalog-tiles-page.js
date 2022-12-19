// Filter button
const brandsBtns = document.querySelectorAll('.catalog-tiles-list__choice-btn');
brandsBtns.forEach(brandsBtn => {
  brandsBtn.addEventListener('click', (e) => {
    const currentbrandsBtn = e.currentTarget;
    brandsBtns.forEach(brandsBtn => {
      if (brandsBtn !== currentbrandsBtn) {
        brandsBtn.classList.remove('catalog-tiles-list__choice-btn--active');
      }
    });
    currentbrandsBtn.classList.add('catalog-tiles-list__choice-btn--active');
  });
});

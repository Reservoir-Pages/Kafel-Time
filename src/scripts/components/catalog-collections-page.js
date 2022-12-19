// Filter button
const brandsBtns = document.querySelectorAll('.catalog-collections-list__choice-btn');
brandsBtns.forEach(brandsBtn => {
  brandsBtn.addEventListener('click', (e) => {
    const currentbrandsBtn = e.currentTarget;

    console.log(currentbrandsBtn);

    brandsBtns.forEach(brandsBtn => {
      if (brandsBtn !== currentbrandsBtn) {
        brandsBtn.classList.remove('catalog-collections-list__choice-btn--active');
      }
    });
    currentbrandsBtn.classList.add('catalog-collections-list__choice-btn--active');
  });
});

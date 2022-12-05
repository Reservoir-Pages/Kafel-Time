// Filter button
const brandsBtns = document.querySelectorAll('.products-list__choice-btn');
brandsBtns.forEach(brandsBtn => {
  brandsBtn.addEventListener('click', (e) => {
    const currentbrandsBtn = e.currentTarget;

    console.log(currentbrandsBtn);

    brandsBtns.forEach(brandsBtn => {
      if (brandsBtn !== currentbrandsBtn) {
        brandsBtn.classList.remove('products-list__choice-btn--active');
      }
    });
    currentbrandsBtn.classList.add('products-list__choice-btn--active');
  });
});

const filterMoreBtn = document.querySelector('.filters-vertical__btn');
const filterMore = document.querySelectorAll('.filters-vertical__list-item.is-hidden');
if (filterMoreBtn) {
  filterMoreBtn.addEventListener('click', (e) => {
    filterMore.forEach(filter => {
      filter.classList.remove('is-hidden');
      filterMoreBtn.classList.add('is-hidden');
    });
  });
};

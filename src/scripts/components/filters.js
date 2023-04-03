const closeBtn = document.querySelector('.filters__header-close');

if(closeBtn) {
  closeBtn.href = document.referrer;
  const backBtn = document.querySelector('.filters__header-back');
  const backBtnIcon = document.querySelector('.filters__header-back span');
  const closeBtnIcon = document.querySelector('.filters__header-close span');
  const filterBtns = document.querySelectorAll('.filters__item-btn');
  const modalBlock = document.querySelector('.modal');
  const modals = document.querySelectorAll('.modal__window');
  const filtersTitle = document.querySelector('.filters__title');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const path = btn.getAttribute('data-filters-path');
      const textTitle = btn.textContent;
      modalBlock.classList.add('modal--open');
      document.body.style.overflow = 'hidden';
      closeBtnIcon.classList.add('is-hidden');
      backBtnIcon.classList.remove('is-hidden');
      filtersTitle.textContent = textTitle;

      modals.forEach(modal => {
        modal.classList.remove('modal__window--active');
        if(modal.getAttribute('data-filters-target') === path) {
          modal.classList.add('modal__window--active');
        };
      });
    });
  });

  backBtn.addEventListener('click', (e) => {
    modalBlock.classList.remove('modal--open');
    document.body.style.overflow = 'visible';
    closeBtnIcon.classList.remove('is-hidden');
    backBtnIcon.classList.add('is-hidden');
    filtersTitle.textContent = 'Фильтры';
  });
};


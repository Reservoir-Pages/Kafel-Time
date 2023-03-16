const searchBtns = document.querySelectorAll('.header-bottom__search');
searchBtns.forEach(btn => {
  const input = btn.querySelector('input');
  const catalogBtn = document.querySelector('.catalog__btn');
  btn.addEventListener('click', (e) => {
    if(e.target !== input && window.innerWidth < 769) {
      btn.classList.toggle('search--open');
      if (btn.classList.contains('search--open')) {
        document.body.style.overflowY = 'hidden';
      } else if (!catalogBtn.classList.contains('catalog__btn--active')) {
        document.body.style.overflowY = 'visible';
      };
    };
  });
  document.addEventListener('click', (e) => {
    if(!e.target.contains(input) && btn.classList.contains('search--open')) {
      btn.classList.remove('search--open');
      if (!catalogBtn.classList.contains('catalog__btn--active')) {
        document.body.style.overflowY = 'visible';
      }
    };
  });
});

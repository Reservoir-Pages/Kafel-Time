const searchBtns = document.querySelectorAll('.header-bottom__search');
searchBtns.forEach(btn => {
  const input = btn.querySelector('input')
  btn.addEventListener('click', (e) => {
    if(e.target !== input) {
      btn.classList.toggle('search--open');
    };
  });
});

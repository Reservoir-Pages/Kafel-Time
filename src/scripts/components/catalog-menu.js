// Header buttons
const menuBtns = document.querySelectorAll('.catalog__btn');

menuBtns.forEach(btn => {
  const drops = document.querySelectorAll('.catalog__list');

  btn.addEventListener('click', (e) => {
    const drop = btn.closest('.catalog').querySelector('.catalog__list');
    drop.classList.toggle('catalog__list--active');
    btn.classList.toggle('catalog__btn--active');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.catalog')) {
      drops.forEach(el => {
        el.classList.remove('catalog__list--active');
      });
      menuBtns.forEach(btn => {
        btn.classList.remove('catalog__btn--active');
      });
    };
  });

});

if(window.innerWidth < 769) {

};

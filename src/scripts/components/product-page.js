// Переключение цветов
const colorValue = document.querySelector('.specifications-desrcription__wrapper .specifications-desrcription__value');
const colorBtns = document.querySelectorAll('.specifications-desrcription__color');
colorBtns.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    if (index === 0) {
      colorValue.textContent = 'Белый';
    }
    if (index === 1) {
      colorValue.textContent = 'Черный';
    }
    colorBtns.forEach(btn => {
      btn.classList.remove('specifications-desrcription__color--active');
    })
    btn.classList.add('specifications-desrcription__color--active');
  });
});
// More specifications
const specBtn = document.querySelector('.product__specifications-btn');
const moreSpecifications = document.querySelectorAll('.product__specifications-list.is-hidden');
if (specBtn) {
  specBtn.addEventListener('click', (e) => {
    moreSpecifications.forEach(spec => {
      spec.classList.remove('is-hidden');
    });
    specBtn.classList.add('is-hidden');
  });
};


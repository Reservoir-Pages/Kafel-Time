// Переключение цветов
const colorValue =document.querySelector('.specifications-desrcription__wrapper .specifications-desrcription__value');
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

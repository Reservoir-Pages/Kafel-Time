// Counter
const cards = document.querySelectorAll('.card');
cards.forEach(el => {
  let counterIncrement = el.querySelector('.counter__increment');
  let counterDecrement = el.querySelector('.counter__decrement');
  let summary = el.querySelector('.card__summary-result');

  if (counterIncrement) {
    let cost = el.querySelector('.card__price-current').textContent;
    let unit = el.querySelector('.counter__value').value.replace(/[0-9]+/, '');
    let value = el.querySelector('.counter__value').value.replace(unit, '');

    counterIncrement.addEventListener('click', (e) => {
      value++;
      el.querySelector('.counter__value').value = value + unit;
      summary.textContent = cost * value;
    });
    counterDecrement.addEventListener('click', (e) => {
      if (value > 1) {
        value--
        el.querySelector('.counter__value').value = value + unit;
        summary.textContent = cost * value;
      };
    });
  };
});

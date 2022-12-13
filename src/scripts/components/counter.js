// Counter
const cards = document.querySelectorAll('.card');
cards.forEach(el => {
  let counterIncrement = el.querySelector('.counter__increment');
  let counterDecrement = el.querySelector('.counter__decrement');
  let summary = el.querySelector('.card__summary-result');
  if (counterIncrement) {
    let cost = el.querySelector('.card__price-current').textContent;
    counterIncrement.addEventListener('click', (e) => {
      el.querySelector('.counter__value').value++;
      let currentSummary = cost * el.querySelector('.counter__value').value;
      summary.textContent = currentSummary;
    });
    counterDecrement.addEventListener('click', (e) => {
      if (el.querySelector('.counter__value').value > 1) {
        el.querySelector('.counter__value').value--;
        let currentSummary = cost * el.querySelector('.counter__value').value;
        summary.textContent = currentSummary;
      };
    });
  };
});

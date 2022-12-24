// Counter cost
const costs = document.querySelectorAll('.cost');
costs.forEach(el => {
  let counterIncrement = el.querySelector('.counter__increment');
  let counterDecrement = el.querySelector('.counter__decrement');
  let summary = el.querySelector('.cost-result');

  if (counterIncrement) {
    let cost = el.querySelector('.cost__price-current').textContent;
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

// CounterHorizontal
// const HorizontalCards = document.querySelectorAll('.card-horizontal');
// HorizontalCards.forEach(el => {
//   let counterIncrement = el.querySelector('.counter__increment');
//   let counterDecrement = el.querySelector('.counter__decrement');
//   let summary = el.querySelector('.card-horizontal__summary-result');

//   if (counterIncrement) {
//     let cost = el.querySelector('.card-horizontal__price-current').textContent;
//     let unit = el.querySelector('.counter__value').value.replace(/[0-9]+/, '');
//     let value = el.querySelector('.counter__value').value.replace(unit, '');

//     counterIncrement.addEventListener('click', (e) => {
//       value++;
//       el.querySelector('.counter__value').value = value + unit;
//       summary.textContent = cost * value;
//     });
//     counterDecrement.addEventListener('click', (e) => {
//       if (value > 1) {
//         value--
//         el.querySelector('.counter__value').value = value + unit;
//         summary.textContent = cost * value;
//       };
//     });
//   };
// });

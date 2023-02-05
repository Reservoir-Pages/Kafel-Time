import tippy from 'tippy.js';

// Tooltop - Tippy JS
if (document.querySelector('.tooltip')) {
  tippy('.tooltip--credit', {
    content: 'Из расчета кредита на сумму 16095р, на 1 год, под 10% годовых.',
    duration: 500,
    maxWidth: 200,
  });
  tippy('.tooltip--delivery', {
    content: 'Доставим с 11-00 до 20-00',
    duration: 500,
    maxWidth: 200,
  });
  tippy('.tooltip--pickup', {
    content: 'Можете забрать из магазина с 9-00 до 21-00',
    duration: 500,
    maxWidth: 200,
  });
};

import tippy from 'tippy.js';

// Tooltop - Tippy JS
if (document.querySelector('.tooltip')) {
  tippy('.tooltip', {
    content: 'Из расчета кредита на сумму 16095р, на 1 год, под 10% годовых.',
    duration: 500,
    maxWidth: 200,
  });
}



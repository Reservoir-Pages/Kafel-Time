import Accordion from 'accordion-js';

const accordions = document.querySelectorAll('.accordion-container');

if(accordions) {
  accordions.forEach(accordion => {
    new Accordion(accordion);
  });
};

// Accordion
// if (document.querySelector('.accordion-container')) {
//   new Accordion('.accordion-container');
// }

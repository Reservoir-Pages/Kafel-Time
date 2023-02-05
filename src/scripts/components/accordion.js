import Accordion from 'accordion-js';

const accordions = document.querySelectorAll('.accordion-container');
accordions.forEach(accordion => {
  new Accordion(accordion);
});

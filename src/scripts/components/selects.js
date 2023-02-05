import Choices from "choices.js";

const selects = document.querySelectorAll('.select');
selects.forEach(select => {
  new Choices(select, {
    allowHTML: true,
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
    shouldSort: false,
  });
});

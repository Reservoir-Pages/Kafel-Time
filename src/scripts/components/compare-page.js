// Line marker
const parameterLists = document.querySelectorAll('.parameters');
parameterLists.forEach(list => {
  const parameterItems = list.querySelectorAll('.parameters__item');
  parameterItems.forEach((item, index) => {
    item.addEventListener('mouseover', (e) => {
      let currentIndex = index;
      item.classList.add('is-hover');
      parameterLists.forEach(list => {
        const listItems = list.querySelectorAll('.parameters__item');
        listItems[currentIndex].classList.add('is-hover');
      });
    });
    item.addEventListener('mouseout', (e) => {
      parameterLists.forEach(list => {
        const listItems = list.querySelectorAll('.parameters__item');
        listItems.forEach(item => {
          item.classList.remove('is-hover');
        });
      });
    });
  });
});

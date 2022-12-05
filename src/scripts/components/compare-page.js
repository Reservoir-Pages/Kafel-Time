// Filter button
const compareBtns = document.querySelectorAll('.compare__lists-btn');
compareBtns.forEach(compareBtn => {
  compareBtn.addEventListener('click', (e) => {
    const currentcompareBtn = e.currentTarget;

    console.log(currentcompareBtn);

    compareBtns.forEach(compareBtn => {
      if (compareBtn !== currentcompareBtn) {
        compareBtn.classList.remove('compare__lists-btn--active');
      }
    });
    currentcompareBtn.classList.add('compare__lists-btn--active');
  });
});

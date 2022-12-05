// Kits button
const kitsBtns = document.querySelectorAll('.kits__btn');
kitsBtns.forEach(kitsBtn => {
  kitsBtn.addEventListener('click', (e) => {
    const currentKitsBtn = e.currentTarget;
    kitsBtns.forEach(kitsBtn => {
      if (kitsBtn !== currentKitsBtn) {
        kitsBtn.classList.remove('kits__btn--active');
      }
    });
    currentKitsBtn.classList.add('kits__btn--active');
  });
});


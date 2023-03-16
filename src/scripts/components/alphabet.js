// Alphabet hidden
if(window.innerWidth < 769) {
  document.querySelectorAll('.alphabet__language').forEach(alphabet => {
    alphabet.classList.remove('tab-content--active');
  });
};

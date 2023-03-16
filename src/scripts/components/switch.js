const switches = document.querySelectorAll('.switch');
switches.forEach(switcher => {
  switcher.addEventListener('click', (e) => {
    e.preventDefault();
    switcher.classList.toggle('switch--active');
    const labels = switcher.querySelectorAll('label');
    labels.forEach(label => {
      label.classList.toggle('label--active');
      label.classList.contains('label--active')
        ? label.querySelector('input').setAttribute('checked', '')
        : label.querySelector('input').removeAttribute('checked')
      ;
    });
  });
});

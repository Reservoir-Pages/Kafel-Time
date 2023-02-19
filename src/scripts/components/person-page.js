// Открытие на мобильной версии
if(window.innerWidth < 769) {
  if(document.querySelector('person')) {
    const personData = document.querySelectorAll('.person__data');
    const personBtns = document.querySelectorAll('.person__tabs-btn');
    const personTabs = document.querySelector('.person__tabs');
    const breadcrumbs = document.querySelector('.person__breadcrumbs');
    const returnBtn = document.querySelector('.person__return-btn');
    const personTitle = document.querySelector('.person__title');

    personData.forEach(data => {
      data.classList.remove('tab-content--active');
    });

    personBtns.forEach(personBtn => {
      personBtn.addEventListener('click', (e) => {
        personTabs.classList.add('is-hidden');
        breadcrumbs.classList.add('is-hidden');
        returnBtn.classList.remove('is-hidden');
        personTitle.textContent = personBtn.textContent.trim()
      });
    });

    returnBtn.addEventListener('click', (e) => {
      personTabs.classList.remove('is-hidden');
      breadcrumbs.classList.remove('is-hidden');
      returnBtn.classList.add('is-hidden');
      personData.forEach(data => {
        data.classList.remove('tab-content--active');
      });
      personTitle.textContent = 'Личный кабинет';
    });
  };
};

// Tabs profitable
const tabBtns = document.querySelectorAll('.profitable__btn');
tabBtns.forEach(tab => {
  tab.addEventListener('click', (e) => {
    const path = e.currentTarget.dataset.tabsPath;
    tabBtns.forEach(btn => {
      btn.classList.remove('profitable__btn--active');
    });
    document.querySelectorAll('.profitable__content').forEach(content => {
      content.classList.remove('profitable__content--active');
    });
    document.querySelector(`[data-tabs-path="${path}"]`).classList.add('profitable__btn--active');
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('profitable__content--active');
  });
});
//Tab in profitable tabs
const tabContentBtns = document.querySelectorAll('.profitable__content-btn');
tabContentBtns.forEach(tab => {
  tab.addEventListener('click', (e) => {
    const path = e.currentTarget.dataset.tabsPath;
    document.querySelectorAll('.profitable__content--active .profitable__content-btn').forEach(btn => {
      btn.classList.remove('profitable__content-btn--active');
    });
    document.querySelectorAll('.profitable__content--active .profitable__content-kit').forEach(content => {
      content.classList.remove('profitable__content-kit--active');
    });
    document.querySelector(`[data-tabs-path="${path}"]`).classList.add('profitable__content-btn--active');
    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('profitable__content-kit--active');
  });
});

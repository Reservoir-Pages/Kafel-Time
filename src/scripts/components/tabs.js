// Tabs
const tabContents = document.querySelectorAll('.tab-content');
tabContents.forEach(tabContent => {
  if (tabContent.querySelectorAll('.tab-content').length !== 0) {
    const tabBtns = tabContent.querySelector('.tabs').querySelectorAll('.tab-btn');
    tabBtns.forEach(tabBtn => {
      tabBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const path = e.currentTarget.dataset.tabsPath;
        tabBtns.forEach(tabBtn => {
          tabBtn.classList.remove('tab-btn--active');
        });
        tabBtn.classList.add('tab-btn--active');
        const tabContentChildrens = tabContent.children;
        [...tabContentChildrens].forEach(tabContentChildren => {
          if(tabContentChildren.classList.contains('tab-content--active')) {
            tabContentChildren.classList.remove('tab-content--active');
          };
          document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tab-content--active');
        });
      });
    });
  };
});

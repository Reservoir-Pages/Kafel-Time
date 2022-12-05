// Person Tabs
const personTabs = document.querySelector('.person__tabs');
const personTabsBtns = document.querySelectorAll('.person__tabs-btn');
const personTabsContents = document.querySelectorAll('.person__data');
if (personTabs) {
  personTabs.addEventListener('click', (e) => {
    if (e.target.classList.contains('person__tabs-btn')) {
      const tabsPath = e.target.dataset.tabsPath;
      tabsHandler(tabsPath);
    };
  });
};
const tabsHandler = (path) => {
  personTabsBtns.forEach(tabsBtn => {tabsBtn.classList.remove('person__tabs-btn--active')});
  document.querySelector(`[data-tabs-path=${path}]`).classList.add('person__tabs-btn--active');

  personTabsContents.forEach(tabsContent => {tabsContent.classList.remove('person__data--active')});
  document.querySelector(`[data-tabs-target=${path}]`).classList.add('person__data--active');
};

const form = document.querySelector('.form');
const continueBtn = document.querySelector('.form__footer-btn');
const formContents = document.querySelectorAll('.form__content');
const formSteps = document.querySelectorAll('.form__steps-item');
if(continueBtn) {
  continueBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let path;
    [...formSteps].some(step => {
      if(!step.classList.contains('form__steps-item--active')) {
        step.classList.add('form__steps-item--active');
        path = step.dataset.path;
        return true;
      };
    });
    formContents.forEach(content => {
      content.classList.add('is-hidden');
      if(content.dataset.target === path) {
        content.classList.remove('is-hidden');
      };
    });
    if(path === 'confirmation') {
      continueBtn.addEventListener('click', (e) => {
        console.log('Submit');
        form.submit();
      });
    };
  });
};
formContents.forEach(content => {
  const formRadioBtns = content.querySelectorAll('.form__content-radio');
  const additionalFormBody = content.querySelector('.form__content-body--additional');
  const formBody = content.querySelector('.form__content-body');
  if(additionalFormBody) {
    formRadioBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if(btn.dataset.path === additionalFormBody.dataset.target) {
          additionalFormBody.classList.toggle('is-hidden');
          formBody.classList.toggle('mb-40');
        };
      });
    });
  };
});

// Change background switch
const formToggle = document.querySelector('.form-toggle');
const toggleBtn = document.querySelectorAll('.form-toggle input');
toggleBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    if(btn.id === 'radio-on') {
      formToggle.classList.add('bg-yellow');
    } else {
      formToggle.classList.remove('bg-yellow');
    };
  });
});

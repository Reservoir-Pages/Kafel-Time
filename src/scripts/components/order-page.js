const continueBtn = document.querySelector('.form__footer-btn');
const formStepsContents = document.querySelectorAll('.form__content');
const returnBtn = document.querySelector('.form__footer-link');

if(continueBtn) {
  continueBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const formStepsDisable = document.querySelectorAll('.form__steps-item--disable');
    const formStepsActive = document.querySelectorAll('.form__steps-item--active');
    const path = formStepsDisable[0].dataset.stepPath;
    formStepsDisable[0].classList.add('form__steps-item--active');
    formStepsDisable[0].classList.remove('form__steps-item--disable');
    selectStep(path);
    returnBtn.dataset.stepPath = formStepsActive[formStepsActive.length - 1].dataset.stepPath;
    returnBtn.getElementsByTagName('span')[0].textContent = 'Назад';
    if(path === 'confirmation') {
      continueBtn.classList.add('is-hidden');
      document.querySelector('.cost__credit').classList.add('is-hidden');
      document.querySelector('.card-order__policy').classList.remove('is-hidden');
      document.querySelector('.card-order__btns').classList.remove('is-hidden');
    };
    if(path === 'delivery') {
      document.querySelector('.cost__parameter--pickup').classList.remove('is-hidden');
    };
  });
  returnBtn.addEventListener('click', (e) => {
    const formStepsActive = document.querySelectorAll('.form__steps-item--active');
    const path = formStepsActive[formStepsActive.length - 2].dataset.stepPath;
    if (path === 'delivery' || path === 'recipient') {
      e.preventDefault();
      formStepsActive[formStepsActive.length - 1].classList.add('form__steps-item--disable');
      formStepsActive[formStepsActive.length - 1].classList.remove('form__steps-item--active');
      continueBtn.classList.remove('is-hidden');
      selectStep(path);
      if(path === 'recipient') {
        returnBtn.getElementsByTagName('span')[0].textContent = 'Назад в корзину';
      };
    };
  });
  function selectStep(path) {
    formStepsContents.forEach(content => {
      content.classList.add('is-hidden');
      document.querySelector(`[data-step-target="${path}"]`).classList.remove('is-hidden');
    });

    return;
  };
  // Form header radio button
  const formRadioBtns = document.querySelectorAll('.form__content-header__btn');
  const additionalFormBody = document.querySelectorAll('.form__content-body.is-hidden');
  const formDescription = document.querySelector('.form__description');
  formRadioBtns.forEach(radioBtn => {
    radioBtn.addEventListener('click', (e) => {
      const path = radioBtn.dataset.path;
      if (path !== undefined) {
        if(radioBtn.dataset.path === 'delivery-status') {
          formDescription.classList.add('is-hidden');
          document.querySelector('.cost__parameter--pickup').classList.add('is-hidden');
          document.querySelector('.cost__parameter--delivery').classList.remove('is-hidden');
        } else {
          formDescription.classList.remove('is-hidden');
          document.querySelector('.cost__parameter--pickup').classList.remove('is-hidden');
          document.querySelector('.cost__parameter--delivery').classList.add('is-hidden');
        };
        if(radioBtn.dataset.path === 'company') {
          document.querySelectorAll('.form__content-body')[0].classList.add('mb-40');
        } else {
          document.querySelectorAll('.form__content-body')[0].classList.remove('mb-40');
        };
        additionalFormBody.forEach(content => {
          content.classList.add('is-hidden');
          if(document.querySelector(`[data-target="${path}"]`)) {
            document.querySelector(`[data-target="${path}"]`).classList.remove('is-hidden');
          };
        });
      };
    });
  });
  // TextArea
  const textArea = document.querySelector('.form__content-textarea');
  const textAreaBtn = document.querySelector('.form__content-textarea + svg');
  textAreaBtn.addEventListener('click', (e) => {
    textArea.classList.toggle('is-active');
    textAreaBtn.classList.toggle('is-active');
  });
  // Change background switch
  const formToggle = document.querySelector('.form-switch');
  const toggleBtn = document.querySelectorAll('.form-switch input');
  toggleBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if(btn.id === 'radio-on') {
        document.querySelector('.form__content-lift').classList.remove('is-hidden');
      } else {
        document.querySelector('.form__content-lift').classList.add('is-hidden');
      };
    });
  });
  // Lift
  const liftBtn = document.querySelector('.lift-btn');
  let check = false;
  liftBtn.addEventListener('click', (e) => {
    check = !check;
    liftBtn.checked = check;
  });
};

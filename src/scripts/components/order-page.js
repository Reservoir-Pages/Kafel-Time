// Form show
const formRadioBtns = document.querySelectorAll('.form__input');

function setIsHidden(btn) {
  if(btn.checked && btn.classList.contains('form__input--company')) {
    document.querySelector('.form__content-body--additionaly').classList.remove('is-hidden');
  } else {
    document.querySelector('.form__content-body--additionaly').classList.add('is-hidden');
  }

}

formRadioBtns.forEach(btn => {
  if(btn.checked && btn.classList.contains('form__input--company')) {
    document.querySelector('.form__content-body--additionaly').classList.remove('is-hidden');
  }
  btn.addEventListener('click', (e) => {
    setIsHidden(btn);
  });
});

const continueBtn = document.querySelector('.form__footer-btn');
const executionSteps = document.querySelectorAll('.form__header-item');
const formContents = document.querySelectorAll('.form__content');


continueBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let index;
  formContents.forEach((content, i) => {
    if(!content.classList.contains('is-hidden')) {
      content.classList.add('is-hidden');
      index = i;
    }
    if(i === index + 1) {
      content.classList.remove('is-hidden');
    }
  });
  for (let step of executionSteps) {
    if (!step.classList.contains('form__header-item--active')) {
      step.classList.add('form__header-item--active');
      return;
    };
  };
});

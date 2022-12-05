// Modals
if (document.querySelector('.account-window')) {
  // Находим контейнер для модалки
  const accountWindow = document.querySelector('.account-window');
  // Функция создания полей ввода
  function createInput(placeholder) {
    const label = document.createElement('label');
    label.classList.add('account-form__label');
    const input = document.createElement('input');
    input.classList.add('account-form__input');
    input.placeholder = placeholder;
    if (placeholder === 'Пароль' || placeholder === 'Введите пароль') {
      input.type = 'password';
      input.name = 'password'
    } else if (placeholder === 'E-mail'){
      input.type = 'email';
      input.name = 'email';
    } else if (placeholder === 'Введите Ваш номер телефона'){
      input.type = 'tel';
      input.name = 'tel';
    } else {
      input.type = 'text';
    }
    if (placeholder === 'Ведите логин (номер телефона)') {
      input.name = 'login';
    }
    if (placeholder === 'Фамилия') {
      input.name = 'surname';
    }
    if (placeholder === 'Имя') {
      input.name = 'name';
    }
    if (placeholder === 'Отчество') {
      input.name = 'middlename';
    }
    input.setAttribute('required', '')
    label.append(input);

    input.addEventListener('input', (e) => {
      if (inputValidation(input)) {
        label.classList.add('account-form__label--access');
        label.classList.remove('account-form__label--warning');
      } else {
        label.classList.remove('account-form__label--access');
        label.classList.add('account-form__label--warning');
      };
    });

    input.addEventListener('blur', (e) => {
      if (input.value === "") {
        label.classList.remove('account-form__label--warning');
      }
    });

    // console.log(bool);

    return label;
  };
  // Функция создания кнопок
  function createBtn(value) {
    const button = document.createElement('button');
    button.classList.add('account-form__btn', 'btn-reset')
    button.textContent = value;
    if (value === 'Войти' || value === 'Зарегистрироваться' || value === 'Сохранить') {
      button.type = 'submit';
      button.setAttribute('disabled', '');
    };

    button.addEventListener('click', (e) => {
      e.preventDefault();

      const inputs = document.querySelectorAll('.account-form__input');

      if (button.textContent === 'Войти') {
        if (inputs.length === 2 && inputs[0].value !== '' && inputs[1].value !== '') {
          // headerModal.remove();
          // alert('Здесь должна быть страница личного кабинета');
          window.location.href = 'person-page.html';
        } else if (inputs[0].value !== '') {
          // headerModal.remove();
          alert('Здесь должна быть страница личного кабинета');
        } else {
          alert('Заполните все поля');
        }
      }
      if (button.textContent === 'Забыли пароль?') {
        const form = document.querySelector('.account-form');
        form.remove();
        headerModal.remove();
        const title = 'На указанный номер телефона был выслан шестизначный пароль для входа в личный кабинет';
        accountWindow.append(createForm(['Введите пароль'], ['Войти'], title, null));
      }
      if (button.textContent === 'Зарегистрироваться') {
        const input = document.querySelector('.account-form__input');

        if (input.value !== '') {
          const form = document.querySelector('.account-form');
          form.remove();
          headerModal.remove();
          accountWindow.append(createForm(['Введите пароль'], ['Сохранить']));
        } else {
          alert('Заполните все поля');
        };
      };

      if (button.textContent === 'Сохранить') {
        console.log(inputs.length === 4);
        console.log(button.classList.contains('account-form__btn--active'));
        if (inputs.length === 4 && button.classList.contains('account-form__btn--active')) {
          window.location.href = 'person-page.html';
        } else if (inputs[0].value !== '') {
          const form = document.querySelector('.account-form');
          form.remove();
          accountWindow.append(createForm(['Фамилия', 'Имя', 'Отчество', 'E-mail'], ['Сохранить'], 'Укажите свои личные данные', null));
        } else {
          alert('Заполните все поля');
        };
      };
    });

    return button;
  };
  // Функуия проверки поля ввода
  function inputValidation(input) {
    if (input.type === 'email' && /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i.test(input.value)) {
      return true;
    };
    if (input.type === 'tel' && /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(input.value)) {
      return true;
    };
    if ((input.type === 'text' || input.type === 'password') && input.value.length > 3) {
      return true;
    };

    return false;
  };
  // Функция активации кнопки
  function btnIsActive(inputsArray, btn) {
    inputsArray.forEach(element => {
      element.addEventListener('input', (e) => {
        let bool = [];
        inputsArray.forEach(element => {
          if (bool.length < inputsArray.length && element.classList.contains('account-form__label--access')) {
            bool.push('true')
          } else if (!element.classList.contains('account-form__label--access')) {
            bool = [];
          }
        });
        if (bool.length === inputsArray.length) {
          btn.classList.add('account-form__btn--active');
          btn.removeAttribute('disabled');
        }
        if (bool.length < inputsArray.length) {
          btn.classList.remove('account-form__btn--active');
          btn.setAttribute('disabled', '');
        }
      });
    });
  };
  // Функция создания верхней части модального окна
  function createHeaderModal() {
    // Создаем сам хедер
    const headerModal = document.createElement('div');
    headerModal.classList.add('account-window__header');
    // Создаем и размещаем кнопку входа
    const loginBtn = document.createElement('button');
    loginBtn.classList.add('account-window__btn', 'account-window__btn--active', 'btn-reset', 'js-login');
    loginBtn.textContent = 'Вход';
    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const form = document.querySelector('.account-form');
      registerBtn.classList.remove('account-window__btn--active');
      loginBtn.classList.add('account-window__btn--active');
      form.remove();
      accountWindow.append(createForm(['Ведите логин (номер телефона)', 'Пароль'], ['Войти', 'Забыли пароль?']));
    });
    headerModal.append(loginBtn);
    // Создаем и размещаем кнопку регистрации
    const registerBtn = document.createElement('button');
    registerBtn.classList.add('account-window__btn', 'btn-reset', 'js-registration');
    registerBtn.textContent = 'Регистрация';
    registerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const form = document.querySelector('.account-form');
      loginBtn.classList.remove('account-window__btn--active');
      registerBtn.classList.add('account-window__btn--active');
      form.remove();
      accountWindow.append(createForm(['Введите Ваш номер телефона'], ['Зарегистрироваться'], null, 'Отправляя данные, я принимаю условия «Пользовательского соглашения»'));
    });
    headerModal.append(registerBtn);
    // Возвращаем готовый верх модального окна
    return headerModal;
  };
  // Получаем и размещаем на сцене верхнюю часть модального окна
  const headerModal = createHeaderModal();
  accountWindow.append(headerModal);
  // Функция создания формы
  function createForm(inputsPlaceholder, btnsValue, title = null, descr = null) {
    // Получаем и размещаем форму
    const form = document.createElement('form');
    form.classList.add('account-form');
    // Если есть заголовок
    if (title !== null) {
      const formTitle = document.createElement('div');
      formTitle.textContent = title;
      formTitle.classList.add('account-form__title');
      form.append(formTitle);
    };
    // Проходим по плейсхолдерам
    const inputsArray = [];
    inputsPlaceholder.forEach((placeholder) => {
      const input = createInput(placeholder);
      inputsArray.push(input);
      form.append(input);
    });
    // Если есть описание
    if (descr !== null) {
      const description = document.createElement('small');
      description.textContent = descr;
      description.classList.add('account-form__description');
      form.append(description);
    };
    // Проходим по названиям кнопок
    const btnArray = [];
    btnsValue.forEach(value => {
      const btn = createBtn(value);
      btnArray.push(btn);
      form.append(btn);
    });

    // Установить кнопке активное состояние
    btnIsActive(inputsArray, btnArray[0]);

    return form;
  };
  // Получаем и размещаем на сцене форму
  const form = createForm(['Ведите логин (номер телефона)', 'Пароль'], ['Войти', 'Забыли пароль?'])
  accountWindow.append(form);
}

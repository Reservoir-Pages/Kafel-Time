
const parameterLists = document.querySelectorAll('.parameters');
parameterLists.forEach(list => {
  // Line marker
  if(window.innerWidth > 1024) {
    const parameterItems = list.querySelectorAll('.parameters__item');
    parameterItems.forEach((item, index) => {
      item.addEventListener('mouseover', (e) => {
        let currentIndex = index;
        item.classList.add('is-hover');
        parameterLists.forEach(list => {
          const listItems = list.querySelectorAll('.parameters__item');
          listItems[currentIndex].classList.add('is-hover');
        });
      });
      item.addEventListener('mouseout', (e) => {
        parameterLists.forEach(list => {
          const listItems = list.querySelectorAll('.parameters__item');
          listItems.forEach(item => {
            item.classList.remove('is-hover');
          });
        });
      });
    });
  }

  // Label for items
  const parameters = list.querySelectorAll('.parameters__item');
  const parameterValues = [
    'Артикул',
    'Установка',
    'Цвет',
    'Направление выпуска',
    'Полочка в чаше',
    'Механизм смыва',
    'Система инсталляции',
    'Коллекция',
    'Монтаж',
    'Ширина, мм',
    'Высота, мм',
    'Глубина, мм',
    'Вес, кг',
    'Материал',
    'Покрытие',
    'Дизайн',
    'Форма',
    'Угловая конструкция',
    'Безободковый',
    'Сиденье в комплекте',
    'Система антивсплеск',
    'Организация смывающего потока',
    'Установка сливного бачка',
    'Подвод воды',
    'Сиденье с микролифтом',
    'Материал сиденья',
    'Цвет сиденья',
    'Страна-производитель',
    'Гарантия производителя',
  ];
  parameters.forEach((parameter, index) => {
    parameter.dataset.before = parameterValues[index];
  });
});







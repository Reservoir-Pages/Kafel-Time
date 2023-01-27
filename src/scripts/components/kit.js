import Swiper from 'swiper/bundle';

const container = document.querySelector('.kits__container');

const plumbing = [
  "Унитазы с инсталляцией",
  "Душевые комплекты",
  "Душевые ограждения",
  "Комплекты мебели",
  "Test"
];

const tile = [
  "Плитка 1",
  "Плитка 2",
  "Плитка 3",
  "Плитка 4",
  "Test"
];

function createSlider(slides, dataAttr = 'plumbing') {
  const slider = document.createElement('div');
  slider.classList.add('kits__swiper', 'kits-swiper', 'swiper');
  slider.dataset.tabsTarget = dataAttr;
  container.append(slider);

  const sliderWrapper = document.createElement('div');
  sliderWrapper.classList.add('kits-swiper__wrapper', 'swiper-wrapper');
  slider.append(sliderWrapper);

  slides.forEach(slide => {
    const link = document.createElement('a');
    link.classList.add('kits-swiper__slide', 'swiper-slide');
    link.href = 'kits-page.html';
    sliderWrapper.append(link);

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('kits-swiper__slide-image');
    link.append(imageWrapper);

    const image = document.createElement('img');
    image.src = 'images/test-quad-img.png';
    image.alt = 'картинка';
    image.width = '295';
    image.height = '295';
    imageWrapper.append(image);

    const description = document.createElement('span');
    description.classList.add('kits-swiper__slide-description');
    description.textContent = slide;
    link.append(description);
  });

  new Swiper('.kits__swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.kits__button-next',
      prevEl: '.kits__button-prev',
    },
  });

  return slider;
};

if(container) {
  createSlider(plumbing);
}


const btns = document.querySelectorAll('.kits__btn');
btns.forEach(btn => {
  btn.addEventListener('click', (e) => {

    const path = e.currentTarget.dataset.tabsPath;

    if(!btn.classList.contains('kits__btn--active')) {
      btns.forEach(btn => {
        btn.classList.toggle('kits__btn--active');
      });

      const slider = container.querySelector('.kits__swiper');
      slider.remove();

      if (path === 'plumbing') {
        createSlider(plumbing, path);
      } else {
        createSlider(tile, path);
      };
    };
  });
});

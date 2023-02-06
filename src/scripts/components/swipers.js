import Swiper from 'swiper/bundle';
// Swiper(Слайдер с тремя слайдами)
const mainPageTrandsSwiper = new Swiper('.trends-swiper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 10,
  navigation: {
    nextEl: '.trends__button-next',
    prevEl: '.trends__button-prev',
  },
  breakpoints: {
    769: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
});
// Swiper(Слайдер с четырьмя слайдами)
const mainPageCeramicsSwiper = new Swiper('.ceramics-swiper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 10,
  navigation: {
    nextEl: '.ceramics__button-next',
    prevEl: '.ceramics__button-prev',
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  }
});
const mainPageNewSwiper = new Swiper('.new-swiper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 10,
  navigation: {
    nextEl: '.new__button-next',
    prevEl: '.new__button-prev',
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  }
});
const tilesPageSwiper = new Swiper('.catalog-tiles__swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.catalog-tiles__button-next',
    prevEl: '.catalog-tiles__button-prev',
  },
});
const plumbingPageSwiper = new Swiper('.catalog-plumbing__swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.catalog-plumbing__button-next',
    prevEl: '.catalog-plumbing__button-prev',
  },
});
// Swiper(Слайдер с шестью слайдами)
const mainPagePlumbingSwiper = new Swiper('.plumbing-swiper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 10,
  navigation: {
    nextEl: '.plumbing__button-next',
    prevEl: '.plumbing__button-prev',
  },
  breakpoints: {
    769: {
      slidesPerView: 6,
      spaceBetween: 20,
    }
  }
});
const aboutPageSwiper = new Swiper('.about-swiper', {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 20,
  navigation: {
    nextEl: '.about__swiper-button-next',
    prevEl: '.about__swiper-button-prev',
  },
});
// Swiper(Слайдер с автопрокруткой)
const mainPageBannerSwiper = new Swiper('.banner-swiper', {
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
  speed: 1000,
  pagination: {
    el: '.banner-swiper__pagination',
    clickable: true,
  },
});
// Swiper(Слайдер с цифрами в пагинации)
const brandPageCatalogSwiper = new Swiper('.catalog-brand-list-swiper', {
  slidesPerView: 1,
  allowTouchMove: false,
  pagination: {
    el: '.catalog-brand-list-swiper__pagination',
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    prevEl: '.catalog-brand-list-swiper__button--prev',
    nextEl: '.catalog-brand-list-swiper__button--next',
  },
});
const tilesPageCatalogSwiper = new Swiper('.catalog-tiles-list-swiper', {
  slidesPerView: 1,
  allowTouchMove: false,
  pagination: {
    el: '.catalog-tiles-list-swiper__pagination',
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    prevEl: '.catalog-tiles-list-swiper__button--prev',
    nextEl: '.catalog-tiles-list-swiper__button--next',
  },
});
const plumbingPageCatalogSwiper = new Swiper('.catalog-plumbing-list-swiper', {
  slidesPerView: 1,
  allowTouchMove: false,
  pagination: {
    el: '.catalog-plumbing-list-swiper__pagination',
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    prevEl: '.catalog-plumbing-list-swiper__button--prev',
    nextEl: '.catalog-plumbing-list-swiper__button--next',
  },
});
const brandsPageCatalogSwiper = new Swiper('.brands-page__swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.brands-swiper__swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    prevEl: '.brands-swiper__button--prev',
    nextEl: '.brands-swiper__button--next',
  },
});
// Swiper(Слайдеры с взаимным управлением)
const comparePageCardsSwiper = new Swiper('.compare__card-swiper', {
  loop: true,
  allowTouchMove: false,
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.compare__button-next',
    prevEl: '.compare__button-prev',
  },
});
const comparePageParametersSwiper = new Swiper('.compare__descr-swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
});
comparePageCardsSwiper.controller.control = comparePageParametersSwiper;
comparePageParametersSwiper.controller.control = comparePageCardsSwiper;
// Swiper(Слайдер с превью)
const productPageBigSwiper = new Swiper(".product__swiper-add", {
  loop:true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
const productPageMiniSwiper = new Swiper(".product__swiper-preview", {
  loop:true,
  thumbs: {
    swiper: productPageBigSwiper,
  },
});
// Swiper(Слайдер с перемоткой при наведении)
const cardSwipers = document.querySelectorAll('.card__swiper');
cardSwipers.forEach(cardSwiper => {
  initCardSwiper(cardSwiper);
});
const cardTabBtns = document.querySelectorAll('.tab-btn');
cardTabBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    cardSwipers.forEach(swiper => {
      swiper.swiper.destroy();
      setTimeout(() => {
        initCardSwiper(swiper);
      },1);
    });
  });
});
function initCardSwiper (element) {
  const cardsSwiper = new Swiper(element, {
    loop: true,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    pagination: {
      el: '.card__pagination',
      clickable: true,
    },
    on: {
      init: function () {
        document.querySelectorAll('.swiper-pagination-bullet').forEach(bullet => {
          bullet.addEventListener('mouseenter', (e) => {
            bullet.click();
          });
        });
      },
    },
  });

  return cardsSwiper;
};
// Swiper(Слайдер в табе)
const mainPageKitsSwipers = document.querySelectorAll('.kits__swiper');
mainPageKitsSwipers.forEach(kitsSwiper => {
  initialMainPageKitsSwiper(kitsSwiper);
});
const kitsTabBtns = document.querySelectorAll('.tab-btn');
kitsTabBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    mainPageKitsSwipers.forEach(swiper => {
      swiper.swiper.destroy();
      setTimeout(() => {
        initialMainPageKitsSwiper(swiper);
      },1);
    });
  });
});
function initialMainPageKitsSwiper(element) {
  new Swiper(element, {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
      nextEl: '.kits__button-next',
      prevEl: '.kits__button-prev',
    },
    breakpoints: {
      769: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
  });
};

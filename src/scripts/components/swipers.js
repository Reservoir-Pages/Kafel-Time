import Swiper from 'swiper/bundle';
// Swiper(Слайдер с тремя слайдами)
const mainPageTrandsSwiper = new Swiper('.trands-swiper', {
  loop: true,
  slidesPerView: 1.8,
  spaceBetween: 10,
  navigation: {
    nextEl: '.trands__button-next',
    prevEl: '.trands__button-prev',
  },
  breakpoints: {
    769: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
});
const mainPageStocksSwiper = new Swiper('.stocks-swiper', {
  loop: true,
  slidesPerView: 1.7,
  spaceBetween: 10,
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
  slidesPerView: 2.5,
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
  slidesPerView: 2.5,
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
  slidesPerView: 3.5,
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
const mainPagePopularSwiper = new Swiper('.popular__swiper', {
  loop: true,
  slidesPerView: 3.5,
  spaceBetween: 10,
  breakpoints: {
    769: {
      slidesPerView: 6,
      spaceBetween: 20,
    }
  }
});
const mainPageClientsSwiper = new Swiper('.clients__swiper', {
  loop: true,
  slidesPerView: 3.5,
  spaceBetween: 10,
  breakpoints: {
    769: {
      slidesPerView: 6,
      spaceBetween: 20,
    }
  }
});
const aboutPageSwiper = new Swiper('.about-swiper', {
  loop: true,
  slidesPerView: 2.5,
  spaceBetween: 20,
  navigation: {
    nextEl: '.about__swiper-button-next',
    prevEl: '.about__swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 6,
      spaceBetween: 20,
    }
  }
});
// Swiper(Слайдер с карточками разной ширины)
if(window.innerWidth < 769) {
  document.querySelectorAll('.filters-horizontal__item-body__btn.is-hidden').forEach(hidden => {
    hidden.classList.remove('is-hidden');
  });
  const catalogPageFilterSwiper = new Swiper('.filters-horizontal__item-swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
  });
};
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
function digitPaginationSwiperInit(element, navigation, rows, perView, perColumn, perGroup, spaceBetween, rowsMobile, perViewMobile, perColumnMobile, perGroupMobile, spaceBetweenMobile) {
  const swiper = new Swiper(element, {
    grid: {
      fill: 'rows',
      rows: rowsMobile,
    },
    slidesPerView: perViewMobile,
    slidesPerColumn: perColumnMobile,
    slidesPerGroup: perGroupMobile,
    spaceBetween: spaceBetweenMobile,
    allowTouchMove: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
      prevEl:  `${navigation}__button--prev`,
      nextEl:  `${navigation}__button--next`,
    },
    breakpoints: {
      769: {
        grid: {
          rows: rows,
        },
        slidesPerView: perView,
        slidesPerColumn: perColumn,
        slidesPerGroup: perGroup,
        spaceBetween: spaceBetween,
      },
    },
  });

  return swiper;
};
const swiperElements = document.querySelectorAll('.swiper');
let digitPaginationSwiper;
let parentClassElement;
let swiperElement;
let tabDataPath = 'products';
swiperElements.forEach(swiper => {
  if (swiper.classList.contains('catalog-tiles-list-swiper')) {
    parentClassElement = '.catalog-tiles-list-swiper';
    swiperElement = `${parentClassElement}.tab-content--active`;
    tabDataPath = 'collections';
    digitPaginationSwiper = digitPaginationSwiperInit(swiperElement, parentClassElement, 3, 4, 4, 4, 20, 4, 1, 1, 1, 0);
  };
  if (swiper.classList.contains('catalog-plumbing-list-swiper')) {
    parentClassElement = '.catalog-plumbing-list-swiper';
    swiperElement = parentClassElement;
    digitPaginationSwiper = digitPaginationSwiperInit(swiperElement, parentClassElement, 3, 4, 4, 4, 20, 4, 2, 2, 2, 0);
  };
  if (swiper.classList.contains('catalog-brand-list__swiper')) {
    parentClassElement = '.catalog-brand-list__swiper';
    swiperElement = parentClassElement;
    digitPaginationSwiper = digitPaginationSwiperInit(swiperElement, parentClassElement, 3, 4, 4, 4, 20, 4, 2, 2, 2, 0);
  };
});
let placement = 'tile';
const placementBtns = document.querySelectorAll('.placement__btn');
placementBtns.forEach(placementBtn => {
  placementBtn.addEventListener('click', (e) => {
    e.preventDefault();
    placement = placementBtn.dataset.placement;
    digitPaginationSwiper.destroy();
    placementBtns.forEach(placementBtn => {
      placementBtn.classList.remove('placement__btn--active');
    });
    placementBtn.classList.add('placement__btn--active');
    const placementLists = document.querySelectorAll(parentClassElement);
    if (placement === 'list') {
      placementLists.forEach(placementList => {
        placementList.querySelectorAll('.card').forEach(card => {
          card.classList.add('card-horizontal');
        });
      });
      digitPaginationSwiper = digitPaginationSwiperInit(swiperElement, parentClassElement, 6, 1, 1, 1, 0, 4, 1, 1, 1, 0);
    } else {
      placementLists.forEach(placementList => {
        placementList.querySelectorAll('.card').forEach(card => {
          card.classList.remove('card-horizontal');
        });
      });
      if (tabDataPath === 'products') {
        digitPaginationSwiper = digitPaginationSwiperInit(swiperElement, parentClassElement, 3, 4, 4, 4, 20, 4, 2, 2, 2, 20);
      } else {
        digitPaginationSwiper = digitPaginationSwiperInit(swiperElement, parentClassElement, 3, 4, 4, 4, 20, 4, 1, 1, 1, 0);
      };
    };
  });
});
const tabs = document.querySelectorAll('.catalog-tiles-list__choice-btn');
tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    tabDataPath = tab.dataset.tabsPath;
    digitPaginationSwiper.destroy();
    setTimeout(() => {
      const placementLists = document.querySelector(swiperElement);
      if (placement === 'tile') {
        if (tabDataPath === 'products') {
          digitPaginationSwiper = digitPaginationSwiperInit(swiperElement, parentClassElement, 3, 4, 4, 4, 20, 4, 2, 2, 2, 10);
        } else {
          digitPaginationSwiper = digitPaginationSwiperInit(swiperElement, parentClassElement, 3, 4, 4, 4, 20, 4, 1, 1, 1, 0);
        };
        placementLists.querySelectorAll('.card').forEach(card => {
          card.classList.remove('card-horizontal');
        });
      } else {
        digitPaginationSwiper = digitPaginationSwiperInit(swiperElement, parentClassElement, 4, 1, 1, 1, 0, 4, 1, 1, 1, 0);
        placementLists.querySelectorAll('.card').forEach(card => {
          card.classList.add('card-horizontal');
        });
      };
    }, 1);
  });
});
const brandsPage = digitPaginationSwiperInit('.brands-swiper', '.brands-swiper', 6, 5, 5, 5, 20, 6, 2, 2, 2, 10,);
// Swiper(Слайдеры с взаимным управлением)
const comparePageCardsSwiper = new Swiper('.compare__card-swiper', {
  loop: true,
  allowTouchMove: false,
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
    nextEl: '.card-swiper__btn--next',
    prevEl: '.card-swiper__btn--prev',
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: '.compare__button-next',
        prevEl: '.compare__button-prev',
      },
    }
  }
});
const comparePageParametersSwiper = new Swiper('.compare__descr-swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    769: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  }
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
    slidesPerView: 2.5,
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

// Swiper(Слайдер только на моибильном)
const productPageOthersSwiper = document.querySelector('.product__others-swiper');
const productPageSimilarSwiper = document.querySelector('.product__similar-swiper');
// const collectionPageProductsSwiper = document.querySelector('.collection__products-swiper');
const collectionPageProductsSwiper = document.querySelector('.collection__others-swiper');
let otherSwiper;

if (productPageOthersSwiper) {
  initialProductPageOtherSwiper(productPageOthersSwiper);
}
if (productPageSimilarSwiper) {
  initialProductPageOtherSwiper(productPageSimilarSwiper);
}
// if (collectionPageProductsSwiper) {
//   initialProductPageOtherSwiper(collectionPageProductsSwiper);
// }
if (collectionPageProductsSwiper) {
  initialProductPageOtherSwiper(collectionPageProductsSwiper, 1);
}

function initialProductPageOtherSwiper(element, slidesPerView = 2) {
  if (window.innerWidth < 769) {
    otherSwiper = new Swiper(element, {
      slidesPerView: slidesPerView,
      spaceBetween: 10,
      navigation: {
        prevEl:  `.${element.classList[0]}__btn--prev`,
        nextEl:  `.${element.classList[0]}__btn--next`,
      },
      // navigation: {
      //   nextEl: '.product__others-swiper__btn--next',
      //   prevEl: '.product__others-swiper__btn--prev',
      // },
    });
  } else if (window.innerWidth > 768 && element.classList.contains('swiper-container-initialized')) {
    otherSwiper.destroy();
  };
};

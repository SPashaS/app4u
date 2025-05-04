/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Parallax, Mousewheel,  } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Підключення базових стилів
import './slider.scss';
// Повний набір стилів з node_modules
// import 'swiper/css';

const resizableSwiper = (
  breakpoint,
  swiperClass,
  swiperSettings,
  callback,
  options = {}
) => {
  let swiper;
  const mediaQuery = window.matchMedia(breakpoint);
  const debug = options.debug ?? false;

  const log = (...args) => {
    if (debug) console.log(...args);
  };

  const enableSwiper = () => {
    swiper = new Swiper(swiperClass, swiperSettings);
    log('Swiper initialized');
    if (typeof callback === 'function') callback(swiper);
  };

  const disableSwiper = () => {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = undefined;
      log('Swiper destroyed');
    }
  };

  const checkBreakpoint = () => {
    if (mediaQuery.matches) {
      if (!swiper) enableSwiper();
    } else {
      disableSwiper();
    }
  };

  mediaQuery.addEventListener('change', checkBreakpoint);
  checkBreakpoint();

  // API для управления экземпляром
  return {
    destroy() {
      disableSwiper();
      mediaQuery.removeEventListener('change', checkBreakpoint);
      log('Listener removed');
    },
    updateSettings(newSettings) {
      if (swiper) {
        log('Updating swiper settings...');
        swiper.params = Object.assign(swiper.params, newSettings);
        swiper.update();
      }
    },
    get instance() {
      return swiper;
    },
  };
};


// Список слайдерів

if (document.querySelector('.hero__slider')) {
  // <- Вказуємо склас потрібного слайдера
  // Створюємо слайдер
  new Swiper('.hero__slider', {
    // <- Вказуємо склас потрібного слайдера
    // Підключаємо модулі слайдера
    // для конкретного випадку
    modules: [Navigation, Parallax],
    parallax: true,
    observer: true,
    observeParents: true,
    // slidesPerView: 1.145,
    // slidesPerView: 1,
    spaceBetween: 20,
    //autoHeight: true,
    speed: 800,

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    preloadImages: true,
    lazy: false,
    initialSlide: 1,

    //touchRatio: 0,
    //simulateTouch: false,
    loop: true,
    //preloadImages: false,
    //lazy: true,

    /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

    // Пагінація
    /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

    // Скроллбар
    /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

    // Кнопки "вліво/вправо"
    // navigation: {
    //   prevEl: '.swiper-button-prev',
    //   nextEl: '.swiper-button-next',
    // },
    // Брейкпоінти
    breakpoints: {
      320: {
        slidesPerView: 1.145,
      },
      // 640: {
      // 	// slidesPerView: 1,
      // 	// spaceBetween: 0,
      // 	// autoHeight: true,
      // },
      // 768: {
      // 	// slidesPerView: 2,
      // 	// spaceBetween: 20,
      // },
      992: {
        // slidesPerView: 3,
        // spaceBetween: 20,
        slidesPerView: 1.2,
      },
      // 1268: {
      // 	// slidesPerView: 4,
      // 	// spaceBetween: 30,
      // },
    },

    // Події
    on: {},
  });
}

if (document.querySelector('.how-we-work__slider')) {
  resizableSwiper('(min-width: 992px)', '.how-we-work__slider', {

  // <- Вказуємо склас потрібного слайдера
  // Створюємо слайдер
    // <- Вказуємо склас потрібного слайдера
    // Підключаємо модулі слайдера
    // для конкретного випадку
    modules: [Mousewheel ],
    // parallax: true,
    // observer: true,
    // observeParents: true,
    // slidesPerView: 1.145,

    // spaceBetween: 20,
    //autoHeight: true,
    speed: 800,

    // watchSlidesProgress: true,
    // watchSlidesVisibility: true,
    // preloadImages: true,
    // lazy: false,

    slidesPerView: "auto",
    mousewheel: true,
    direction: "vertical",

    //touchRatio: 0,
    //simulateTouch: false,
    // loop: true,
    //preloadImages: false,
    //lazy: true,

    /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

    // Пагінація
    /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

    // Скроллбар
    /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

    // Кнопки "вліво/вправо"
    // navigation: {
    //   prevEl: '.swiper-button-prev',
    //   nextEl: '.swiper-button-next',
    // },
    // Брейкпоінти
    breakpoints: {
      // 320: {
      // },
      // 640: {
      // 	// slidesPerView: 1,
      // 	// spaceBetween: 0,
      // 	// autoHeight: true,
      // },
      // 768: {
      // 	// slidesPerView: 2,
      // 	// spaceBetween: 20,
      // },
      // 992: {
      //   // slidesPerView: 3,
      //   // spaceBetween: 20,
      // },
      // 1268: {
      // 	// slidesPerView: 4,
      // 	// spaceBetween: 30,
      // },
    },

    // Події
    on: {},
  })
}

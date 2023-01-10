
//бургер меню

const menuBurger = document.querySelector('.header-navbar__btn');
const headerLinks = document.querySelector('.header-navbar__links');
const navbarInfo = document.querySelector('.navbar-center__info');
const body = document.querySelector('body');

menuBurger.addEventListener('click', (e) => {
  menuBurger.classList.toggle('header-navbar__btn--active');
  headerLinks.classList.toggle('header-navbar__links--active');
  navbarInfo.classList.toggle('navbar-center__info--active');
  if (menuBurger.classList.contains('header-navbar__btn--active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
});

// модалки

const btns = document.querySelectorAll('.header-tabs__item'),
  modal = document.querySelector('.modal'),
  searchInput = document.querySelector('.header-tabs__search'),
  modalInput = document.querySelector('.modal-input'),
  form = modalInput.querySelector('form'),
  closeButton = modal.querySelector('button');


btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.add('is-open');
  });
});

closeButton.addEventListener('click', () => {
  modal.classList.remove('is-open');
});

searchInput.addEventListener('click', (e) => {
  e.preventDefault();
  modalInput.classList.add('is-open');
});

modalInput.addEventListener('click', (e) => {
  if (!e.target.closest('form')) {
    modalInput.classList.remove('is-open');
  };
});


// Табы

const tabButtons = document.querySelectorAll('.best-filter__btn'),
  tabContent = document.querySelectorAll('.best-items__item'),
  changeContent = (array, value) => {
    array.forEach((element) => {
      if (element.dataset.filter === value) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    });
  };


tabButtons.forEach((tabButton, ) => {
  tabButton.addEventListener('click', (event) => {

    const dataValue = tabButton.dataset.filter;

    changeContent(tabContent, dataValue);

    tabButtons.forEach((btn) => {
      if (event.target === btn) {
        btn.classList.add('best-filter__btn_active');
      } else {
        btn.classList.remove('best-filter__btn_active');
      }
    });

  });

});

//Табы секции каталог

const catalogBtns = document.querySelectorAll('.catalog__btn');
const catalogInners = document.querySelectorAll('.content-item__inner');

catalogBtns.forEach(el => {
  el.addEventListener('click', (e)=> {
    catalogBtns.forEach(btn => {
      btn.classList.remove('catalog__btn--active');
    });
    e.currentTarget.classList.add('catalog__btn--active');

    const btnIndex = e.currentTarget.getAttribute("data-tabBtn");

    document.querySelectorAll('div[data-tabItem]').forEach(div => {
      div.classList.remove('content-item__inner--active');
    });

  
    document.querySelector(`div[data-tabItem="${btnIndex}"]`).classList.add('content-item__inner--active');
  });
});


//timer

const endtime = 'Aug 1 2023, 17:00 GMT+0400';

// приводим к стандартному виду 03:04:05, вместо 3:4:5
function makeCorrectDate(uncorrectDate) {
  let correctDate = uncorrectDate;
  if (uncorrectDate < 10) {
    correctDate = '0' + uncorrectDate;
  }
  return correctDate;
}

// сколько времени осталось
function getDateRemaining(timesup) {
  // total = оставшееся вермя
  var total = Date.parse(timesup) - Date.now();
  var seconds = Math.floor((total / 1000) % 60);
  var minutes = Math.floor((total / 1000 / 60) % 60);
  var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  var days = Math.floor(total / (1000 * 60 * 60 * 24));
  // вывод объектов
  return {
    'total': total,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

// инициализация таймера на самом сайте
function setTime(id, timesup) {
  let timer = document.getElementById(id),
    days = timer.querySelector('.days'),
    hours = timer.querySelector('.hours'),
    minutes = timer.querySelector('.minutes'),
    seconds = timer.querySelector('.seconds'),
    // обновление таймера каждые 1000мс
    timeInterval = setInterval(update, 1000);

  function update() {
    // результат функции getDateRemaining
    let total = getDateRemaining(timesup);
    // Проверка на ноль
    var nowdate = Date.now();
    if (nowdate <= Date.parse(endtime)) {
      var nowdate = Date.now();
      days.textContent = makeCorrectDate(total.days);
      hours.textContent = makeCorrectDate(total.hours);
      minutes.textContent = makeCorrectDate(total.minutes);
      seconds.textContent = makeCorrectDate(total.seconds);
    } else {
      days.textContent = 0;
      hours.textContent = 0;
      minutes.textContent = 0;
      seconds.textContent = 0;
    }


    // Окончания часов
    switch (total.days) {
      case 1:
      case 21:
      case 31:
      case 41:
      case 51:
        correctDays = "ДЕНЬ";
        // console.log(total.days, correctDays); // DEBUG
        break;
      case 2:
      case 3:
      case 4:
      case 22:
      case 23:
      case 24:
      case 32:
      case 33:
      case 34:
      case 42:
      case 43:
      case 44:
      case 52:
      case 53:
      case 54:
        correctDays = "ДНЯ";
        // console.log(total.days, correctDays); // DEBUG
        break;
      default:
        correctDays = "ДНЕЙ";
        // console.log(total.days, correctDays); // DEBUG
    }
    document.querySelector('.uncorrectDays').textContent = correctDays;

    // Окончания часов
    switch (total.hours) {
      case 1:
      case 21:
      case 31:
      case 41:
      case 51:
        correctHours = "ЧАС";
        // console.log(total.hours, correctHours); // DEBUG
        break;
      case 2:
      case 3:
      case 4:
      case 22:
      case 23:
      case 24:
      case 32:
      case 33:
      case 34:
      case 42:
      case 43:
      case 44:
      case 52:
      case 53:
      case 54:
        correctHours = "ЧАСА";
        // console.log(total.hours, correctHours); // DEBUG
        break;
      default:
        correctHours = "ЧАСОВ";
        // console.log(total.hours, correctHours); // DEBUG
    }
    document.querySelector('.uncorrectHours').textContent = correctHours;

    // Окончания минут
    switch (total.minutes) {
      case 1:
      case 21:
      case 31:
      case 41:
      case 51:
        correctMinutes = "МИНУТА";
        // console.log(total.minutes, correctMinutes); // DEBUG
        break;
      case 2:
      case 3:
      case 4:
      case 22:
      case 23:
      case 24:
      case 32:
      case 33:
      case 34:
      case 42:
      case 43:
      case 44:
      case 52:
      case 53:
      case 54:
        correctMinutes = "МИНУТЫ";
        // console.log(total.minutes, correctMinutes); // DEBUG
        break;
      default:
        correctMinutes = "МИНУТ";
        // console.log(total.minutes, correctMinutes); // DEBUG
    }
    document.querySelector('.uncorrectMinutes').textContent = correctMinutes;

    // Окончания секунд
    switch (total.seconds) {
      case 1:
      case 21:
      case 31:
      case 41:
      case 51:
        correctSeconds = "СЕКУНДА";
        // console.log(total.seconds, correctSeconds); // DEBUG
        break;
      case 2:
      case 3:
      case 4:
      case 22:
      case 23:
      case 24:
      case 32:
      case 33:
      case 34:
      case 42:
      case 43:
      case 44:
      case 52:
      case 53:
      case 54:
        correctSeconds = "СЕКУНДЫ";
        // console.log(total.seconds, correctSeconds); // DEBUG
        break;
      default:
        correctSeconds = "СЕКУНД";
        // console.log(total.seconds, correctSeconds); // DEBUG
    }
    document.querySelector('.uncorrectSeconds').textContent = correctSeconds;
  }
}
setTime('timer', endtime);

// слайдер

const swiper = new Swiper('.header-main__slider', {
  slidesPreView: 1,
  speed: 400,
  spaceBetween: 0,
  // parallax: true,
  // loop: true,
  pagination: {
    el: ".controll-main-block__dots",
    clickable: true
  },

  navigation: {
    nextEl: '.controll-main-block__nextBtn',
    prevEl: '.controll-main-block__prevBtn',
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false
  // },
  on: {
    init: function (swiper) {
      const allSlides = document.querySelector('.fraction-controll__all');
      const allSlidesItems = document.querySelectorAll('.header-slider__item:not(.swiper-slide-duplicate)');
      console.log(allSlidesItems);
      
      allSlides.innerHTML =  allSlidesItems.length < 10 ? `0${allSlidesItems.length}`: allSlidesItems.length ;
    },
    slideChange: function(swiper) {
      const currentSlide = document.querySelector('.fraction-controll__current');
      currentSlide.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}`: swiper.realIndex + 1;
    }
  }
});

//jquery


$(function () {

  $(".header-main__slider").on("afterChange", function (event, slick, currentSlide, nextSlide) {
    $(".countsSlides span").text(currentSlide + 1);
  });


  $('.best-slider').slick({
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: false,
    dots: true,
    responsive: [{

    }]
  });



  $(".star").rateYo({
    rating: 3.6,
    starWidth: "15px",
    readOnly: true
  });

  $('.navbar-center__info-money').styler();


  $('.content-item__big').slick({
    asNavFor: '.content-item__thumb',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    fade: true,
  });

  $('.content-item__thumb').slick({
    asNavFor: '.content-item__big',
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true
  });



  $('.week__item-big').slick({
    asNavFor: '.week__item-thumb',
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    fade: true,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow'),
    infinite: false,

  });

  $('.week__item-thumb').slick({
    asNavFor: '.week__item-big',
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
  });



  $(".best-slider").on("afterChange", function (event, slick, currentSlide, nextSlide) {
    $(".countsSlide span").text(currentSlide + 1);
  });

});

//динамический адаптив

function DynamicAdapt(type) {
  this.type = type;
}

DynamicAdapt.prototype.init = function () {
  const _this = this;
  // массив объектов
  this.оbjects = [];
  this.daClassname = "_dynamic_adapt_";
  // массив DOM-элементов
  this.nodes = document.querySelectorAll("[data-da]");

  // наполнение оbjects объктами
  for (let i = 0; i < this.nodes.length; i++) {
    const node = this.nodes[i];
    const data = node.dataset.da.trim();
    const dataArray = data.split(",");
    const оbject = {};
    оbject.element = node;
    оbject.parent = node.parentNode;
    оbject.destination = document.querySelector(dataArray[0].trim());
    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
    оbject.index = this.indexInParent(оbject.parent, оbject.element);
    this.оbjects.push(оbject);
  }

  this.arraySort(this.оbjects);

  // массив уникальных медиа-запросов
  this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
    return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
  }, this);
  this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
    return Array.prototype.indexOf.call(self, item) === index;
  });

  // навешивание слушателя на медиа-запрос
  // и вызов обработчика при первом запуске
  for (let i = 0; i < this.mediaQueries.length; i++) {
    const media = this.mediaQueries[i];
    const mediaSplit = String.prototype.split.call(media, ',');
    const matchMedia = window.matchMedia(mediaSplit[0]);
    const mediaBreakpoint = mediaSplit[1];

    // массив объектов с подходящим брейкпоинтом
    const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
      return item.breakpoint === mediaBreakpoint;
    });
    matchMedia.addListener(function () {
      _this.mediaHandler(matchMedia, оbjectsFilter);
    });
    this.mediaHandler(matchMedia, оbjectsFilter);
  }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
  if (matchMedia.matches) {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.moveTo(оbject.place, оbject.element, оbject.destination);
    }
  } else {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      if (оbject.element.classList.contains(this.daClassname)) {
        this.moveBack(оbject.parent, оbject.element, оbject.index);
      }
    }
  }
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
  element.classList.add(this.daClassname);
  if (place === 'last' || place >= destination.children.length) {
    destination.insertAdjacentElement('beforeend', element);
    return;
  }
  if (place === 'first') {
    destination.insertAdjacentElement('afterbegin', element);
    return;
  }
  destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
  element.classList.remove(this.daClassname);
  if (parent.children[index] !== undefined) {
    parent.children[index].insertAdjacentElement('beforebegin', element);
  } else {
    parent.insertAdjacentElement('beforeend', element);
  }
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
  const array = Array.prototype.slice.call(parent.children);
  return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
  if (this.type === "min") {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return -1;
        }

        if (a.place === "last" || b.place === "first") {
          return 1;
        }

        return a.place - b.place;
      }

      return a.breakpoint - b.breakpoint;
    });
  } else {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return 1;
        }

        if (a.place === "last" || b.place === "first") {
          return -1;
        }

        return b.place - a.place;
      }

      return b.breakpoint - a.breakpoint;
    });
    return;
  }
};

const da = new DynamicAdapt("max");
da.init();
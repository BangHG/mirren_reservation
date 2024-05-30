//네비게이션

function navClose() {
  $('html').css({ overflowY: 'auto' });
  $('.nav__toggle').stop().removeClass('active');
  $('.nav__toggle').attr('title', '네비게이션 열기');
  $('.header').stop().removeClass('active');
}
function navOpen() {
  $('html').css({ overflowY: 'hidden' });
  $('.nav__toggle').stop().addClass('active');
  $('.nav__toggle').attr('title', '네비게이션 닫기');
  $('.header').stop().addClass('active');
}

$('.nav__toggle').click(function () {
  if ($(this).hasClass('active')) {
    navClose();
  } else {
    navOpen();
  }
});

//네비클릭시
$('.nav .nav-list a.link').on('click', function () {
  const href = $(this).attr('href');

  // if (href && href.includes('#section')) {
  const hrefOn = href.split('?')[0];
  const active = href.split('?')[1];
  // console.log(active);

  gsap.to(window, { duration: 0.5, scrollTo: { y: hrefOn, offsetY: 30 } });
  // gsap.to(window, { duration: 0.3, scrollTo: hrefOn });

  if (href && href.includes('?media--')) {
    // console.log(active);
    $(`.section-media .tab-content`).removeClass('active');
    $(`.section-media .tab-list .tab-link`).removeClass('active');

    $(`.section-media .tab-list .tab-link[data-hash=${active}]`).addClass('active');
    $('#' + active).addClass('active');
  }
  // }

  navClose();
});

// # 스크롤 이벤트 정의
$(document).scroll(function (e) {
  // if ($(window).scrollTop() > 100) {
  //   $('.scrollDown').stop().fadeOut(300);
  // } else {
  //   $('.scrollDown').stop().fadeIn(300);
  // }

  if ($(window).scrollTop() > 500) {
    $('.btnTop').fadeIn(300);
    $('.header').addClass('fixed');
  } else {
    $('.btnTop').fadeOut(300);
    $('.header').removeClass('fixed');
  }
});

$(document).ready(function () {
  // ## aos
  AOS.init({
    once: true,
  });
});

$(window).on('load', function () {
  //## 전환효과
  $('body').attr('data-loading', 'done');
});

//IOS 100VH지원 스크립트
// function mobileVh() {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', vh + 'px');
//   // console.log(vh);
// }

// $(window).on('load resize', function () {
//   mobileVh();
// });

// 페이지 리사이즈처리
window.addEventListener('resize', function () {
  // AOS refresh
  setTimeout(function () {
    AOS.refresh();
  }, 500);
});

///-----------
const witchThumbSwiper = new Swiper('.section-witch .swiper-thumb .swiper-container', {
  // speed: 400,
  // spaceBetween: 100,
  // slidesPerView: 7,
  allowTouchMove: false,
  freeMode: true,
  threshold: 20, //드래그무시
  // watchSlidesProgress: true,
  // loop: false,
  // width: 'auto',
  // focusableElements: '',
});

const witchSwiper = new Swiper('.section-witch .swiper .swiper-container', {
  speed: 500,
  spaceBetween: 0, //100,
  loop: true,
  allowTouchMove: false, //true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  thumbs: {
    swiper: witchThumbSwiper,
  },
});

witchSwiper.on('slideChange', function () {
  $('.section-witch .swiper .swiper-slide').removeClass('initAni');
  $('.section-witch .swiper-thumb .thumb-btn').removeClass('active');
});
witchSwiper.on('slideChangeTransitionStart', function () {
  $('.section-witch .swiper .swiper-slide-active').addClass('initAni');
  $('.section-witch .swiper-thumb .swiper-slide-thumb-active .thumb-btn').addClass('active');
});

const stigmataSwiper = new Swiper('.section-stigmata .swiper .swiper-container', {
  speed: 1000,
  spaceBetween: 0, //100,
  loop: false,
  allowTouchMove: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});

stigmataSwiper.on('slideChange', function () {
  $('.section-stigmata .swiper .swiper-slide').removeClass('initAni');
});
stigmataSwiper.on('slideChangeTransitionStart', function () {
  $('.section-stigmata .swiper .swiper-slide-active').addClass('initAni');
});

//성흔 탭
$('#stigmata-tab').each(function (e) {
  $(this)
    .find('.tab-link')
    .click(function (e) {
      var active = $(this).attr('data-hash');
      e.preventDefault();
      $(this).parent().parent().find('.tab-link').removeClass('active');
      $(this).parent().parent().parent().find('.tab-content').stop().removeClass('active');
      //.hide();
      // btn해제
      $('#stigmata-tab .thumb-btn').removeClass('active');

      $('#' + active)
        .find('.thumb-btn')
        .first()
        .addClass('active'); //탭컨텐츠 내 첫 btn에 포커스

      $(this).addClass('active'); //클릭한 탭에 active

      //슬라이드 이동
      const btnIndex = $(this).attr('data-moveTo');
      // stigmataSwiper.slideTo(btnIndex);
      stigmataSwiper.slideTo(getSlideIndexByClass('.section-stigmata', 'stigmata--' + btnIndex));

      //탭 컨텐츠 나타나기
      // setTimeout(() => {
      $('#' + active)
        .stop()
        .addClass('active');
      // .fadeIn();

      //.show();
      // }, 200);
      return false;
    });
});
function stigmataTab() {
  $('.stigmata-group').each(function () {
    $(this).find('.thumb-btn:nth-child(1)').addClass('active');
  });
  //tab 클릭하면 이동
  $('#stigmata-tab .thumb-btn').on('click', function () {
    // const id = $(this).attr('id');
    if ($(this).hasClass('active')) {
    } else {
      // console.log(id);
      $('#stigmata-tab .thumb-btn').removeClass('active');
      $(this).stop().addClass('active');
    }
  });
}

$.ajax({
  type: 'GET',
  url: `${$rootUrl}/common/json/stigmata.json`,
  dataType: 'json',
}).done(function (data) {
  var stigmataItem = '';

  //성흔 탭(썸네일) 뿌리기
  var stigmataTab1 = '';
  var stigmataTab2 = '';
  var stigmataTab3 = '';
  var stigmataTab4 = '';
  var stigmataTab5 = '';
  var stigmataTab6 = '';

  $.each(data.list, function (index, item) {
    if (item.tribe === '1') {
      stigmataTab1 += '<button class="thumb-btn" id="stigmata--' + item.id + '" title="' + item.name + '"><span class="spin"></span></button>';
    }
    if (item.tribe === '2') {
      stigmataTab2 += '<button class="thumb-btn" id="stigmata--' + item.id + '" title="' + item.name + '"><span class="spin"></span></button>';
    }
    if (item.tribe === '3') {
      stigmataTab3 += '<button class="thumb-btn" id="stigmata--' + item.id + '" title="' + item.name + '"><span class="spin"></span></button>';
    }
    if (item.tribe === '4') {
      stigmataTab4 += '<button class="thumb-btn" id="stigmata--' + item.id + '" title="' + item.name + '"><span class="spin"></span></button>';
    }
    if (item.tribe === '5') {
      stigmataTab5 += '<button class="thumb-btn" id="stigmata--' + item.id + '" title="' + item.name + '"><span class="spin"></span></button>';
    }
    if (item.tribe === '6') {
      stigmataTab6 += '<button class="thumb-btn" id="stigmata--' + item.id + '" title="' + item.name + '"><span class="spin"></span></button>';
    }
  });

  $('#tabContent1 .stigmata-group').html(stigmataTab1);
  $('#tabContent2 .stigmata-group').html(stigmataTab2);
  $('#tabContent3 .stigmata-group').html(stigmataTab3);
  $('#tabContent4 .stigmata-group').html(stigmataTab4);
  $('#tabContent5 .stigmata-group').html(stigmataTab5);
  $('#tabContent6 .stigmata-group').html(stigmataTab6);

  stigmataTab();

  // 성흔 리스트 뿌리기
  $.each(data.list, function (index, angel) {
    stigmataItem += `<div class="swiper-slide stigmata stigmata--` + angel.id + `">`;
    // stigmataItem += `<div class="swiper-slide stigmata stigmata--` + angel.id + `" data-index="stigmata--` + angel.id + `">`;
    stigmataItem += `<div class="bg"></div> <div class="ch"> </div>`;
    stigmataItem += `<div class="spec"><p class="sr-only">` + angel.spec + `</p> </div>`;
    // stigmataItem += `<div class="spec"> <img loading="lazy" src="${$rootUrl}/web/assets/images/stigmata/` + angel.id + `/spec.webp"> <p class="sr-only"> ` + angel.spec + `</p> </div>`;
    stigmataItem += `<div class="title-bx">`;
    stigmataItem += `<p class="name"> ` + angel.name + ` </p>`;
    stigmataItem += `<dl class="cv"><dt>CV</dt>`;
    // stigmataItem += `<dd><img loading="lazy" src="${$rootUrl}/common/audio/` + angel.id + `_ko.png" alt="` + angel.cv_ko + `" /><button class="cv-btn" data-audio="` + angel.id + `_ko"></button></dd>`;
    stigmataItem += `<dd><img loading="lazy" src="${$rootUrl}/common/audio/` + angel.id + `_ja.png" alt="` + angel.cv_ja + `" /><button class="cv-btn" data-audio="` + angel.id + `_ja"></button></dd>`;
    stigmataItem += `</dl>`;
    stigmataItem += `<p class="desc"> ` + angel.desc + ` </p>`;
    stigmataItem += `</div></div>`;
  });

  $('#stigmataList').html(stigmataItem);

  $('#stigmata-tab .thumb-btn').on('click', function () {
    const btnIndex = $(this).attr('id'); //.split('--')[1];
    // stigmataSwiper.slideTo(btnIndex);
    // stigmataSwiper.slideTo(btnIndex);
    stigmataSwiper.slideTo(getSlideIndexByClass('.section-stigmata', btnIndex));
    // console.log('여기로갑시다 ' + btnIndex);
  });
  audioCv();
});

//
// 클래스 이름 찾아서 이동하기
function getSlideIndexByClass(swiperName, className) {
  var index = 0;
  $.each($(swiperName).find('.swiper-wrapper').children(), function (i, item) {
    if ($(item).hasClass(className)) {
      index = i;
      return false;
    }
  });
  return index;
}
//

//오디오 제어
function audioCv() {
  var audio = document.getElementById('cv_audio');
  $('.cv-btn').on('click', function () {
    $('.cv-btn').removeClass('active');
    audio.pause();

    // 갈아끼기
    const resource = $(this).attr('data-audio');

    $('#cv_audio').attr('src', `${$rootUrl}/common/audio/${resource}.wav`);

    // console.log(resource);

    $(this).addClass('active');

    //재생
    audio.play();
  });
  //재생이 완료되면 버튼 불끄기
  audio.addEventListener('ended', function () {
    audio.currentTime = 0;
    $('.cv-btn').removeClass('active');
  });
}

const worldSwiper = new Swiper('.section-world .swiper-container', {
  speed: 500,
  spaceBetween: 0, //100,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: '.section-world .swiper-button--next',
    prevEl: '.section-world .swiper-button--prev',
  },
});

//

const mediaVideoSwiper = new Swiper('.mediaSwiper--video .swiper-container', {
  speed: 500,
  spaceBetween: 0,
  loop: false,
  threshold: 20, //드래그무시

  effect: 'coverflow',
  coverflowEffect: {
    rotate: '0',
    modifier: 1,
    slideShadows: false,
    stretch: '300',
    scale: '0.9',
  },
  pagination: {
    el: '.mediaSwiper--video .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.mediaSwiper--video .swiper-button--next',
    prevEl: '.mediaSwiper--video .swiper-button--prev',
  },
});
const mediaPictureSwiper = new Swiper('.mediaSwiper--picture .swiper-container', {
  speed: 500,
  spaceBetween: 0,
  loop: false,
  threshold: 20, //드래그무시

  effect: 'coverflow',
  coverflowEffect: {
    rotate: '0',
    modifier: 1,
    slideShadows: false,
    stretch: '300',
    scale: '0.9',
  },
  pagination: {
    el: '.mediaSwiper--picture .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.mediaSwiper--picture .swiper-button--next',
    prevEl: '.mediaSwiper--picture .swiper-button--prev',
  },
});

$('#media-tab').each(function (e) {
  $(this)
    .find('.tab-link')
    .click(function (e) {
      var active = $(this).attr('data-hash');
      e.preventDefault();

      $(this).parent().parent().find('.tab-link').removeClass('active');
      $(this).parent().parent().parent().find('.tab-content').removeClass('active');

      $(this).addClass('active');
      $('#' + active).addClass('active');

      // setTimeout(() => {
      //   mediaVideoSwiper.init();
      //   mediaPictureSwiper.init();
      // }, 200);//안해도되네?
      return false;
    });
});

// window.addEventListener('load', function (event) {

// window.addEventListener('load, resize', function () {
//   // document.addEventListener('DOMContentLoaded', function () {
//   const windowW = window.innerWidth;
//   const windowH = window.innerHeight;

//   const goToPortrait = $('<div class="goToPortrait"></div>');

//   const goToPortraitWrap = [];
//   if (windowH <= windowW) {
//     console.log(`${windowW}, ${windowH} 넌 지금 가로다 `);

//     if (goToPortraitWrap.length >= 1) return;

//     $('body').append(goToPortraitWrap);
//     goToPortraitWrap.push(goToPortrait);

//     setTimeout(function () {
//       goToPortrait.remove();
//       goToPortraitWrap.splice(goToPortraitWrap.indexOf(goToPortrait), 1);
//     }, 3000);
//   }
// });
// window.addEventListener('load', function () {

// });

$(window).on('load', function () {
  goToPortraitMode();
});

$(window).on('resize', function () {
  goToPortraitMode();
});

function goToPortraitMode() {
  const windowW = window.innerWidth;
  const windowH = window.innerHeight;
  if (windowH <= windowW) {
    // console.log(`${windowW}, ${windowH} 넌 지금 가로다 `);
    $('.goToPortraitMode').addClass('show');
    setTimeout(function () {
      $('.goToPortraitMode').removeClass('show');
    }, 6000);
  } else {
    $('.goToPortraitMode').removeClass('show');
  }
  // if (windowH <= windowW) {
  //   // console.log(`${windowW}, ${windowH} 넌 지금 가로다 `);
  //   $('.goToPortraitMode').stop().fadeIn(300); //addClass('show');
  //   setTimeout(function () {
  //     $('.goToPortraitMode').stop().fadeOut(300); //removeClass('show');
  //   }, 6000);
  // } else {
  //   $('.goToPortraitMode').stop().fadeOut(300); //removeClass('show');
  // }
}

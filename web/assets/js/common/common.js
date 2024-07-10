//기본적인 동작 정의

// ## nav bg
$('.nav__bg').each(function () {
  var maxHeight = 0;
  $('.header .nav-list--depth2').each(function () {
    if ($(this).outerHeight() > maxHeight) {
      maxHeight = $(this).outerHeight();
    }
  });
  $(this).css('height', maxHeight);
});

// ## nav
function navOn() {
  $('.header').addClass('hover');
  $('.header .nav__bg').stop().fadeIn(200);
  $('.header .nav-list--depth2').stop().fadeIn(200);
}
function navOff() {
  $('.header').removeClass('hover');
  $('.header .nav__bg').stop().fadeOut(200);
  $('.header .nav-list--depth2').stop().fadeOut(200);
}

$('.nav .nav-item--depth1 > .link').mouseenter(function () {
  navOn();
});
$('.nav').mouseleave(function () {
  navOff();
});

// # 스크롤 이벤트 정의
$(document).scroll(function (e) {
  if ($(window).scrollTop() > 500) {
    $('.btnTop').fadeIn(300);
  } else {
    $('.btnTop').fadeOut(300);
  }
});

$(document).ready(function () {
  // ## aos
  AOS.init({
    once: true,
    // disable: 'mobile',
    // offset: 100,
  });
});

const currentPage = $('body').attr('data-page');

$(window).on('load', function () {
  //## 전환효과
  $('body').attr('data-loading', 'done');

  $(`.nav-list .nav-item--depth1 > .link[data-page=${currentPage}]`).addClass('active');

  if (currentPage === 'media') {
    var active = window.location.hash.split('?')[1];

    // console.log(active);
    if (active != null) {
      $('.tab .tab-link').removeClass('active');
      $('.tab .tab-content').removeClass('active');

      $(`.section-media .tab-list .tab-link[data-hash=${active}]`).addClass('active');
      $('#' + active).addClass('active');

      return false;
    }
  } else {
    //media 외 페이지
    const href = window.location.hash;
    if (href == '') {
    } else {
      const active = window.location.hash.split('#')[1];
      const offset = $('#' + active).offset().top;
      // console.log(`#${active} ${offset}`);

      setTimeout(() => {
        $('html,body').animate({ scrollTop: offset }, 0);
      }, 10);
    }
  }
});

// 페이지 리사이즈처리
window.addEventListener('resize', function () {
  // AOS refresh
  setTimeout(function () {
    AOS.refresh();
  }, 500);
});

// ----

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
//클릭이펙트
var clickEffects = [];

$(document).on('click', function (event) {
  if (clickEffects.length >= 3) return; // 동시에 최대 3개까지만 허용

  var clickX = event.pageX;
  var clickY = event.pageY;

  var clickEffect = $('<div class="i-click-effect"></div>').css({
    left: clickX + 'px',
    top: clickY + 'px',
  });

  $('#smooth-content').append(clickEffect);
  // $('body').append(clickEffect);
  clickEffects.push(clickEffect);

  setTimeout(function () {
    clickEffect.remove();
    clickEffects.splice(clickEffects.indexOf(clickEffect), 1);
  }, 600);
});

$('.sideMenu').on('click', function () {
  if ($(this).hasClass('active')) {
    $('.sideMenu__toggle').attr('title', '열기');
    $('.sideMenu').stop().removeClass('active');
  } else {
    $('.sideMenu__toggle').attr('title', '닫기');
    $('.sideMenu').stop().addClass('active');
  }
});

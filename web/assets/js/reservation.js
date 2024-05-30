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
  });

  // if ($(window).width() >= $mediaResponsiveSize) {
  //   navOpen();
  // }
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

$('.nav .nav-list a.link').on('click', function () {
  const href = $(this).attr('href');

  // console.log(href);
  if (href && href.includes('#section')) {
    //   // parameters: element, smooth, position(offset)
    const hrefOn = href.split('?')[0];
    const active = href.split('?')[1];

    // gsap.to(window, { duration: 0.3, scrollTo: hrefOn });

    if (href && href.includes('?media--')) {
      // console.log(active);
      $(`.section-media .tab-content`).removeClass('active');
      $(`.section-media .tab-list .tab-link`).removeClass('active');

      $(`.section-media .tab-list .tab-link[data-hash=${active}]`).addClass('active');
      $('#' + active).addClass('active');
    }
    return false;
  }
  // event.preventDefault();
});

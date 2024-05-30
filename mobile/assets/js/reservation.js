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

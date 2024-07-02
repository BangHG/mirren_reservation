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

$('.nav .btn-reservation').click(function () {
  if (currentPage === 'reservation') {
    $('html,body').animate({ scrollTop: $('#section-reservation').offset().top }, 0);
  }
  navClose();
});

const currentPage = $('body').attr('data-page');

$(window).on('load', function () {
  //## 전환효과
  $('body').attr('data-loading', 'done');

  // $(`.nav-list .nav-item--depth1 > .link[data-page=${currentPage}]`).addClass('active');

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

//네비클릭시
$('.nav .nav-list a.link').on('click', function () {
  const href = $(this).attr('href').split('#')[1];

  if (currentPage === 'media' && href && href.includes('?media--')) {
    console.log(href);

    $(`.section-media .tab-content`).removeClass('active');
    $(`.section-media .tab-list .tab-link`).removeClass('active');

    const active = href.split('?')[1];
    $(`.section-media .tab-list .tab-link[data-hash=${active}]`).addClass('active');
    $('#' + active).addClass('active');
  } else {
    // smoother.scrollTo('#' + href, true, 'top');
    var offset = $('#' + href).offset().top;
    $('html,body').stop().animate({ scrollTop: offset }, 500);
  }

  navClose();
});

// # 스크롤 이벤트 정의
$(document).scroll(function (e) {
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
}

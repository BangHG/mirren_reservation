// 1600 이하로 떨어졌을때 html.css(zoom) 으로 1600사이즈로 보이게하기+관련 gsap 스크립트 조정

function adjustSmallDevice() {
  const ratio = window.innerWidth;
  const obj = '.resolution-wrap, .header, .btnTop, .loading .container';

  // /*
  // html,
  // body,
  // #smooth-wrapper 높이못잡는 이슈 . 뭔가 일정한게 계산해서 뿌려야할것같음.
  // .resolution-wrap : 보기엔 괜찮은데 앵커 뻑남
  // */

  if (ratio <= 1600) {
    // [1600] 이하
    $(obj).css({
      zoom: `${ratio / 1600}`,
    });

    //가변적으로 하면 offset 값이 자꾸 바뀌는 이슈로 각 if처리
    const witchTop = $('#section-witch').offset().top;
    const stigmataTop = $('#section-stigmata').offset().top;
    const universeTop = $('#section-universe').offset().top;
    const worldTop = $('#section-world').offset().top;
    const mediaTop = $('#section-media').offset().top;

    // console.log(`witch : ${witchTop}\nstigm : ${stigmataTop}\nunive : ${universeTop}\nworld : ${worldTop}\nmedia : ${mediaTop}\n `);

    $('.nav .nav-list a.link').on('click', function () {
      const href = $(this).attr('href');
      const hrefOn = href.split('?')[0];
      //가변적으로 하면 offset 값이 자꾸 바뀌는 이슈로 각 if처리
      // console.log(hrefOn);
      if (hrefOn == '#section-witch') {
        $('html,body').animate({ scrollTop: (witchTop * ratio) / 1600 }, 300);
      } else if (hrefOn == '#section-stigmata') {
        $('html,body').animate({ scrollTop: (stigmataTop * ratio) / 1600 }, 300);
      } else if (hrefOn == '#section-universe') {
        $('html,body').animate({ scrollTop: (universeTop * ratio) / 1600 }, 300);
      } else if (hrefOn == '#section-world') {
        $('html,body').animate({ scrollTop: (worldTop * ratio) / 1600 }, 300);
      } else if (hrefOn == '#section-media') {
        $('html,body').animate({ scrollTop: (mediaTop * ratio) / 1600 }, 300);
      }
    });

    $('.scrollDown').on('click', function () {
      $('html,body').animate({ scrollTop: (witchTop * ratio) / 1600 }, 300);
    });

    AOS.init({ disable: true });

    setTimeout(() => {
      $('.witch.swiper-slide-active').addClass('initAni');
      $('.stigmata--11').addClass('initAni'); //TODO: 첫번째 항목에 포커스
    }, 100);
  } else {
    // [1600 이하] 그 외
    AOS.refresh;
    gsapScrollTrigger();
    $(obj).css({
      zoom: '1',
    });

    $('.nav .nav-list a.link').on('click', function () {
      const href = $(this).attr('href');
      const hrefOn = href.split('?')[0];

      if (href && href.includes('#section')) {
        smoother.scrollTo(hrefOn, true, 'top');
        // console.log('섹션이동');
      }
    });

    document.querySelector('.scrollDown').addEventListener('click', (e) => {
      smoother.scrollTo('#section-witch', true, 'top');
      // console.log('아래로');
    });
  }
}

let resizeTimeout;
let previousWidth = window.innerWidth;

window.addEventListener('resize', function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    const currentWidth = window.innerWidth;

    if ($('.resolution-wrap').css('zoom')) {
      if (currentWidth <= 1600 && previousWidth <= 1600) {
        // console.log('1600이하 임');
        window.scrollTo(0, 0);
        location.reload();
      } else if (previousWidth <= 1600 && currentWidth > 1600) {
        // console.log('1600이하에서 벗어남');
        window.scrollTo(0, 0);
        location.reload();
      } else if (currentWidth <= 1600 && previousWidth > 1600) {
        // console.log('1600 초과가 됨 (1번)');
        window.scrollTo(0, 0);
        location.reload();
      } else {
      }
    }

    // console.log(`prev : ${previousWidth} , current : ${currentWidth}`);

    // 현재 창의 폭을 이전 폭으로 설정
    previousWidth = currentWidth;
  }, 50);
});

window.addEventListener('load', function (event) {
  // console.log('스크롤됨');
  window.scrollTo(0, 0);
  // smoother.scrollTo('.main', true, 'top');
  //   gsap.to(window, { duration: 0.1, scrollTo: 0 });
});

// adjustSmallDevice();

document.addEventListener('DOMContentLoaded', function () {
  // console.log('새로고침됨');
  // 페이지 로드시 초기 조정
  // setTimeout(() => {
  adjustSmallDevice();
  // }, 10);

  // 비디오 로딩이 완료되면 재생하기
  video.addEventListener('canplaythrough', playLoadedVideo);
  // 처음 방문한 경우 실행할 코드
  if (!sessionStorage.getItem('visited')) {
    GsapLoadingAnimation(); //로딩하기
    // 세션 스토리지에 'visited' 키 설정
    sessionStorage.setItem('visited', 'true');
  } else {
    GsapLoadingNo(); //로딩안하기 FIXME:
  }
});

const video = document.querySelector('.section-main video');
function playLoadedVideo() {
  // console.log('비디오가 재생 가능한 상태입니다.');
  video.play();
  // 이벤트 리스너를 제거하여 한 번만 실행되도록 함
  video.removeEventListener('canplaythrough', playLoadedVideo);
}

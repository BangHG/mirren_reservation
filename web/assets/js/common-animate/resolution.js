// 스크롤트리거 애니메이션
// const gsapScrollTrigger = {
function gsapScrollTriggerIndex() {
  // 888       888 8888888 88888888888  .d8888b.  888    888
  // 888   o   888   888       888     d88P  Y88b 888    888
  // 888  d8b  888   888       888     888    888 888    888
  // 888 d888b 888   888       888     888        8888888888
  // 888d88888b888   888       888     888        888    888
  // 88888P Y88888   888       888     888    888 888    888
  // 8888P   Y8888   888       888     Y88b  d88P 888    888
  // 888P     Y888 8888888     888      "Y8888P"  888    888

  $(function SET_WITCH() {
    gsap.set('.section-witch .thumb-btn', { x: '-=20', y: '-=20', opacity: 0 });
  });

  const ST_WITCH = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-witch',
      start: 'top center',
      end: 'bottom',
      //markers: true,
      scrub: 1,

      onEnter: () => {
        // const activeSlide = ;
        TL_WITCH.thumbFadeIn();
        setTimeout(() => {
          // activeSlide.addClass('initAni');
          $('.section-witch .swiper .swiper-slide-active').addClass('initAni');
          console.log('뭔데');
        }, 1000);
        // $('.section-witch .swiper-slide-thumb-active .thumb-btn').addClass('active');
      },
      onEnterBack: () => {
        // const activeSlide = ;
        setTimeout(() => {
          // activeSlide.addClass('initAni');
          $('.section-witch .swiper .swiper-slide-active').addClass('initAni');
          console.log('뭔데');
        }, 1000);
        // $('.section-witch .swiper-slide-thumb-active .thumb-btn').addClass('active');
      },
    },
  });

  const TL_WITCH = {
    thumbFadeIn: () => {
      var timeline = gsap.timeline();
      document.querySelectorAll('.section-witch .thumb-btn').forEach((thumb, index) => {
        timeline.to(
          thumb,
          {
            duration: 0.5,
            opacity: 1,
            x: 0,
            y: 0,
          },
          `<=${index * 0.05}`
        );
      });
    },
  };

  //  .d8888b. 88888888888 8888888  .d8888b.  888b     d888        d8888 88888888888     d8888
  // d88P  Y88b    888       888   d88P  Y88b 8888b   d8888       d88888     888        d88888
  // Y88b.         888       888   888    888 88888b.d88888      d88P888     888       d88P888
  //  "Y888b.      888       888   888        888Y88888P888     d88P 888     888      d88P 888
  //     "Y88b.    888       888   888  88888 888 Y888P 888    d88P  888     888     d88P  888
  //       "888    888       888   888    888 888  Y8P  888   d88P   888     888    d88P   888
  // Y88b  d88P    888       888   Y88b  d88P 888   "   888  d8888888888     888   d8888888888
  //  "Y8888P"     888     8888888  "Y8888P88 888       888 d88P     888     888  d88P     888

  const ST_STIGMATA = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-stigmata',
      start: 'top center',
      end: 'bottom',
      //// markers: true,
      scrub: 1,
      onEnter: () => {
        // const activeSlide = $('.section-stigmata .swiper .swiper-slide-active');
        // TL_STIGMATA.subTitle();
        // activeSlide.addClass('initAni');
        setTimeout(() => {
          $('.section-stigmata .swiper .swiper-slide-active').addClass('initAni');
        }, 100);
      },
      onEnterBack: () => {
        // const activeSlide = $('.section-stigmata .swiper .swiper-slide-active');
        // activeSlide.addClass('initAni');
        setTimeout(() => {
          $('.section-stigmata .swiper .swiper-slide-active').addClass('initAni');
        }, 100);
      },
    },
  });

  // gsap.set('.section-stigmata .sub-title', { y: '20%', opacity: 0 });

  // const TL_STIGMATA = {
  // subTitle: () => {
  //   var tl = gsap.timeline();
  //   tl.to('.section-stigmata .sub-title', {
  //     duration: 0.5,
  //     opacity: 1,
  //     y: 0,
  //   });
  // },
  // };

  // 888     888 888b    888 8888888 888     888 8888888888 8888888b.   .d8888b.  8888888888
  // 888     888 8888b   888   888   888     888 888        888   Y88b d88P  Y88b 888
  // 888     888 88888b  888   888   888     888 888        888    888 Y88b.      888
  // 888     888 888Y88b 888   888   Y88b   d88P 8888888    888   d88P  "Y888b.   8888888
  // 888     888 888 Y88b888   888    Y88b d88P  888        8888888P"      "Y88b. 888
  // 888     888 888  Y88888   888     Y88o88P   888        888 T88b         "888 888
  // Y88b. .d88P 888   Y8888   888      Y888P    888        888  T88b  Y88b  d88P 888
  //  "Y88888P"  888    Y888 8888888     Y8P     8888888888 888   T88b  "Y8888P"  8888888888

  const ST_UNIVERSE = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-universe',
      // start: 'top center',
      // start: 'top 100% -=50%',
      start: 'top center',
      // end: 'bottom bottom+=500px ',
      end: 'bottom+=400px center',
      // markers: true,
      scrub: 1,
      scrub: true,
      ease: 'none',
      onEnter: () => {
        TL_UNIVERSE.subTitle();
        TL_UNIVERSE.bg();
        // $('.section-universe .img-bx--r').addClass('enter');
      },
    },
  });
  //S:패럴랙싱
  ST_UNIVERSE.to(
    '.section-universe .img-bx--r',
    {
      duration: 10,
      // top: '+=100px',
      top: '-=50px',
    },
    '='
  )
    .to(
      '.section-universe .img-bx--l',
      {
        duration: 10,
        top: '+=100px',
      },
      '='
    )
    .to(
      '.section-universe .bg--clock',
      {
        duration: 3,
        top: '-=30px',
      },
      '='
    )
    .to(
      '.section-universe .hand--1',
      {
        duration: 10,
        rotation: 20,
      },
      '<=0.5'
    )
    .to(
      '.section-universe .hand--2',
      {
        duration: 10,
        rotation: 0,
      },
      '='
    );
  //E:패럴랙싱

  gsap.set('.section-universe .txt-bx .txt', { y: '20%', opacity: 0 });
  gsap.set('.section-universe .bg--feather-1', { y: '-50%', rotation: 40, opacity: 0 });
  gsap.set('.section-universe .bg--feather-2', { y: '-50%', rotation: 40, opacity: 0 });
  gsap.set('.section-universe .hand--2', { rotation: -40 });

  const TL_UNIVERSE = {
    subTitle: () => {
      var tl = gsap.timeline();
      document.querySelectorAll('.section-universe .txt-bx .txt').forEach((subTitle, index) => {
        tl.to(
          subTitle,
          {
            duration: 1,
            opacity: 1,
            y: 0,
          },
          `<=${index * 0.15}`
        );
      });
    },

    bg: () => {
      // console.log('?');
      var tl = gsap.timeline({
        onComplete: function () {
          var tlRepeat = gsap.timeline();
          //깃털 반복 애니메이션
          tlRepeat
            .fromTo(
              '.section-universe .bg--feather-1',
              {
                rotation: 0,
                y: '0',
              },
              {
                rotation: 2,
                duration: 5,
                y: '-10%',
                repeat: -1,
                yoyo: true,
                // ease: 'none', // 이징 함수를 사용하지 않음
              },
              '<'
            )
            .fromTo(
              '.section-universe .bg--feather-2',
              {
                rotation: 0,
                y: '0',
              },
              {
                rotation: -2,
                duration: 3,
                y: '-10%;',
                repeat: -1,
                yoyo: true,
                // ease: 'none', // 이징 함수를 사용하지 않음
              },
              '<'
            );
        },
      });
      tl
        //.to('.section-universe .bg--clock', { duration: 5, y: 0, opacity: 1 }, '=') //
        .to('.section-universe .bg--feather-1', { duration: 5, y: 0, rotation: 0, opacity: 1 }, '<+=0.2') //
        .to('.section-universe .bg--feather-2', { duration: 5, y: 0, rotation: 0, opacity: 1 }, '<+=0.2');
    },
  };
}

function gsapScrollTriggerMedia() {
  // 888b     d888 8888888888 8888888b. 8888888        d8888
  // 8888b   d8888 888        888  "Y88b  888         d88888
  // 88888b.d88888 888        888    888  888        d88P888
  // 888Y88888P888 8888888    888    888  888       d88P 888
  // 888 Y888P 888 888        888    888  888      d88P  888
  // 888  Y8P  888 888        888    888  888     d88P   888
  // 888   "   888 888        888  .d88P  888    d8888888888
  // 888       888 8888888888 8888888P" 8888888 d88P     888

  const ST_MEDIA = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-media',
      start: 'top center',
      end: 'bottom',
      //// markers: true,
      scrub: 1,
      onEnter: () => {
        TL_MEDIA.clock();
      },
      //   const activeSlide = $('.section-media .swiper .swiper-slide-active');
      //   TL_MEDIA.clock();
      //   activeSlide.addClass('initAni');
      // },
      // onEnterBack: () => {
      //   const activeSlide = $('.section-media .swiper .swiper-slide-active');
      //   activeSlide.addClass('initAni');
      // },
    },
  });

  gsap.set('.section-media .bg-clock--outer', { rotation: 40 });

  const TL_MEDIA = {
    clock: () => {
      var tl = gsap.timeline();
      tl.to('.section-media .bg-clock--outer', {
        rotation: 0,
        duration: 5,
        // opacity: 1,
        // y: 0,
      });
    },
  };
}

function gsapScrollTriggerReservation() {
  /* 
  function updateGauge(state) {
    const percentages = [0, 6, 24, 41, 63, 81, 100]; // 각 state에 대한 퍼센티지 배열
    const items = document.querySelectorAll('.gauge-list .item');
    const itemsBg = document.querySelectorAll('.gauge .item-bg');
    const bar = document.querySelector('.bar');
    const duration = 0.5; // 각 애니메이션 단계의 지속 시간 (초)

    gsap.set(bar, { width: 0 });

    items.forEach((item) => item.classList.remove('active'));
    itemsBg.forEach((item) => item.classList.remove('active'));

    let widthPercentage = percentages[state];
    for (let i = 0; i < state; i++) {
      gsap.to(items[i], {
        duration: duration,
        delay: i * duration,
        onComplete: () => items[i].classList.add('active'),
      });
      gsap.to(itemsBg[i], {
        duration: duration,
        delay: i * duration,
        onComplete: () => itemsBg[i].classList.add('active'),
      });
    }

    gsap.to(bar, {
      delay: 0.1,
      width: widthPercentage + '%',
      duration: duration * state,
      ease: 'none',
    });
  }

  // event1
  const gaugeList = document.querySelector('.gauge-list');
  const state = parseInt(gaugeList.getAttribute('data-state'), 10);
  gsap.timeline({
    scrollTrigger: {
      trigger: '.event-content--1',
      start: 'top center',
      end: 'bottom',

      marker: true,
      onEnter: () => {
        updateGauge(state);
        // $('.reservation-bg').addClass('trans');
      },

      onLeaveBack: () => {
        // updateGauge(state);
        // $('.reservation-bg').removeClass('trans');
      },
    },
  });

  //event2
  $(function SET_event2() {
    gsap.set('.event-content--2 .ch', { opacity: 0 });
  });
  const ST_event2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.event-content--2',
      start: 'top center',
      end: 'bottom',
      //markers: true,
      // scrub: 1,
      onEnter: () => {
        gsap.to('.event-content--2 .ch', { duration: 2, opacity: 1 });
      },
    },
  });

  // 반복
  gsap.fromTo('.event-content--2 .ch', { y: '0' }, { duration: 5, y: '+=1.5%', repeat: -1, yoyo: true }, '<');

  //event3
  $(function SET_event3() {
    gsap.set('.event-content--3 .ch', { opacity: 0 });
    gsap.set('.event-content--3 .card', { rotateY: -180 });
  });
  function cardFlip() {
    const items = document.querySelectorAll('.achieve-list .card');
    const delay = 0.3;
    for (let i = 0; i < state; i++) {
      gsap.to(items[i], {
        duration: 0.5,
        delay: i * delay,
        rotateY: 0,
      });
    }
  }
  const ST_event3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.event-content--3',
      start: 'top center',
      end: 'bottom',
      //markers: true,
      scrub: 0,
      onEnter: () => {
        cardFlip();
        gsap.to('.event-content--3 .ch', { duration: 2, opacity: 1 });
        // gsap.to('.event-content--3 .card', { duration: 0.5, rotateY: 0 });
      },
    },
  });

  // 반복
  gsap.fromTo('.event-content--3 .ch', { y: '0' }, { duration: 3, y: '+=1.5%', repeat: -1, yoyo: true }, '<');

  //event4
  $(function SET_event4() {
    gsap.set('.event-content--4 .ch', {
      opacity: 0,
      rotate: '-50',
      x: '-50',
      y: '-20',
    });
  });
  const ST_event4 = gsap.timeline(
    {
      scrollTrigger: {
        trigger: '.event-content--4',
        start: 'top center',
        end: 'bottom',
        //markers: true,
        // scrub: 1,
        onEnter: () => {
          gsap.to('.event-content--4 .ch', {
            duration: 2,
            opacity: 1,
            y: 0,
            x: 0,
            rotate: 0,
          });
        },
      },
    },
    '<+=2'
  );

  // // 반복
  gsap.fromTo(
    '.event-content--4 .box__fly',
    { rotate: '-2', y: 0 },
    {
      rotate: '2',
      duration: 5,
      y: '10',
      repeat: -1,
      yoyo: true,
      // ease: 'power4.out',
    },
    '<'
  ); */
}
// }; //호출은 resolution.js 에서. 1600이상에서만 작동

//                                             888          888    d8b
//                                             888          888    Y8P
//                                             888          888
// 888d888  .d88b.  .d8888b   .d88b.  888  888 888 888  888 888888 888  .d88b.  88888b.
// 888P"   d8P  Y8b 88K      d88""88b 888  888 888 888  888 888    888 d88""88b 888 "88b
// 888     88888888 "Y8888b. 888  888 888  888 888 888  888 888    888 888  888 888  888
// 888     Y8b.          X88 Y88..88P Y88b 888 888 Y88b 888 Y88b.  888 Y88..88P 888  888
// 888      "Y8888   88888P'  "Y88P"   "Y88888 888  "Y88888  "Y888 888  "Y88P"  888  888

// 1600 이하로 떨어졌을때 html.css(zoom) 으로 1600사이즈로 보이게하기+관련 gsap 스크립트 조정
/* 
// function adjustSmallDevice() {
  // setTimeout(function () {
  //   window.scrollTo(0, 0);
  // }, 10);

  setTimeout(function () {
    const ratio = window.innerWidth;
    //배수 적용할 대상
    const obj = `.resolution-wrap, 
  .header, 
  .btnTop, 
  .loading .container`;

    if (ratio <= 1600) {
      // [1600] 이하
      $(obj).css({
        zoom: `${ratio / 1600}`,
      });

      // if ($('body').attr('data-page') === 'intro') {
      //   //가변적으로 하면 offset 값이 자꾸 바뀌는 이슈로 각 if처리
      //   const witchTop = $('#section-witch').offset().top;
      //   const stigmataTop = $('#section-stigmata').offset().top;
      //   const universeTop = $('#section-universe').offset().top;
      //   const worldTop = $('#section-world').offset().top;

      //   // console.log(`witch : ${witchTop}\nstigm : ${stigmataTop}\nunive : ${universeTop}\nworld : ${worldTop}\nmedia : ${mediaTop}\n `);

      //   // navigation
      //   $('.nav-list a.link').on('click', function () {
      //     const href = $(this).attr('href');
      //     const hrefOn = href.split('?')[0];
      //     //가변적으로 하면 offset 값이 자꾸 바뀌는 이슈로 각 if처리
      //     // console.log(hrefOn);
      //     if (hrefOn == '#section-witch') {
      //       $('html,body').animate({ scrollTop: (witchTop * ratio) / 1600 }, 300);
      //     } else if (hrefOn == '#section-stigmata') {
      //       $('html,body').animate({ scrollTop: (stigmataTop * ratio) / 1600 }, 300);
      //     } else if (hrefOn == '#section-universe') {
      //       $('html,body').animate({ scrollTop: (universeTop * ratio) / 1600 }, 300);
      //     } else if (hrefOn == '#section-world') {
      //       $('html,body').animate({ scrollTop: (worldTop * ratio) / 1600 }, 300);
      //     }
      //   });
      //   console.log('지금은 게임소개 섹션');
      // }

      // $('.scrollDown').on('click', function () {
      //   $('html,body').animate({ scrollTop: (witchTop * ratio) / 1600 }, 300);
      // });

      AOS.init({ disable: true });

      setTimeout(() => {
        // swiper 첫항목에 수동 포커스
        $('.witch.swiper-slide-active').addClass('initAni');
        $('.stigmata--11').addClass('initAni');
      }, 100);
    } else {
      // [1600 이상]
      AOS.refresh;
      if ($('body').attr('data-page') === 'intro') {
        gsapScrollTriggerIndex();
      } else if ($('body').attr('data-page') === 'media') {
        gsapScrollTriggerMedia();
      } else if ($('body').attr('data-page') === 'reservation') {
        gsapScrollTriggerReservation();
      }

      $(obj).css({
        zoom: '1',
      });

      //navigation (1600 이상)
      // $('.nav-list a.link').on('click', function () {
      //   const href = $(this).attr('href');
      //   const hrefOn = href.split('?')[0];
      //   console.log('섹션이동');

      //   if (href && href.includes('#section')) {
      //     smoother.scrollTo(hrefOn, true, 'top');
      //   }
      // });

      // document.querySelector('.scrollDown').addEventListener('click', (e) => {
      //   smoother.scrollTo('#section-witch', true, 'top');
      //   // console.log('아래로');
      // });
    }
  }, 100);
} */
// TODO: resoulution 뺴..

if ($('body').attr('data-page') === 'intro') {
  gsapScrollTriggerIndex();
} else if ($('body').attr('data-page') === 'media') {
  gsapScrollTriggerMedia();
} else if ($('body').attr('data-page') === 'reservation') {
  gsapScrollTriggerReservation();
}

/* 
window.addEventListener('resize', function () {
  let previousWidth = window.innerWidth;
  let resizeTimeout;
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    const currentWidth = window.innerWidth;
    if ($('.resolution-wrap').css('zoom')) {
      if (currentWidth <= 1600 && previousWidth <= 1600) {
        // console.log('1600이하 임');
        // window.scrollTo(0, 0);
        location.reload();
      } else if (previousWidth <= 1600 && currentWidth > 1600) {
        // console.log('1600이하에서 벗어남');
        // window.scrollTo(0, 0);
        location.reload();
      } else if (currentWidth <= 1600 && previousWidth > 1600) {
        // console.log('1600 초과가 됨 (1번)');
        // window.scrollTo(0, 0);
        location.reload();
      } else {
      }
    }

    // console.log(`prev : ${previousWidth} , current : ${currentWidth}`);

    // 현재 창의 폭을 이전 폭으로 설정
    previousWidth = currentWidth;
  }, 50);
}) */

document.addEventListener('DOMContentLoaded', function () {
  // console.log('새로고침됨'); //FIXME:

  gsap.to(window, { duration: 0.3, scrollTo: 0 });
  //새로고침되면 상단부터 노출

  // 페이지 로드시 초기 조정
  // adjustSmallDevice();

  // 처음 방문한 경우 실행할 코드
  if (!sessionStorage.getItem('visited')) {
    GsapLoadingAnimation(); //로딩하기
    // 세션 스토리지에 'visited' 키 설정
    // console.log('로딩하기'); //FIXME:
    sessionStorage.setItem('visited', 'true');
  } else {
    // console.log('로딩안하기'); //FIXME:
    GsapLoadingNo(); //로딩안하기
  }
});

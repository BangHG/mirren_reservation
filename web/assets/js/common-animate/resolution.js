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
          // console.log('뭔데');
        }, 1000);
        // $('.section-witch .swiper-slide-thumb-active .thumb-btn').addClass('active');
      },
      onEnterBack: () => {
        // const activeSlide = ;
        setTimeout(() => {
          // activeSlide.addClass('initAni');
          $('.section-witch .swiper .swiper-slide-active').addClass('initAni');
          // console.log('뭔데');
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
  //사전예약 배경 스크롤 트랜지션
  gsap.timeline({
    scrollTrigger: {
      trigger: '.reservation-wrap .anchor--1',
      start: 'top center',
      end: 'bottom',
      // markers: true,
      onEnter: () => {
        $('.reservation-bg').addClass('noon');
      },
      // onLeave: () => {
      //   $('.reservation-bg').removeClass('noon');
      // },
      onEnterBack: () => {
        $('.reservation-bg').addClass('noon');
      },
      onLeaveBack: () => {
        $('.reservation-bg').removeClass('noon');
      },
    },
  });

  // 2/3 지점
  gsap.timeline({
    scrollTrigger: {
      trigger: '.reservation-wrap .anchor--2',
      start: 'top center',
      end: 'bottom',
      // markers: true,
      onEnter: () => {
        $('.reservation-bg').addClass('night');
      },
      // onLeave: () => {
      //   $('.reservation-bg').removeClass('night');
      // },
      onEnterBack: () => {
        $('.reservation-bg').addClass('night');
      },
      onLeaveBack: () => {
        $('.reservation-bg').removeClass('night');
      },
    },
  });

  // 8888888b.
  // 888   Y88b
  // 888    888
  // 888   d88P
  // 8888888P"
  // 888 T88b
  // 888  T88b
  // 888   T88b

  //패럴랙싱
  gsap.set('.section-reservation .ch', { opacity: 0 });
  const ST_reservation = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-reservation',
      start: 'top center',
      end: 'bottom',
      // markers: true, //FIXME:
      scrub: true,
      onEnter: () => {
        gsap.to('.section-reservation .ch', { duration: 1, opacity: 1 });
      },
    },
  });
  ST_reservation.to(
    '.section-reservation .ch--l',
    { duration: 5, top: '-=200' },
    '=' //
  ).to(
    '.section-reservation .ch--r',
    { duration: 5, top: '-=350' },
    '=' //
  );

  // 888b     d888
  // 8888b   d8888
  // 88888b.d88888
  // 888Y88888P888
  // 888 Y888P 888
  // 888  Y8P  888
  // 888   "   888
  // 888       888

  //패럴랙싱
  gsap.set('.section-market .ch', { opacity: 0 });
  const ST_market = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-market',
      start: 'top center',
      end: 'bottom',
      // markers: true,
      scrub: true,
      onEnter: () => {
        gsap.to('.section-market .ch', { duration: 1, opacity: 1 });
      },
    },
  });
  ST_market.to(
    '.section-market .ch--r',
    { duration: 5, top: '+=100' },
    '=' //
  );
  // .to(
  //   '.section-market .ch--l',
  //   { duration: 5, top: '+=200' },
  //   '=' //
  // ).

  // 8888888888  d888
  // 888        d8888
  // 888          888
  // 8888888      888
  // 888          888
  // 888          888
  // 888          888
  // 8888888888 8888888

  function updateGauge(state) {
    const percentages = [0, 6, 24, 41, 63, 81, 100]; // 각 state에 대한 퍼센티지 배열
    const items = document.querySelectorAll('.gauge-list .item');
    const itemsBg = document.querySelectorAll('.gauge .item-bg');
    const bar = document.querySelector('.gauge-list__bar .bar');
    const duration = 0.3; // 각 애니메이션 단계의 지속 시간 (초)
    // const duration = 3 / state; // 3초동안 애니메이션 시간 나눠쓰기

    gsap.set(bar, { width: 0 });

    items.forEach((item) => item.classList.remove('active'));
    itemsBg.forEach((item) => item.classList.remove('active'));

    let widthPercentage = percentages[state];
    for (let i = 0; i < state; i++) {
      gsap.to(items[i], {
        duration: 0.5, // duration,
        delay: i * duration,
        onComplete: () => items[i].classList.add('active'),
      });
      gsap.to(itemsBg[i], {
        duration: 0.5, // duration,
        delay: i * duration,
        onComplete: () => itemsBg[i].classList.add('active'),
      });
    }

    gsap.to(bar, {
      delay: 0.5,
      width: widthPercentage + '%',
      duration: duration * state,
      ease: 'none',
    });
  }

  gsap.set('.spr-marble ', {
    top: '500',
    scale: 0,
    opacity: 0,
  });

  const gaugeList = document.querySelector('.gauge-list');
  const state = parseInt(gaugeList.getAttribute('data-state'), 10);
  gsap.timeline({
    scrollTrigger: {
      trigger: '.event-content--1',
      start: 'top center',
      end: 'bottom',

      // marker: true,
      onEnter: () => {
        updateGauge(state);
        gsap.to('.spr-marble ', {
          top: '0',
          scale: 1,
          opacity: 1,
          duration: 1,
        });
      },

      onLeaveBack: () => {
        // updateGauge(state);
      },
    },
  });

  // 8888888888  .d8888b.
  // 888        d88P  Y88b
  // 888               888
  // 8888888         .d88P
  // 888         .od888P"
  // 888        d88P"
  // 888        888"
  // 8888888888 888888888

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

  ST_event2.to(
    '.event-content--2 .bg--cloud',
    {
      duration: 10,
      top: '+=200',
    },
    '='
  );

  // 반복
  gsap.fromTo('.event-content--2 .ch', { y: '0' }, { duration: 5, y: '+=1.5%', repeat: -1, yoyo: true }, '<');

  // 8888888888 .d8888b.
  // 888       d88P  Y88b
  // 888            .d88P
  // 8888888       8888"
  // 888            "Y8b.
  // 888       888    888
  // 888       Y88b  d88P
  // 8888888888 "Y8888P"

  $(function SET_event3() {
    gsap.set('.event-content--3 .ch', { opacity: 0 });
  });
  function cardFlip() {
    const items = document.querySelectorAll('.achieve-list .card');
    const delay = 0.3;

    for (let i = 0; i < 4; i++) {
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

  // 8888888888  d8888
  // 888        d8P888
  // 888       d8P 888
  // 8888888  d8P  888
  // 888     d88   888
  // 888     8888888888
  // 888           888
  // 8888888888    888

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
  );

  var tlRepeat = gsap.timeline();
  //반복 애니메이션
  tlRepeat
    .fromTo(
      '.section-reservation .ch--b',
      {
        y: '0',
        x: '0',
      },
      { duration: 5, y: '-4%', x: '2%', repeat: -1, yoyo: true },
      '<'
    )
    .fromTo(
      '.section-market .ch--l',
      {
        y: '0',
        // rotate: '0',
      },
      {
        // rotate: 3,
        duration: 2,
        y: '-3%;',
        repeat: -1,
        yoyo: true,
      },
      '<'
    )
    .fromTo(
      '.section-event .spr-marble .i:nth-child(2n)',
      {
        y: '0',
      },
      { duration: 4.5, y: '-20%;', repeat: -1, yoyo: true },
      '<'
    )
    .fromTo(
      '.section-event .spr-marble .i:nth-child(2n+1)',
      {
        y: '-20%',
      },
      { duration: 5, y: '0', repeat: -1, yoyo: true },
      '<'
    )
    .fromTo(
      '.event-content--2 .bg--light',
      {
        y: '0',
        skewX: 5,
        // rotate: 0,
      },
      {
        duration: 10,
        y: '+=100',
        //  rotate: -5,
        skewX: 0,
        repeat: -1,
        yoyo: true,
      },
      '<'
    );
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

// function adjustSmallDevice() {
//   // setTimeout(function () {
//   //   window.scrollTo(0, 0);
//   // }, 10);

//   setTimeout(function () {
//     const ratio = window.innerWidth;
//     //배수 적용할 대상
//     const obj = `.resolution-wrap,
//   .header,
//   .btnTop,
//   .loading .container,
//   .popup`;

//     let zoomLevel = 1;

//     if (ratio <= 1600) {
//       zoomLevel = ratio / 1600;
//       // $(obj).css({
//       //   transform: `${zoomLevel}`,
//       // });
//       console.log(zoomLevel);
//       // $('html').css({
//       //   transform: `scale(${zoomLevel} )`,
//       //   position: 'relative',
//       //   background: 'red',
//       // });
//       $('body').css({
//         transform: `scale(${zoomLevel}) translateX(-50%)`,
//         left: '50%',
//         position: 'absolute',
//         minWidth: 'auto',

//         width: 'auto',
//       });

//       AOS.init({ disable: true });

//       // console.log('resoulution 작동중');
//       // setTimeout(() => {
//       //   // swiper 첫항목에 수동 포커스
//       //   $('.witch.swiper-slide-active').addClass('initAni');
//       //   $('.stigmata--11').addClass('initAni');
//       // }, 100);
//     } else {
//       // [1600 이상: 정상작동시키기]
//       AOS.refresh;

//       // gsap 가동
//       // if ($('body').attr('data-page') === 'intro') {
//       //   gsapScrollTriggerIndex();
//       // } else if ($('body').attr('data-page') === 'media') {
//       //   gsapScrollTriggerMedia();
//       // } else if ($('body').attr('data-page') === 'reservation') {
//       //   gsapScrollTriggerReservation();
//       // }

//       $(objNew).css({
//         zoom: '1',
//       });

//       //TODO:네비클릭했을때 이동시키기
//       $('.nav .nav-list a.link').on('click', function () {
//         const href = $(this).attr('href').split('#')[1];

//         // if (window.innerWidth <= 1600) {
//         //   console.log('작음');

//         // } else {
//         // 작업중

//         if (currentPage === 'media' && href && href.includes('?media--')) {
//           // console.log(href);

//           $(`.section-media .tab-content`).removeClass('active');
//           $(`.section-media .tab-list .tab-link`).removeClass('active');

//           const active = href.split('?')[1];
//           $(`.section-media .tab-list .tab-link[data-hash=${active}]`).addClass('active');
//           $('#' + active).addClass('active');
//         } else {
//           // smoother.scrollTo('#' + href, true, 'top');
//           var offset = $('#' + href).offset().top;
//           $('html,body').stop().animate({ scrollTop: offset }, 500);

//           console.log(`제자리로 가고있니..? ${offset}`);
//         }

//         return false;
//       });

//       //navigation (1600 이상)
//       // $('.nav-list a.link').on('click', function () {
//       //   const href = $(this).attr('href');
//       //   const hrefOn = href.split('?')[0];
//       //   console.log('섹션이동');

//       //   if (href && href.includes('#section')) {
//       //     smoother.scrollTo(hrefOn, true, 'top');
//       //   }
//       // });

//       // document.querySelector('.scrollDown').addEventListener('click', (e) => {
//       //   smoother.scrollTo('#section-witch', true, 'top');
//       //   // console.log('아래로');
//       // });
//     }

//     // ScrollTrigger 설정
//     // gsap.registerPlugin(ScrollTrigger);
//     ScrollTrigger.scrollerProxy(window, {
//       scrollTop(value) {
//         if (arguments.length) {
//           window.scrollTo(0, value / zoomLevel);
//         }
//         return window.pageYOffset * zoomLevel;
//       },
//       getBoundingClientRect() {
//         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//       },
//     });

//     ScrollTrigger.addEventListener('refresh', () => ScrollTrigger.update());
//     ScrollTrigger.refresh();

//     //
//   }, 100);
// }
// TODO: resoulution 뺴..

if ($('body').attr('data-page') === 'intro') {
  gsapScrollTriggerIndex();
} else if ($('body').attr('data-page') === 'media') {
  gsapScrollTriggerMedia();
} else if ($('body').attr('data-page') === 'reservation') {
  gsapScrollTriggerReservation();
}
/* 
document.addEventListener('DOMContentLoaded', function () {
  // console.log('새로고침됨'); //FIXME:

  // gsap.to(window, { duration: 0.3, scrollTo: 0 });//TODO:?
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
}); */
// <!-- 240702 수정 -->로딩삭제

function adjustViewport() {
  const viewport = document.querySelector('meta[name="viewport"]');
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    alert('모바일');
    if (viewport) {
      viewport.content = 'width=1920';
    } else {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=1920';
      document.head.appendChild(meta);
    }
  } else {
    if (!viewport) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(meta);
    } else {
      viewport.content = 'width=device-width, initial-scale=1.0';
    }
  }
}

// adjustViewport();
// window.addEventListener('resize', adjustViewport);

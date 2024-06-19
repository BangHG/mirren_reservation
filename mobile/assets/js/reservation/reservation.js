// 스크롤트리거
// 888b     d888        d8888 8888888 888b    888
// 8888b   d8888       d88888   888   8888b   888
// 88888b.d88888      d88P888   888   88888b  888
// 888Y88888P888     d88P 888   888   888Y88b 888
// 888 Y888P 888    d88P  888   888   888 Y88b888
// 888  Y8P  888   d88P   888   888   888  Y88888
// 888   "   888  d8888888888   888   888   Y8888
// 888       888 d88P     888 8888888 888    Y888

// const ST_MAIN = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.loading',
//     start: 'top top',
//     scrub: 1.2,
//     markers: false,
//   },
//   ease: 'none',
// });

// ST_MAIN.to('.loading .loading__logo', { marginTop: '+=300', ease: 'none' }) //
//   .to('.loading .circle--outer', { rotate: '+=90deg' }, '<'); //

//마녀

$(function SET_WITCH() {
  // gsap.set('.thumb-btn', { x: '-=20', y: '-=20', opacity: 0 });
});
// function SET_WITCH() {
// }
// SET_WITCH()

//스트롤트리거

// 888       888 8888888 88888888888  .d8888b.  888    888
// 888   o   888   888       888     d88P  Y88b 888    888
// 888  d8b  888   888       888     888    888 888    888
// 888 d888b 888   888       888     888        8888888888
// 888d88888b888   888       888     888        888    888
// 88888P Y88888   888       888     888    888 888    888
// 8888P   Y8888   888       888     Y88b  d88P 888    888
// 888P     Y888 8888888     888      "Y8888P"  888    888

const ST_WITCH = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-witch',
    start: 'top center',
    end: 'bottom',
    //markers: true,
    scrub: 1,

    onEnter: () => {
      const activeSlide = $('.section-witch .swiper .swiper-slide-active');
      // TL_WITCH.thumbFadeIn();
      activeSlide.addClass('initAni');
      $('.section-witch .swiper-slide-thumb-active .thumb-btn').addClass('active');
    },
    onEnterBack: () => {
      const activeSlide = $('.section-witch .swiper .swiper-slide-active');
      activeSlide.addClass('initAni');
      $('.section-witch .swiper-slide-thumb-active .thumb-btn').addClass('active');
    },
  },
});

const TL_WITCH = {
  thumbFadeIn: () => {
    var timeline = gsap.timeline();
    document.querySelectorAll('.thumb-btn').forEach((thumb, index) => {
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
      const activeSlide = $('.section-stigmata .swiper .swiper-slide-active');
      // TL_STIGMATA.subTitle();
      activeSlide.addClass('initAni');
    },
    onEnterBack: () => {
      const activeSlide = $('.section-stigmata .swiper .swiper-slide-active');
      activeSlide.addClass('initAni');
    },
  },
});

// gsap.set('.section-stigmata .sub-title', { y: '20%', opacity: 0 });

const TL_STIGMATA = {
  // subTitle: () => {
  //   var tl = gsap.timeline();
  //   tl.to('.section-stigmata .sub-title', {
  //     duration: 0.5,
  //     opacity: 1,
  //     y: 0,
  //   });
  // },
};

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
    //markers: true,
    scrub: 1,
    scrub: true,
    ease: 'none',
    onEnter: () => {
      TL_UNIVERSE.subTitle();
      TL_UNIVERSE.bg();
    },
  },
});
//S:패럴랙싱
ST_UNIVERSE.to(
  '.section-universe .img-bx--r',
  {
    duration: 10,
    top: '+=10vw',
  },
  '='
)
  .to(
    '.section-universe .img-bx--l',
    {
      duration: 10,
      top: '+=20vw',
    },
    '='
  )
  .to(
    '.section-universe .bg--clock',
    {
      duration: 3,
      top: '-=10vw',
    },
    '='
  )
  .to(
    '.section-universe .hand--1',
    {
      duration: 10,
      rotation: 0,
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
// gsap.set('.section-universe .bg--clock', { y: '-20%', opacity: 0 });
gsap.set('.section-universe .bg--feather-1', { y: '-50%', rotation: 40, opacity: 0 });
gsap.set('.section-universe .bg--feather-2', { y: '-50%', rotation: 40, opacity: 0 });
gsap.set('.section-universe .hand--1', { rotation: -40 });
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
        `<=${index * 0.2}`
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

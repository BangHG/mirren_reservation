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

//구름
const ST_cloud = gsap.timeline({
  scrollTrigger: {
    trigger: '.event-content--2',
    // start: 'bottom center',
    start: 'top center',
    end: 'bottom',
    scrub: true,
    // markers: true,
    onEnter: () => {},
  },
});

ST_cloud.to(
  '.event-content--2 .bg--cloud',
  {
    duration: 10,
    top: '+=200',
  },
  '='
);

// gsap.timeline({
//   scrollTrigger: {
//     trigger: '.event-content--3 ',
//     // markers: true,
//     start: 'top center', //center',
//     end: 'bottom',
//     onEnter: () => {
//       TL_Cards.cardsFlip();
//     },
//   },
// });

// gsap.set('.achieve-list .card', { y: '20%', opacity: 0, duration: 0.02 });
// const TL_Cards = {
//   cardsFlip: () => {
//     var tl = gsap.timeline();

//     document.querySelectorAll('.achieve-list .card').forEach((item, index) => {
//       tl.to(
//         item,
//         {
//           y: 0,
//           opacity: 1,
//         },
//         `<=${index * 0.05}`
//       );
//     });
//   },
// };

var tlRepeat = gsap.timeline();
//반복 애니메이션
tlRepeat
  .fromTo(
    '.section-reservation .ch',
    {
      y: '0',
    },
    { duration: 5, y: '-3%', repeat: -1, yoyo: true },
    '<'
  )
  .fromTo(
    '.section-market .ch--3',
    {
      y: '0',
      rotate: '0',
    },
    { rotate: 3, duration: 2, y: '-10%;', repeat: -1, yoyo: true },
    '<'
  )
  .fromTo(
    '.section-market .ch--2',
    {
      y: '0',
      rotate: '0',
    },
    { rotate: -3, delay: -1, duration: 2, y: '-10%;', repeat: -1, yoyo: true },
    '<'
  )
  .fromTo(
    '.section-market .ch--1',
    {
      y: '0',
    },
    {
      delay: -2,
      duration: 3,
      y: '-10%;',
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
    { duration: 5, y: '-20%;', repeat: -1, yoyo: true },
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

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
    // markers: true,
    scrub: true,
    onEnter: () => {
      gsap.to('.section-reservation .ch', { duration: 2, opacity: 1 });
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
      gsap.to('.section-market .ch', { duration: 2, opacity: 1 });
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

// 이상형 카드 커서 인터랙션
$(function () {
  $('.event-content--4 .box').mousemove(function (e) {
    if ($('.tournament-container').is(':hidden')) {
      var offset = $(this).offset(),
        constante = 5,
        x = e.pageX - offset.left,
        y = e.pageY - offset.top,
        rx = (($(this).height() / 2 - y) / ($(this).height() / 2)) * constante * 2,
        ry = ((-1 * ($(this).width() / 2 - x)) / ($(this).width() / 2)) * constante;
      // console.log(`${x}`, `${y}`);
      $('.event-content--4 .box__box').css({
        transform: 'rotateX(' + rx + 'deg)' + ' ' + 'rotateY(' + ry + 'deg)',
        transition: 'none',
      });
    }
  });
  $('.event-content--4 .box').mouseleave(function (e) {
    $('.event-content--4 .box__box').css({
      transform: 'rotateX(' + 0 + 'deg)' + ' ' + 'rotateY(' + 0 + 'deg)',
      transition: '1000ms all',
    });
  });
});

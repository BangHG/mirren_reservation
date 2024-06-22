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
  const duration = 0.3; // 각 애니메이션 단계의 지속 시간 (초)
  // const duration = 3 / state; // 3초동안 애니메이션 시간 나눠쓰기

  gsap.set(bar, { height: 0 });

  items.forEach((item) => item.classList.remove('active'));
  itemsBg.forEach((item) => item.classList.remove('active'));

  let heightPercentage = percentages[state];
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
    height: heightPercentage + '%',
    duration: duration * state,
    ease: 'none',
  });
}

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
    },

    onLeaveBack: () => {
      // updateGauge(state);
    },
  },
});

// 8888888888 .d8888b.
// 888       d88P  Y88b
// 888            .d88P
// 8888888       8888"
// 888            "Y8b.
// 888       888    888
// 888       Y88b  d88P
// 8888888888 "Y8888P"

$(function SET_event3() {
  gsap.set('.event-content--3 .card', { rotateY: -180 });
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
    },
  },
});

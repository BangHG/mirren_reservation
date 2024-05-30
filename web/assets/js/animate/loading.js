gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, MotionPathPlugin);

// function scrollSmoother() {
//   // 스무더
// }
// scrollSmoother();
let smoother = ScrollSmoother.create({
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

document.querySelector('.btnTop').addEventListener('click', (e) => {
  gsap.to(window, { duration: 0.3, scrollTo: 0 });
});

// 888       .d88888b.         d8888 8888888b. 8888888 888b    888  .d8888b.
// 888      d88P" "Y88b       d88888 888  "Y88b  888   8888b   888 d88P  Y88b
// 888      888     888      d88P888 888    888  888   88888b  888 888    888
// 888      888     888     d88P 888 888    888  888   888Y88b 888 888
// 888      888     888    d88P  888 888    888  888   888 Y88b888 888  88888
// 888      888     888   d88P   888 888    888  888   888  Y88888 888    888
// 888      Y88b. .d88P  d8888888888 888  .d88P  888   888   Y8888 Y88b  d88P
// 88888888  "Y88888P"  d88P     888 8888888P" 8888888 888    Y888  "Y8888P88

function GsapLoadingNo() {
  // gsap.to(window, { duration: 0.1, scrollTo: 0 });
  //로딩안하기
  // console.log('작업을 위해 로딩화면 생략');

  gsap.to('.section-main .bg', { duration: 0.3 }, '<=');
  gsap.to('.loading ', { duration: 0, opacity: 0, zIndex: '-1' }, '<');
}

function GsapLoadingAnimation() {
  // gsap.to(window, { duration: 0.1, scrollTo: 0 });
  //최상단으로 스크롤 이동
  // smoother.scrollTo('.main', false, 'top');

  loadingSet();
  loadingAnimation();

  // 세팅
  function loadingSet() {
    $('.main-page').css('overflow-y', 'hidden');
    gsap.set('.loading .loading__logo', { opacity: '0' });
    gsap.set('.loading .circle', { filter: 'brightness(1)' });
    gsap.set('.loading .circle--outer', { rotate: '-450deg' });
    gsap.set('.loading .circle--inner', { rotate: '-360deg' });
    gsap.set('.loading .logo', { opacity: '0' });
    gsap.set('.loading .badge', { opacity: '0', scale: '1.1', filter: 'blur(5px)' });

    // gsap.set('.section-main .bg', { scale: 1.15 });

    gsap.set('.header', { top: '-200%' });
    gsap.set('.bg__petal, .section-main .bi', { opacity: '0' });
  }

  //애니메이션
  function loadingAnimation() {
    var tl_logo = gsap.timeline({ ease: 'ease' });
    tl_logo
      //1. 로딩 컨테이너 fadeIn
      .to(
        '.loading .loading__logo',
        {
          duration: 0.3,
          opacity: '1',
        },
        '<'
      )
      //2. bi outer 돌아가면서 나머지 요소 진행{ 뱃지 순차적으로 나타나기,  bg 사라지기,}
      .to(
        '.loading .circle--outer',
        //
        {
          duration: 3.5,
          rotate: '12.5deg',
          onStart: () => {
            //inner 시간차로 회전
            gsap.to('.loading .circle--inner', { duration: 3.9, rotate: '0' }, '=');
            //로고 보여주기
            gsap.to('.loading .logo', { duration: 3.5, opacity: '1' }, '<+=1.5');

            // 하단 문양 나타나기
            // ease: 'elastic.inOut(0.5, 1)'
            gsap.to('.loading .badge--1', { duration: 1, opacity: 0.5, filter: 'none', scale: 1 }, '<-=0.5'); //
            gsap.to('.loading .badge--2', { duration: 1, opacity: 0.5, filter: 'none', scale: 1 }, '<+=0.4'); //
            gsap.to('.loading .badge--3', { duration: 1, opacity: 0.5, filter: 'none', scale: 1 }, '<+=0.4'); //
            gsap.to('.loading .badge--4', { duration: 1, opacity: 0.5, filter: 'none', scale: 1 }, '<+=0.4'); //
            gsap.to('.loading .badge--5', { duration: 1, opacity: 0.5, filter: 'none', scale: 1 }, '<+=0.4'); //
            // gsap.to('.loading', { position: 'absolute', duration: 2, background: 'rgba(0,0,0,0)' }, '<+=0.8'); //
          },
          //역재생
          onComplete: () => {
            // gsap.to('.loading .circle--outer', { duration: 0.4, rotate: '20deg' });
            gsap.to('.loading .circle--outer', { duration: 0.4, rotate: '-45deg' });
          },
        },
        '<='
      )
      // 3. 배경밝아지며 로고확대

      .to(
        '.loading ',
        {
          duration: 1,
          background: '#ebf0ff', //whiteout
          // background: '#3b235d', //whiteout
          onStart: () => {
            // gsap.to('.loading .container', { duration: 0.8, scale: 300, ease: 'elastic.inOut(0.5, 1)' }, '<+=0.5');
            // gsap.to('.loading .container', { duration: 1.5, scale: 20, opacity: 0 });
            // gsap.to('.loading .container', { duration: 0.8, opacity: 0, filter: ' blur(5px) brightness(0.5)' }, '<+=0.1');
            // gsap.to('.loading .container', { duration: 0.8, opacity: 0 }, '<+=0.1');
            // gsap.to('.loading .container', { duration: '1',  ease: 'elastic.inOut(0.5, 1)' }, '<');

            window.scrollTo(0, 0);
            gsap.to('.loading .logo', { duration: 0.8, opacity: 0, scale: 0.5 });
            gsap.to('.loading .circle', { duration: 0.8, scale: 3, opacity: 0 }, '<+=0.1');
            gsap.to('.loading .circle--outer', { duration: 0.8, rotate: '90deg' }, '<');
            gsap.to('.loading .circle--inner', { duration: 0.8, rotate: '-90deg' }, '<');
            gsap.to('.loading .badge', { duration: 0.3, opacity: 0 }, '<');
            // gsap.to('.loading .logo', { duration: 0.3, scale: 0.5, opacity: '0' }, '<');
            gsap.to('.loading .circle', { duration: 0.8, filter: 'brightness(2)' }, '<+=0.5'); //whiteout
          },
          onComplete: () => {
            // gsap.to('.loading', { duration: 1.5, opacity: 0 }, '<+=0.5');
          },
        },
        // '<+=1'
        '<+=4.2'
        // '<+=0.2'
      )

      //4. 헤더 나타나기, 로딩화면 사라지기, 메인화면 줌아웃 (끝)
      .to(
        '.header',
        {
          duration: 1,
          top: 0,
          onStart: () => {
            gsap.to('.loading', { duration: 0.5, opacity: 0 });
            // gsap.to('.section-main .bg', { duration: 0.5, scale: 1 }, '<');
            gsap.to('.loading', { zIndex: '-1' }, '<+=0.5');

            // gsap.to('.section-main ', { zIndex: 1 }, '=');
            gsap.to('.main-page', { overflowY: 'scroll' });
            // gsap.to('.main-page', { overflowY: 'scroll' }, '<=0.5');
            gsap.to('.section-main .bi', { duration: 1, opacity: '1' }, '<+=0.2');
            gsap.to('.bg__petal', { duration: 1, opacity: '1' }, '<=');
          },
          onComplete: () => {},
        },
        '<+=1'
      );
  }
}

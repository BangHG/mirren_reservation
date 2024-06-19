///-----------
const witchThumbSwiper = new Swiper('.section-witch .swiper-thumb .swiper-container', {
  // speed: 400,
  // spaceBetween: 100,
  // slidesPerView: 7,
  allowTouchMove: false,
  freeMode: true,
  threshold: 20, //드래그무시
  // watchSlidesProgress: true,
  // loop: false,
  // width: 'auto',
  // focusableElements: '',
});

const witchSwiper = new Swiper('.section-witch .swiper .swiper-container', {
  speed: 500,
  spaceBetween: 0, //100,
  loop: true,
  allowTouchMove: false, //true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  thumbs: {
    swiper: witchThumbSwiper,
  },
});

witchSwiper.on('slideChange', function () {
  $('.section-witch .swiper .swiper-slide').removeClass('initAni');
  $('.section-witch .swiper-thumb .thumb-btn').removeClass('active');
});
witchSwiper.on('slideChangeTransitionStart', function () {
  $('.section-witch .swiper .swiper-slide-active').addClass('initAni');
  $('.section-witch .swiper-thumb .swiper-slide-thumb-active .thumb-btn').addClass('active');
});

const stigmataSwiper = new Swiper('.section-stigmata .swiper .swiper-container', {
  speed: 1000,
  spaceBetween: 0, //100,
  loop: false,
  allowTouchMove: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});

stigmataSwiper.on('slideChange', function () {
  $('.section-stigmata .swiper .swiper-slide').removeClass('initAni');
});
stigmataSwiper.on('slideChangeTransitionStart', function () {
  $('.section-stigmata .swiper .swiper-slide-active').addClass('initAni');
});

//성흔 탭
$('#stigmata-tab').each(function (e) {
  $(this)
    .find('.tab-link')
    .click(function (e) {
      var active = $(this).attr('data-hash');
      e.preventDefault();
      $(this).parent().parent().find('.tab-link').removeClass('active');
      $(this).parent().parent().parent().find('.tab-content').stop().removeClass('active');
      //.hide();
      // btn해제
      $('#stigmata-tab .thumb-btn').removeClass('active');

      $('#' + active)
        .find('.thumb-btn')
        .first()
        .addClass('active'); //탭컨텐츠 내 첫 btn에 포커스

      $(this).addClass('active'); //클릭한 탭에 active

      //슬라이드 이동
      const btnIndex = $(this).attr('data-moveTo');
      // stigmataSwiper.slideTo(btnIndex);
      stigmataSwiper.slideTo(getSlideIndexByClass('.section-stigmata', 'stigmata--' + btnIndex));

      //탭 컨텐츠 나타나기
      // setTimeout(() => {
      $('#' + active)
        .stop()
        .addClass('active');
      // .fadeIn();

      //.show();
      // }, 200);
      return false;
    });
});
function stigmataTab() {
  $('.stigmata-group').each(function () {
    $(this).find('.thumb-btn:nth-child(1)').addClass('active');
  });
  //tab 클릭하면 이동
  $('#stigmata-tab .thumb-btn').on('click', function () {
    // const id = $(this).attr('id');
    if ($(this).hasClass('active')) {
    } else {
      // console.log(id);
      $('#stigmata-tab .thumb-btn').removeClass('active');
      $(this).stop().addClass('active');
    }
  });
}

$.ajax({
  type: 'GET',
  url: `${$rootUrl}/common/json/stigmata.json`,
  dataType: 'json',
}).done(function (data) {
  var stigmataItem = '';

  //성흔 탭(썸네일) 뿌리기
  var stigmataTab1 = '';
  var stigmataTab2 = '';
  var stigmataTab3 = '';
  var stigmataTab4 = '';
  var stigmataTab5 = '';
  var stigmataTab6 = '';

  $.each(data.list, function (index, item) {
    if (item.tribe === '1') {
      stigmataTab1 += '<button class="thumb-btn" id="stigmata--' + item.id + '" title="' + item.name + '"><span class="spin"></span></button>';
    }
    if (item.tribe === '2') {
      stigmataTab2 += '<button class="thumb-btn" id="stigmata--' + item.id + '" title="' + item.name + '"><span class="spin"></span></button>';
    }
    if (item.tribe === '3') {
      stigmataTab3 += '<button class="thumb-btn" id="stigmata--' + item.id + '" title="' + item.name + '"><span class="spin"></span></button>';
    }
    if (item.tribe === '4') {
      stigmataTab4 += '<button class="thumb-btn" id="stigmata--' + item.id + '" title="' + item.name + '"><span class="spin"></span></button>';
    }
    if (item.tribe === '5') {
      stigmataTab5 += '<button class="thumb-btn" id="stigmata--' + item.id + '" title="' + item.name + '"><span class="spin"></span></button>';
    }
    if (item.tribe === '6') {
      stigmataTab6 += '<button class="thumb-btn" id="stigmata--' + item.id + '" title="' + item.name + '"><span class="spin"></span></button>';
    }
  });

  $('#tabContent1 .stigmata-group').html(stigmataTab1);
  $('#tabContent2 .stigmata-group').html(stigmataTab2);
  $('#tabContent3 .stigmata-group').html(stigmataTab3);
  $('#tabContent4 .stigmata-group').html(stigmataTab4);
  $('#tabContent5 .stigmata-group').html(stigmataTab5);
  $('#tabContent6 .stigmata-group').html(stigmataTab6);

  stigmataTab();

  // 성흔 리스트 뿌리기
  $.each(data.list, function (index, angel) {
    stigmataItem += `<div class="swiper-slide stigmata stigmata--` + angel.id + `">`;
    // stigmataItem += `<div class="swiper-slide stigmata stigmata--` + angel.id + `" data-index="stigmata--` + angel.id + `">`;
    stigmataItem += `<div class="bg"></div> <div class="ch"> </div>`;
    stigmataItem += `<div class="spec"><p class="sr-only">` + angel.spec + `</p> </div>`;
    // stigmataItem += `<div class="spec"> <img loading="lazy" src="${$rootUrl}/web/assets/images/stigmata/` + angel.id + `/spec.webp"> <p class="sr-only"> ` + angel.spec + `</p> </div>`;
    stigmataItem += `<div class="title-bx">`;
    stigmataItem += `<p class="name"> ` + angel.name + ` </p>`;
    stigmataItem += `<dl class="cv"><dt>CV</dt>`;
    // stigmataItem += `<dd><img loading="lazy" src="${$rootUrl}/common/audio/` + angel.id + `_ko.png" alt="` + angel.cv_ko + `" /><button class="cv-btn" data-audio="` + angel.id + `_ko"></button></dd>`;
    stigmataItem += `<dd><img loading="lazy" src="${$rootUrl}/common/audio/` + angel.id + `_ja.png" alt="` + angel.cv_ja + `" /><button class="cv-btn" data-audio="` + angel.id + `_ja"></button></dd>`;
    stigmataItem += `</dl>`;
    stigmataItem += `<p class="desc"> ` + angel.desc + ` </p>`;
    stigmataItem += `</div></div>`;
  });

  $('#stigmataList').html(stigmataItem);

  $('#stigmata-tab .thumb-btn').on('click', function () {
    const btnIndex = $(this).attr('id'); //.split('--')[1];
    // stigmataSwiper.slideTo(btnIndex);
    // stigmataSwiper.slideTo(btnIndex);
    stigmataSwiper.slideTo(getSlideIndexByClass('.section-stigmata', btnIndex));
    // console.log('여기로갑시다 ' + btnIndex);
  });
  audioCv();
});

//
// 클래스 이름 찾아서 이동하기
function getSlideIndexByClass(swiperName, className) {
  var index = 0;
  $.each($(swiperName).find('.swiper-wrapper').children(), function (i, item) {
    if ($(item).hasClass(className)) {
      index = i;
      return false;
    }
  });
  return index;
}
//

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

const worldSwiper = new Swiper('.section-world .swiper-container', {
  speed: 500,
  spaceBetween: 0, //100,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: '.section-world .swiper-button--next',
    prevEl: '.section-world .swiper-button--prev',
  },
});

//  .d88b.  .d8888b   8888b.  88888b.
// d88P"88b 88K          "88b 888 "88b
// 888  888 "Y8888b. .d888888 888  888
// Y88b 888      X88 888  888 888 d88P
//  "Y88888  88888P' "Y888888 88888P"
//      888                   888
// Y8b d88P                   888
//  "Y88P"                    888
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
